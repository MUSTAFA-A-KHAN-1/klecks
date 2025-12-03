import { BB } from '../../bb/bb';
import { TDrawEvent } from '../../../../app/script/klecks/kl-types';

/**
 * Shape recognition. EventChain element. Detects when cursor is held at a point and recognizes shapes.
 *
 * This version prefers @tldraw/tldraw utilities (if installed) and falls back to the built-in heuristics.
 *
 * Use:
 * - Install tldraw for best results: `npm install @tldraw/tldraw`
 * - Parcel-friendly: uses eval('import(...)') so bundlers won't resolve missing optional packages at build time.
 *
 * in some draw event
 * out some draw event
 *
 * type: 'line' Events are just passed through.
 */
export class ShapeRecognition {
    private chainOut: ((drawEvent: TDrawEvent) => void) | undefined;
    private points: { x: number; y: number; time: number }[] = [];
    private holdTimeout: ReturnType<typeof setTimeout> | undefined;
    private isHolding = false;
    private holdThreshold = 500; // ms
    private onShapeRecognized: ((shape: 'circle' | 'rectangle' | 'line') => void) | undefined;
    private recognizedShape: { type: 'circle' | 'rectangle' | 'line', x1: number, y1: number, x2: number, y2: number } | null = null;

    // External recognizer adapter (if found at runtime)
    // expose: recognize(points) and getParams(type, points)
    private externalRecognizer: {
        recognize?: (points: { x: number; y: number; time?: number }[]) => Promise<'circle' | 'rectangle' | 'line' | null> | ('circle' | 'rectangle' | 'line' | null);
        getParams?: (type: 'circle' | 'rectangle' | 'line', points: { x: number; y: number; time?: number }[]) => { x1: number, y1: number, x2: number, y2: number };
    } | null = null;

    constructor(p: {
        onShapeRecognized: (shape: 'circle' | 'rectangle' | 'line') => void;
    }) {
        this.onShapeRecognized = p.onShapeRecognized;
        // Load recognizer in background (runtime-only)
        void this.loadExternalRecognizer();
    }

    chainIn(event: TDrawEvent): TDrawEvent | null {
        event = BB.copyObj(event);
        const now = Date.now();
        // console.log('ShapeRecognition chainIn', event.type, this.points.length, 'points recorded');

        if (event.type === 'down') {
            this.points = [{ x: event.x, y: event.y, time: now }];
            this.isHolding = false;
            clearTimeout(this.holdTimeout);
            this.holdTimeout = setTimeout(() => {
                this.isHolding = true;
                void this.recognizeShape();
            }, this.holdThreshold);
        } else if (event.type === 'move') {
            this.points.push({ x: event.x, y: event.y, time: now });
            if (this.points.length > 200) {
                this.points.shift(); // Keep recent points
            }
            if (!this.isHolding) {
                clearTimeout(this.holdTimeout);
                this.holdTimeout = setTimeout(() => {
                    this.isHolding = true;
                    void this.recognizeShape();
                }, this.holdThreshold);
            }
        } else if (event.type === 'up') {
            clearTimeout(this.holdTimeout);
            this.isHolding = false;
            this.points = [];
        }

        return event;
    }

    private async recognizeShape(): Promise<void> {
        // console.log('trying to recognise shape');
        if (this.points.length < 10) return;

        // Prefer external recognizer if available
        if (this.externalRecognizer && typeof this.externalRecognizer.recognize === 'function') {
            try {
                const maybeShape = await this.externalRecognizer.recognize(this.points);
                // console.log('external recognizer result:', maybeShape);
                if (maybeShape) {
                    const params = this.externalRecognizer.getParams
                        ? this.externalRecognizer.getParams(maybeShape, this.points)
                        : this.getShapeParams(maybeShape, this.points);
                    this.recognizedShape = { type: maybeShape, ...params };
                    if (this.onShapeRecognized) this.onShapeRecognized(maybeShape);
                    return;
                }
            } catch (err) {
                // If external fails, fall back to internal
                // console.warn('External recognizer failed; falling back', err);
            }
        }

        // Internal fallback
        const shape = this.detectShape(this.points);
        // console.log('detected shape (internal):', shape);
        if (shape) {
            const params = this.getShapeParams(shape, this.points);
            this.recognizedShape = { type: shape, ...params };
            if (this.onShapeRecognized) {
                this.onShapeRecognized(shape);
            }
        } else {
            this.recognizedShape = null;
        }
    }

