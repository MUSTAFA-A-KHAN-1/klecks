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
        if (this.points.length < 10) return;

        const shape = this.detectShape(this.points);
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

        // Check for circle
        if (this.isCircle(points)) return 'circle';

        // Check for rectangle
        if (this.isRectangle(points)) return 'rectangle';

        // Check for line
        if (this.isLine(points)) return 'line';

        return null;
    }

    private isCircle(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 20) return false;

        // Calculate centroid
        let sumX = 0, sumY = 0;
        for (const p of points) {
            sumX += p.x;
            sumY += p.y;
        }
        const centerX = sumX / points.length;
        const centerY = sumY / points.length;

        // Calculate average distance from center
        let sumDist = 0;
        for (const p of points) {
            const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            sumDist += dist;
        }
        const avgRadius = sumDist / points.length;

        // Check if all points are within reasonable distance of average radius
        let variance = 0;
        for (const p of points) {
            const dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            variance += Math.abs(dist - avgRadius);
        }
        variance /= points.length;

        // If variance is low relative to radius, it's likely a circle
        return variance < avgRadius * 0.3;
    }

    private isRectangle(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 20) return false;

        // Simple rectangle detection: check if points form a rough rectangle shape
        const xs = points.map(p => p.x).sort((a, b) => a - b);
        const ys = points.map(p => p.y).sort((a, b) => a - b);

        const minX = xs[0], maxX = xs[xs.length - 1];
        const minY = ys[0], maxY = ys[ys.length - 1];

        // Check if points are distributed along the perimeter
        let cornerCount = 0;
        for (const p of points) {
            if ((Math.abs(p.x - minX) < 10 && Math.abs(p.y - minY) < 10) ||
                (Math.abs(p.x - minX) < 10 && Math.abs(p.y - maxY) < 10) ||
                (Math.abs(p.x - maxX) < 10 && Math.abs(p.y - minY) < 10) ||
                (Math.abs(p.x - maxX) < 10 && Math.abs(p.y - maxY) < 10)) {
                cornerCount++;
            }
        }

        return cornerCount >= 3; // At least 3 corners detected
    }

    private isLine(points: { x: number; y: number; time: number }[]): boolean {
        if (points.length < 10) return false;

        // Simple line detection: check if points are roughly colinear
        const start = points[0];
        const end = points[points.length - 1];

        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        if (length < 20) return false; // Too short to be a line

        let totalDeviation = 0;
        for (let i = 1; i < points.length - 1; i++) {
            const p = points[i];
            // Distance from point to line
            const dist = Math.abs(dy * (p.x - start.x) - dx * (p.y - start.y)) / length;
            totalDeviation += dist;
        }
        const avgDeviation = totalDeviation / (points.length - 2);

        return avgDeviation < 5; // Low deviation indicates a straight line
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
}
