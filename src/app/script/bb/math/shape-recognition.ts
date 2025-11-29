import { BB } from '../../bb/bb';
import { TDrawEvent } from '../../../../app/script/klecks/kl-types';

/**
 * Shape recognition. EventChain element. Detects when cursor is held at a point and recognizes shapes.
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

    // ----------------------------------- public -----------------------------------
    constructor(p: {
        onShapeRecognized: (shape: 'circle' | 'rectangle' | 'line') => void;
    }) {
        this.onShapeRecognized = p.onShapeRecognized;
    }

    chainIn(event: TDrawEvent): TDrawEvent | null {
        event = BB.copyObj(event);
        const now = Date.now();
        console.log('ShapeRecognition chainIn', event.type, this.points.length, 'points recorded');

        if (event.type === 'down') {
            this.points = [{ x: event.x, y: event.y, time: now }];
            this.isHolding = false;
            clearTimeout(this.holdTimeout);
            this.holdTimeout = setTimeout(() => {
                this.isHolding = true;
                this.recognizeShape();
            }, this.holdThreshold);
        } else if (event.type === 'move') {
            this.points.push({ x: event.x, y: event.y, time: now });
            if (this.points.length > 100) {
                this.points.shift(); // Keep only recent points
            }
            if (!this.isHolding) {
                console.log('Resetting hold timeout');
                clearTimeout(this.holdTimeout);
                this.holdTimeout = setTimeout(() => {
                    this.isHolding = true;
                    this.recognizeShape();
                }, this.holdThreshold);
            }
        } else if (event.type === 'up') {
            clearTimeout(this.holdTimeout);
            this.isHolding = false;
            this.points = [];
        }

        return event;
    }

    private recognizeShape(): void {
        console.log('trying to recognise shape');
        if (this.points.length < 10) return;

        const shape = this.detectShape(this.points);
        console.log('detected shape:', shape);
        if (shape) {
            const params = this.getShapeParams(shape, this.points);
            this.recognizedShape = { type: shape, ...params };
            if (this.onShapeRecognized) {
                this.onShapeRecognized(shape);
            }
        }
    }

    private detectShape(points: { x: number; y: number; time: number }[]): 'circle' | 'rectangle' | 'line' | null {
        if (points.length < 10) return null;

        // First handle very elongated shapes as lines only.
        const xs = points.map(p => p.x);
        const ys = points.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        const aspect = height === 0 ? Infinity : width / height;

        // If extremely elongated → likely a line
        if (aspect > 5 || aspect < 0.2) {
            if (this.isLine(points)) return 'line';
            return null;
        }

        // Normal aspect ratio:
        // 1. Try circle for near-square bounding boxes
        if (aspect > 0.7 && aspect < 1.3) {
            if (this.isCircle(points)) return 'circle';
        }

        // 2. Try rectangle (for most non-elongated shapes)
        if (this.isRectangle(points)) return 'rectangle';

        // 3. Fallback to line
        if (this.isLine(points)) return 'line';

        return null;
    }

    // --------- circle detection (round-ish bbox + radius variance) ---------
    private isCircle(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 20) return false;

        // Bounding box
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
        // Circle should not be too elongated
        if (aspect < 0.7 || aspect > 1.3) return false;

        // Centroid
        let sumX = 0, sumY = 0;
        for (const p of points) {
            sumX += p.x;
            sumY += p.y;
        }
        const centerX = sumX / points.length;
        const centerY = sumY / points.length;

        // Average radius
        let sumDist = 0;
        for (const p of points) {
            const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            sumDist += dist;
        }
        const avgRadius = sumDist / points.length;

        // Variance of radius
        let variance = 0;
        for (const p of points) {
            const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            variance += Math.abs(dist - avgRadius);
        }
        variance /= points.length;

        // More forgiving than original
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
        // Extremely elongated shapes are probably not rectangles; let line handle those
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

        // Freehand rectangle just needs ~3 corners to be hit
        return cornerCount >= 3;
    }

    // --------- line detection (more tolerant of wobble) ---------
    private isLine(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 5) return false;

        const start = points[0];
        const end = points[points.length - 1];

        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        if (length < 15) return false; // Too short to be a line

        let totalDeviation = 0;
        for (let i = 1; i < points.length - 1; i++) {
            const p = points[i];
            // Distance from point to line
            const dist = Math.abs(dy * (p.x - start.x) - dx * (p.y - start.y)) / (length || 1);
            totalDeviation += dist;
        }
        const avgDeviation = totalDeviation / Math.max(1, points.length - 2);

        // Allow more wobble than before
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
    static recognizeShapeFromPoints(points: { x: number; y: number }[]): 'circle' | 'rectangle' | 'line' | null {
        if (points.length < 10) return null;

        // Add fake time for compatibility
        const pointsWithTime = points.map(p => ({ ...p, time: Date.now() }));

        // Reuse same logic but via static helpers
        // First handle elongated shapes as line-only
        const xs = pointsWithTime.map(p => p.x);
        const ys = pointsWithTime.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        const aspect = height === 0 ? Infinity : width / height;

        if (aspect > 5 || aspect < 0.2) {
            if (ShapeRecognition.isLineStatic(pointsWithTime)) return 'line';
            return null;
        }

        if (aspect > 0.7 && aspect < 1.3) {
            if (ShapeRecognition.isCircleStatic(pointsWithTime)) return 'circle';
        }

        if (ShapeRecognition.isRectangleStatic(pointsWithTime)) return 'rectangle';
        if (ShapeRecognition.isLineStatic(pointsWithTime)) return 'line';

        return null;
    }

    // --------- static circle / rectangle / line for console API ---------
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