    /**
     * Attempt to load @tldraw/tldraw or other recognizers at runtime only.
     * Uses eval('import(...)') so bundlers (Parcel) don't try to resolve it at build time.
     */
    private async loadExternalRecognizer(): Promise<void> {
        const candidates = [
            '@tldraw/tldraw',
            '@tldraw/core',
            // fallback names just in case someone publishes a tiny recognizer
            'shape-recognition',
            'shape-recognizer',
        ];

        for (const pkg of candidates) {
            try {
                // runtime-only import (avoid bundler static analysis)
                // eslint-disable-next-line no-eval, @typescript-eslint/no-explicit-any
                const mod: any = await eval('import("' + pkg + '")').catch(() => null);
                if (!mod) continue;

                // tldraw typically exports many helpers under names like Geometry2d, etc.
                // We'll probe for likely helper functions or shape utils.
                // 1) Look for explicit shape detection utilities
                // try mod.getEllipseFromPoints / mod.getRectangleFromPoints / mod.getLineFromPoints
                const candidate = mod.default ?? mod;

                // Helper: convert incoming points to simple {x,y} arrays (if needed)
                const normalizePoints = (pts: { x: number; y: number; time?: number }[]) =>
                    pts.map(p => ({ x: p.x, y: p.y }));

                // If module exposes a detect/detection function directly
                if (typeof candidate?.detectShape === 'function') {
                    this.externalRecognizer = {
                        recognize: (points) => candidate.detectShape(points),
                        getParams: (type, points) => (typeof candidate.getShapeParams === 'function' ? candidate.getShapeParams(type, points) : this.getShapeParams(type, points as any))
                    };
                    console.log('ShapeRecognition: using', pkg, 'detectShape');
                    return;
                }

                // If module exports helpers like getEllipseFromPoints or getRectangleFromPoints
                const getEllipse = candidate?.getEllipseFromPoints ?? candidate?.getEllipse ?? candidate?.ellipseFromPoints;
                const getRect = candidate?.getRectangleFromPoints ?? candidate?.getRectangle ?? candidate?.rectFromPoints;
                const getLine = candidate?.getLineFromPoints ?? candidate?.getLine ?? candidate?.lineFromPoints;

                if (getEllipse || getRect || getLine) {
                    this.externalRecognizer = {
                        recognize: (points) => {
                            // try circle first (ellipse), then rectangle, then line
                            const pts = normalizePoints(points);
                            if (getEllipse) {
                                try {
                                    const ell = getEllipse(pts);
                                    if (ell) return 'circle';
                                } catch { /**/ }
                            }
                            if (getRect) {
                                try {
                                    const r = getRect(pts);
                                    if (r) return 'rectangle';
                                } catch { /**/ }
                            }
                            if (getLine) {
                                try {
                                    const l = getLine(pts);
                                    if (l) return 'line';
                                } catch { /**/ }
                            }
                            return null;
                        },
                        getParams: (type, points) => {
                            const pts = normalizePoints(points);
                            if (type === 'circle' && getEllipse) {
                                const ell = getEllipse(pts);
                                if (ell && ell.cx !== undefined && ell.cy !== undefined && ell.rx !== undefined && ell.ry !== undefined) {
                                    const cx = ell.cx, cy = ell.cy;
                                    const r = Math.max(ell.rx, ell.ry);
                                    return { x1: cx - r, y1: cy - r, x2: cx + r, y2: cy + r };
                                }
                                // fallback to bounding box
                            }
                            if (type === 'rectangle' && getRect) {
                                const r = getRect(pts);
                                if (r && r.x !== undefined && r.y !== undefined && r.width !== undefined && r.height !== undefined) {
                                    return { x1: r.x, y1: r.y, x2: r.x + r.width, y2: r.y + r.height };
                                }
                            }
                            if (type === 'line' && getLine) {
                                const l = getLine(pts);
                                if (l && l.x1 !== undefined) {
                                    return { x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2 };
                                }
                            }
                            // fallback: approximate via bounding box / original method
                            return this.getShapeParams(type, points as any);
                        }
                    };
                    console.log('ShapeRecognition: using', pkg, 'ellipse/rect/line helpers');
                    return;
                }

                // tldraw shape utils are sometimes under nested objects; try to find known helpers
                // e.g., some exports may include Geometry2d utilities to compute bounding boxes or fit ellipses.
                // We'll do a gentle probe for helpful keys and wire them to our adapter if found.
                if (candidate) {
                    // try to find any function that looks helpful
                    const names = Object.keys(candidate);
                    const lowerNames = names.map(n => n.toLowerCase());
                    const hasEllipse = lowerNames.find(n => n.includes('ellipse') || n.includes('ellipsefrom'));
                    const hasRect = lowerNames.find(n => n.includes('rectangle') || n.includes('rectfrom') || n.includes('rect'));
                    const hasLine = lowerNames.find(n => n.includes('line') || n.includes('linestart') || n.includes('segment'));

                    const fnEllipse = hasEllipse ? candidate[names[lowerNames.indexOf(hasEllipse)]] : null;
                    const fnRect = hasRect ? candidate[names[lowerNames.indexOf(hasRect)]] : null;
                    const fnLine = hasLine ? candidate[names[lowerNames.indexOf(hasLine)]] : null;

                    if (fnEllipse || fnRect || fnLine) {
                        this.externalRecognizer = {
                            recognize: (points) => {
                                const pts = normalizePoints(points);
                                if (fnEllipse) {
                                    try { if (fnEllipse(pts)) return 'circle'; } catch {}
                                }
                                if (fnRect) {
                                    try { if (fnRect(pts)) return 'rectangle'; } catch {}
                                }
                                if (fnLine) {
                                    try { if (fnLine(pts)) return 'line'; } catch {}
                                }
                                return null;
                            },
                            getParams: (type, points) => {
                                // best-effort extraction; if helper returns bounding box-like object, convert it
                                const pts = normalizePoints(points);
                                try {
                                    if (type === 'circle' && fnEllipse) {
                                        const out = fnEllipse(pts);
                                        if (out && out.cx !== undefined) {
                                            const cx = out.cx, cy = out.cy, r = out.r ?? Math.max(out.rx ?? 0, out.ry ?? 0);
                                            return { x1: cx - r, y1: cy - r, x2: cx + r, y2: cy + r };
                                        }
                                    }
                                    if (type === 'rectangle' && fnRect) {
                                        const out = fnRect(pts);
                                        if (out && out.x !== undefined && out.y !== undefined && out.width !== undefined && out.height !== undefined) {
                                            return { x1: out.x, y1: out.y, x2: out.x + out.width, y2: out.y + out.height };
                                        }
                                    }
                                    if (type === 'line' && fnLine) {
                                        const out = fnLine(pts);
                                        if (out && out.x1 !== undefined) {
                                            return { x1: out.x1, y1: out.y1, x2: out.x2, y2: out.y2 };
                                        }
                                    }
                                } catch (e) { /* ignore extraction errors */ }

                                // final fallback
                                return this.getShapeParams(type as any, points as any);
                            }
                        };
                        console.log('ShapeRecognition: using heuristics from', pkg);
                        return;
                    }
                }

            } catch (err) {
                // ignore and continue
                // console.debug('loadExternalRecognizer error for', pkg, err);
            }
        }

        // If nothing found
        // console.log('No external shape recognizer found; using built-in heuristics');
        this.externalRecognizer = null;
    }

    private detectShape(points: { x: number; y: number; time: number }[]): 'circle' | 'rectangle' | 'line' | null {
        if (points.length < 10) return null;

        const xs = points.map(p => p.x);
        const ys = points.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        const aspect = height === 0 ? Infinity : width / height;

        if (aspect > 5 || aspect < 0.2) {
            if (this.isLine(points)) return 'line';
            return null;
        }

        if (aspect > 0.7 && aspect < 1.3) {
            if (this.isCircle(points)) return 'circle';
        }

        if (this.isRectangle(points)) return 'rectangle';
        if (this.isLine(points)) return 'line';

        return null;
    }

    // --------- circle detection (round-ish bbox + radius variance) ---------
    private isCircle(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 20) return false;

        const xs = points.map(p => p.x);
        const ys = points.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        const width = maxX - minX;
        const height = maxY - minY;

        if (width < 10 || height < 10) return false;

        const aspect = width / height;
        if (aspect < 0.7 || aspect > 1.3) return false;

        let sumX = 0, sumY = 0;
        for (const p of points) {
            sumX += p.x;
            sumY += p.y;
        }
        const centerX = sumX / points.length;
        const centerY = sumY / points.length;

        let sumDist = 0;
        for (const p of points) {
            const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            sumDist += dist;
        }
        const avgRadius = sumDist / points.length;

        let variance = 0;
        for (const p of points) {
            const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            variance += Math.abs(dist - avgRadius);
        }
        variance /= points.length;

        return variance < avgRadius * 0.5;
    }

    // --------- rectangle detection (relaxed, corner-based, avoids lines) ---------
    private isRectangle(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 12) return false;

        const xs = points.map(p => p.x);
        const ys = points.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        const width = maxX - minX;
        const height = maxY - minY;

        if (width < 15 || height < 15) return false;

        const aspect = width / height;
        if (aspect > 5 || aspect < 0.2) {
            return false;
        }

        const cornerThreshold = Math.max(8, Math.min(width, height) * 0.25);

        let topLeft = false;
        let topRight = false;
        let bottomLeft = false;
        let bottomRight = false;

        for (const p of points) {
            const dxLeft = Math.abs(p.x - minX);
            const dxRight = Math.abs(p.x - maxX);
            const dyTop = Math.abs(p.y - minY);
            const dyBottom = Math.abs(p.y - maxY);

            if (dxLeft < cornerThreshold && dyTop < cornerThreshold) topLeft = true;
            if (dxRight < cornerThreshold && dyTop < cornerThreshold) topRight = true;
            if (dxLeft < cornerThreshold && dyBottom < cornerThreshold) bottomLeft = true;
            if (dxRight < cornerThreshold && dyBottom < cornerThreshold) bottomRight = true;
        }

        const cornerCount = [topLeft, topRight, bottomLeft, bottomRight].filter(v => v).length;
        return cornerCount >= 3;
    }

    // --------- line detection (more tolerant of wobble) ---------
    private isLine(points: { x: number; y: number; time: number }[]): boolean {
        const start = points[0];
        const end = points[points.length - 1];

        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        let totalDeviation = 0;
        for (let i = 1; i < points.length - 1; i++) {
            const p = points[i];
            const dist = Math.abs(dy * (p.x - start.x) - dx * (p.y - start.y)) / (length || 1);
            totalDeviation += dist;
        }
        const avgDeviation = totalDeviation / Math.max(1, points.length - 2);
        return avgDeviation < 7;
    }

    private getShapeParams(type: 'circle' | 'rectangle' | 'line', points: { x: number; y: number; time: number }[]): { x1: number, y1: number, x2: number, y2: number } {
        if (type === 'line') {
            return { x1: points[0].x, y1: points[0].y, x2: points[points.length - 1].x, y2: points[points.length - 1].y };
        } else if (type === 'rectangle') {
            const xs = points.map(p => p.x).sort((a, b) => a - b);
            const ys = points.map(p => p.y).sort((a, b) => a - b);
            return { x1: xs[0], y1: ys[0], x2: xs[xs.length - 1], y2: ys[ys.length - 1] };
        } else if (type === 'circle') {
            let sumX = 0, sumY = 0;
            for (const p of points) {
                sumX += p.x;
                sumY += p.y;
            }
            const centerX = sumX / points.length;
            const centerY = sumY / points.length;
            let sumDist = 0;
            for (const p of points) {
                const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
                sumDist += dist;
            }
            const radius = sumDist / points.length;
            return { x1: centerX - radius, y1: centerY - radius, x2: centerX + radius, y2: centerY + radius };
        }
        throw new Error('Unknown shape type');
    }

    getRecognizedShape(): { type: 'circle' | 'rectangle' | 'line', x1: number, y1: number, x2: number, y2: number } | null {
        return this.recognizedShape;
    }

    setChainOut(func: (drawEvent: TDrawEvent) => void): void {
        this.chainOut = func;
    }

    setOnShapeRecognized(callback: (shape: 'circle' | 'rectangle' | 'line') => void): void {
        this.onShapeRecognized = callback;
    }

    // Static method for recognizing shape from a list of points (for console API)
    static async recognizeShapeFromPoints(points: { x: number; y: number }[]): Promise<'circle' | 'rectangle' | 'line' | null> {
        if (points.length < 10) return null;
        const ptsWithTime = points.map(p => ({ ...p, time: Date.now() }));

        // runtime-only attempt to load tldraw or similar (won't break build if missing)
        try {
            // eslint-disable-next-line no-eval, @typescript-eslint/no-explicit-any
            const mod: any = await eval('import("@tldraw/tldraw")').catch(() => null) || await eval('import("@tldraw/core")').catch(() => null);
            if (mod) {
                const candidate = mod.default ?? mod;
                if (typeof candidate?.detectShape === 'function') {
                    return candidate.detectShape(ptsWithTime);
                }
                // otherwise fallthrough to local static heuristics
            }
        } catch {
            // ignore and fallback
        }

        // Fallback: replicate internal static detection
        const xs = ptsWithTime.map(p => p.x);
        const ys = ptsWithTime.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        const aspect = height === 0 ? Infinity : width / height;

        if (aspect > 5 || aspect < 0.2) {
            if (ShapeRecognition.isLineStatic(ptsWithTime)) return 'line';
            return null;
        }

        if (aspect > 0.7 && aspect < 1.3) {
            if (ShapeRecognition.isCircleStatic(ptsWithTime)) return 'circle';
        }

        if (ShapeRecognition.isRectangleStatic(ptsWithTime)) return 'rectangle';
        if (ShapeRecognition.isLineStatic(ptsWithTime)) return 'line';
        return null;
    }

    // --------- static helpers (same logic as before) ---------
    private static isCircleStatic(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 20) return false;
        const xs = points.map(p => p.x);
        const ys = points.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        if (width < 10 || height < 10) return false;
        const aspect = width / height;
        if (aspect < 0.7 || aspect > 1.3) return false;
        let sumX = 0, sumY = 0;
        for (const p of points) { sumX += p.x; sumY += p.y; }
        const centerX = sumX / points.length;
        const centerY = sumY / points.length;
        let sumDist = 0;
        for (const p of points) { sumDist += Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2); }
        const avgRadius = sumDist / points.length;
        let variance = 0;
        for (const p of points) { variance += Math.abs(Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2) - avgRadius); }
        variance /= points.length;
        return variance < avgRadius * 0.5;
    }

    private static isRectangleStatic(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 12) return false;
        const xs = points.map(p => p.x);
        const ys = points.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        if (width < 15 || height < 15) return false;
        const aspect = width / height;
        if (aspect > 5 || aspect < 0.2) return false;
        const cornerThreshold = Math.max(8, Math.min(width, height) * 0.25);
        let topLeft = false, topRight = false, bottomLeft = false, bottomRight = false;
        for (const p of points) {
            const dxLeft = Math.abs(p.x - minX);
            const dxRight = Math.abs(p.x - maxX);
            const dyTop = Math.abs(p.y - minY);
            const dyBottom = Math.abs(p.y - maxY);
            if (dxLeft < cornerThreshold && dyTop < cornerThreshold) topLeft = true;
            if (dxRight < cornerThreshold && dyTop < cornerThreshold) topRight = true;
            if (dxLeft < cornerThreshold && dyBottom < cornerThreshold) bottomLeft = true;
            if (dxRight < cornerThreshold && dyBottom < cornerThreshold) bottomRight = true;
        }
        const cornerCount = [topLeft, topRight, bottomLeft, bottomRight].filter(v => v).length;
        return cornerCount >= 3;
    }

    private static isLineStatic(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 5) return false;
        const start = points[0];
        const end = points[points.length - 1];
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        if (length < 15) return false;
        let totalDeviation = 0;
        for (let i = 1; i < points.length - 1; i++) {
            const p = points[i];
            const dist = Math.abs(dy * (p.x - start.x) - dx * (p.y - start.y)) / (length || 1);
            totalDeviation += dist;
        }
        const avgDeviation = totalDeviation / Math.max(1, points.length - 2);
        return avgDeviation < 7;
    }
}
