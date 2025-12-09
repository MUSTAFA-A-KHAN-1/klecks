import { BB } from '../../bb/bb';
import { ALPHA_IM_ARR } from './brushes-common';
import { TPressureInput, TRgb } from '../kl-types';
import { BezierLine } from '../../bb/math/line';
import { KlHistory } from '../history/kl-history';
import { getPushableLayerChange } from '../history/push-helpers/get-pushable-layer-change';
import { TBounds } from '../../bb/bb-types';
import { canvasAndChangedTilesToLayerTiles } from '../history/push-helpers/canvas-to-layer-tiles';
import { getChangedTiles, updateChangedTiles } from '../history/push-helpers/changed-tiles';
import { MultiPolygon } from 'polygon-clipping';
import { getSelectionPath2d } from '../../bb/multi-polygon/get-selection-path-2d';
import { boundsOverlap, integerBounds } from '../../bb/math/math';
import { getMultiPolyBounds } from '../../bb/multi-polygon/get-multi-polygon-bounds';
import { tsParticles, type Engine } from '@tsparticles/engine';
import type { Container } from '@tsparticles/engine';
import { loadStarShape } from '@tsparticles/shape-star';

const ALPHA_CIRCLE = 0;
const ALPHA_CHALK = 1;
const ALPHA_CAL = 2; // calligraphy
const ALPHA_SQUARE = 3;

const TWO_PI = 2 * Math.PI;

export class GlitterBrush {
    private context: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;
    private klHistory: KlHistory = {} as KlHistory;
    private particleContainer: Container | undefined = undefined;

    private settingHasOpacityPressure: boolean = false;
    private settingHasScatterPressure: boolean = false;
    private settingHasSizePressure: boolean = true;
    private settingSize: number = 2;
    private settingSpacing: number = 0.8489;
    private settingOpacity: number = 1;
    private settingScatter: number = 0;
    private settingColor: TRgb = {} as TRgb;
    private settingColorStr: string = '';
    private settingAlphaId: number = ALPHA_CIRCLE;
    private settingLockLayerAlpha: boolean = false;
    private settingSparkleCount: number = 5; // number of sparkles per dot

    private hasDrawnDot: boolean = false;
    private lineToolLastDot: number = 0;
    private lastInput: TPressureInput = { x: 0, y: 0, pressure: 0 };
    private lastInput2: TPressureInput = { x: 0, y: 0, pressure: 0 };
    private inputArr: TPressureInput[] = [];
    private inputIsDrawing: boolean = false;
    private bezierLine: BezierLine | null = null;

    // mipmapping
    private readonly alphaCanvas128: HTMLCanvasElement = BB.canvas(128, 128);
    private readonly alphaCanvas64: HTMLCanvasElement = BB.canvas(64, 64);
    private readonly alphaCanvas32: HTMLCanvasElement = BB.canvas(32, 32);
    private readonly alphaOpacityArr: number[] = [1, 0.9, 1, 1];

    private changedTiles: boolean[] = [];

    private selection: MultiPolygon | undefined;
    private selectionPath: Path2D | undefined;
    private selectionBounds: TBounds | undefined;

    private updateChangedTiles(bounds: TBounds) {
        const boundsWithinSelection = boundsOverlap(bounds, this.selectionBounds);
        if (!boundsWithinSelection) {
            return;
        }
        this.changedTiles = updateChangedTiles(
            this.changedTiles,
            getChangedTiles(
                boundsWithinSelection,
                this.context.canvas.width,
                this.context.canvas.height,
            ),
        );
    }

    private updateAlphaCanvas() {
        if (this.settingAlphaId === ALPHA_CIRCLE || this.settingAlphaId === ALPHA_SQUARE) {
            return;
        }

        const instructionArr: [HTMLCanvasElement, number][] = [
            [this.alphaCanvas128, 128],
            [this.alphaCanvas64, 64],
            [this.alphaCanvas32, 32],
        ];

        let ctx;

        for (let i = 0; i < instructionArr.length; i++) {
            ctx = BB.ctx(instructionArr[i][0] as any);

            ctx.save();
            ctx.clearRect(0, 0, instructionArr[i][1], instructionArr[i][1]);

            ctx.fillStyle =
                'rgba(' +
                this.settingColor.r +
                ', ' +
                this.settingColor.g +
                ', ' +
                this.settingColor.b +
                ', ' +
                this.alphaOpacityArr[this.settingAlphaId] +
                ')';
            ctx.fillRect(0, 0, instructionArr[i][1], instructionArr[i][1]);

            ctx.globalCompositeOperation = 'destination-in';
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(
                ALPHA_IM_ARR[this.settingAlphaId],
                0,
                0,
                instructionArr[i][1],
                instructionArr[i][1],
            );

            ctx.restore();
        }
    }

    private calcOpacity(pressure: number): number {
        return this.settingOpacity * (this.settingHasOpacityPressure ? pressure * pressure : 1);
    }

    private calcScatter(pressure: number): number {
        return (
            this.settingScatter * this.settingSize * (this.settingHasScatterPressure ? pressure : 1)
        );
    }

    /**
     * @param x
     * @param y
     * @param size
     * @param opacity
     * @param scatter
     * @param angle
     * @param before - [x, y, size, opacity, angle] the drawDot call before
     */
    private drawDot(
        x: number,
        y: number,
        size: number,
        opacity: number,
        scatter: number,
        angle?: number,
        before?: [number, number, number, number, number, number | undefined],
    ): void {
        if (size <= 0) {
            return;
        }

        if (this.settingLockLayerAlpha) {
            this.context.globalCompositeOperation = 'source-atop';
        }

        if (!before || before[3] !== opacity) {
            this.context.globalAlpha = opacity;
        }

        if (
            !before &&
            (this.settingAlphaId === ALPHA_CIRCLE || this.settingAlphaId === ALPHA_SQUARE)
        ) {
            this.context.fillStyle = this.settingColorStr;
        }

        // For glitter, use tsparticles to create star-shaped sparkles
        if (this.particleContainer) {
            const sparkleSize = Math.max(0.5, size / 4); // smaller sparkles
            const sparkleRadius = size / 2; // radius around center to place sparkles

            // Create temporary particles for this sparkle burst
            const particles = [];
            for (let i = 0; i < this.settingSparkleCount; i++) {
                let sparkleX = x;
                let sparkleY = y;

                if (scatter > 0) {
                    // scatter equally distributed over area of a circle
                    const scatterAngleRad = Math.random() * 2 * Math.PI;
                    const distance = Math.sqrt(Math.random()) * scatter;
                    sparkleX += Math.cos(scatterAngleRad) * distance;
                    sparkleY += Math.sin(scatterAngleRad) * distance;
                }

                // Add random offset for glitter effect
                const glitterAngle = Math.random() * TWO_PI;
                const glitterDistance = Math.random() * sparkleRadius;
                sparkleX += Math.cos(glitterAngle) * glitterDistance;
                sparkleY += Math.sin(glitterAngle) * glitterDistance;

                particles.push({
                    position: { x: sparkleX, y: sparkleY },
                    size: sparkleSize,
                    color: this.settingColor,
                    opacity: opacity,
                });

                const boundsSize = sparkleSize;
                this.updateChangedTiles({
                    x1: Math.floor(sparkleX - boundsSize),
                    y1: Math.floor(sparkleY - boundsSize),
                    x2: Math.ceil(sparkleX + boundsSize),
                    y2: Math.ceil(sparkleY + boundsSize),
                });
            }

            // Render particles to canvas
            this.renderParticlesToCanvas(particles);
            this.hasDrawnDot = true;
        } else {
            // Fallback to original implementation if particles fail to initialize
            const sparkleSize = Math.max(0.5, size / 4);
            const sparkleRadius = size / 2;

            for (let i = 0; i < this.settingSparkleCount; i++) {
                let sparkleX = x;
                let sparkleY = y;

                if (scatter > 0) {
                    const scatterAngleRad = Math.random() * 2 * Math.PI;
                    const distance = Math.sqrt(Math.random()) * scatter;
                    sparkleX += Math.cos(scatterAngleRad) * distance;
                    sparkleY += Math.sin(scatterAngleRad) * distance;
                }

                const glitterAngle = Math.random() * TWO_PI;
                const glitterDistance = Math.random() * sparkleRadius;
                sparkleX += Math.cos(glitterAngle) * glitterDistance;
                sparkleY += Math.sin(glitterAngle) * glitterDistance;

                const boundsSize = sparkleSize;
                this.updateChangedTiles({
                    x1: Math.floor(sparkleX - boundsSize),
                    y1: Math.floor(sparkleY - boundsSize),
                    x2: Math.ceil(sparkleX + boundsSize),
                    y2: Math.ceil(sparkleY + boundsSize),
                });

                if (this.settingAlphaId === ALPHA_CIRCLE) {
                    this.context.beginPath();
                    this.context.arc(sparkleX, sparkleY, sparkleSize, 0, TWO_PI);
                    this.context.closePath();
                    this.context.fill();
                    this.hasDrawnDot = true;
                } else if (this.settingAlphaId === ALPHA_SQUARE) {
                    if (angle !== undefined) {
                        this.context.save();
                        this.context.translate(sparkleX, sparkleY);
                        this.context.rotate((angle / 180) * Math.PI);
                        this.context.fillRect(-sparkleSize, -sparkleSize, sparkleSize * 2, sparkleSize * 2);
                        this.context.restore();
                        this.hasDrawnDot = true;
                    }
                } else {
                    this.context.save();
                    this.context.translate(sparkleX, sparkleY);
                    let targetMipmap = this.alphaCanvas128;
                    if (sparkleSize <= 32 && sparkleSize > 16) {
                        targetMipmap = this.alphaCanvas64;
                    } else if (sparkleSize <= 16) {
                        targetMipmap = this.alphaCanvas32;
                    }
                    this.context.scale(sparkleSize, sparkleSize);
                    if (this.settingAlphaId === ALPHA_CHALK) {
                        this.context.rotate(((sparkleX + sparkleY) * 53123) % TWO_PI);
                    }
                    this.context.drawImage(targetMipmap, -1, -1, 2, 2);
                    this.context.restore();
                    this.hasDrawnDot = true;
                }
            }
        }
    }

    // continueLine
    private continueLine(x: number | null, y: number | null, size: number, pressure: number): void {
        if (this.bezierLine === null) {
            this.bezierLine = new BB.BezierLine();
            this.bezierLine.add(this.lastInput.x, this.lastInput.y, 0, () => {});
        }

        const drawArr: [number, number, number, number, number, number | undefined][] = []; //draw instructions. will be all drawn at once

        const dotCallback = (val: {
            x: number;
            y: number;
            t: number;
            angle?: number;
            dAngle: number;
        }): void => {
            const localPressure = BB.mix(this.lastInput2.pressure, pressure, val.t);
            const localOpacity = this.calcOpacity(localPressure);
            const localSize = Math.max(
                0.1,
                this.settingSize * (this.settingHasSizePressure ? localPressure : 1),
            );
            const localScatter = this.calcScatter(localPressure);
            drawArr.push([val.x, val.y, localSize, localOpacity, localScatter, val.angle]);
        };

        const localSpacing = size * this.settingSpacing;
        if (x === null || y === null) {
            this.bezierLine.addFinal(localSpacing, dotCallback);
        } else {
            this.bezierLine.add(x, y, localSpacing, dotCallback);
        }

        // execute draw instructions
        this.context.save();
        let before: (typeof drawArr)[number] | undefined = undefined;
        for (let i = 0; i < drawArr.length; i++) {
            const item = drawArr[i];
            this.drawDot(item[0], item[1], item[2], item[3], item[4], item[5], before);
            before = item;
        }
        this.context.restore();
    }

    // ----------------------------------- private -----------------------------------
    private async initializeParticles(): Promise<void> {
        if (this.particleContainer) return;

        try {
            // Initialize tsparticles engine
            this.particleContainer = await tsParticles.load({
                id: "glitter-brush",
                options: {
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 60,
                    particles: {
                        number: {
                            value: 0, // We'll add particles dynamically
                        },
                        color: {
                            value: `rgb(${this.settingColor.r}, ${this.settingColor.g}, ${this.settingColor.b})`,
                        },
                        shape: {
                            type: "star",
                        },
                        opacity: {
                            value: 1,
                        },
                        size: {
                            value: 2,
                        },
                        move: {
                            enable: false, // Static particles for brush
                        },
                    },
                    detectRetina: true,
                },
            });

            // Load star shape
            await loadStarShape(tsParticles);
        } catch (error) {
            console.warn("Failed to initialize tsparticles for glitter brush:", error);
            this.particleContainer = undefined;
        }
    }

    private renderParticlesToCanvas(particles: any[]): void {
        if (!this.particleContainer) return;

        // For now, implement a simple star drawing using canvas
        // This is a fallback since tsparticles is designed for animated systems
        this.context.save();
        this.context.globalCompositeOperation = this.settingLockLayerAlpha ? 'source-atop' : 'source-over';

        particles.forEach(particle => {
            this.context.save();
            this.context.globalAlpha = particle.opacity;
            this.context.fillStyle = `rgb(${particle.color.r}, ${particle.color.g}, ${particle.color.b})`;

            // Draw a simple star shape
            this.drawStar(particle.position.x, particle.position.y, particle.size);

            this.context.restore();
        });

        this.context.restore();
    }

    private drawStar(cx: number, cy: number, size: number): void {
        const spikes = 5;
        const outerRadius = size;
        const innerRadius = size * 0.5;

        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        this.context.beginPath();
        this.context.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            this.context.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            this.context.lineTo(x, y);
            rot += step;
        }

        this.context.lineTo(cx, cy - outerRadius);
        this.context.closePath();
        this.context.fill();
    }

    // ----------------------------------- public -----------------------------------
    constructor() {
        this.initializeParticles();
    }

    // ---- interface ----

    startLine(x: number, y: number, p: number): void {
        this.selection = this.klHistory.getComposed().selection.value;
        this.selectionPath = this.selection ? getSelectionPath2d(this.selection) : undefined;
        this.selectionBounds = this.selection
            ? integerBounds(getMultiPolyBounds(this.selection))
            : undefined;

        this.changedTiles = [];
        p = BB.clamp(p, 0, 1);
        const localOpacity = this.calcOpacity(p);
        const localSize = this.settingHasSizePressure
            ? Math.max(0.1, p * this.settingSize)
            : Math.max(0.1, this.settingSize);
        const localScatter = this.calcScatter(p);

        this.hasDrawnDot = false;

        this.inputIsDrawing = true;
        this.context.save();
        this.selectionPath && this.context.clip(this.selectionPath);
        this.drawDot(x, y, localSize, localOpacity, localScatter);
        this.context.restore();

        this.lineToolLastDot = localSize * this.settingSpacing;
        this.lastInput.x = x;
        this.lastInput.y = y;
        this.lastInput.pressure = p;
        this.lastInput2.pressure = p;

        this.inputArr = [
            {
                x,
                y,
                pressure: p,
            },
        ];
    }

    goLine(x: number, y: number, p: number): void {
        if (!this.inputIsDrawing) {
            return;
        }

        const pressure = BB.clamp(p, 0, 1);
        const localSize = this.settingHasSizePressure
            ? Math.max(0.1, this.lastInput.pressure * this.settingSize)
            : Math.max(0.1, this.settingSize);

        this.context.save();
        this.selectionPath && this.context.clip(this.selectionPath);
        this.continueLine(x, y, localSize, this.lastInput.pressure);

        this.context.restore();

        this.lastInput.x = x;
        this.lastInput.y = y;
        this.lastInput2.pressure = this.lastInput.pressure;
        this.lastInput.pressure = pressure;

        this.inputArr.push({
            x,
            y,
            pressure: p,
        });
    }

    endLine(): void {
        const localSize = this.settingHasSizePressure
            ? Math.max(0.1, this.lastInput.pressure * this.settingSize)
            : Math.max(0.1, this.settingSize);
        this.context.save();
        this.selectionPath && this.context.clip(this.selectionPath);
        this.continueLine(null, null, localSize, this.lastInput.pressure);
        this.context.restore();

        this.inputIsDrawing = false;

        if (this.settingAlphaId === ALPHA_SQUARE && !this.hasDrawnDot) {
            // find max pressure input, use that one
            let maxInput = this.inputArr[0];
            this.inputArr.forEach((item) => {
                if (item.pressure > maxInput.pressure) {
                    maxInput = item;
                }
            });

            this.context.save();
            this.selectionPath && this.context.clip(this.selectionPath);
            const p = BB.clamp(maxInput.pressure, 0, 1);
            const localOpacity = this.calcOpacity(p);
            const localScatter = this.calcScatter(p);
            this.drawDot(maxInput.x, maxInput.y, localSize, localOpacity, localScatter, 0);
            this.context.restore();
        }

        this.bezierLine = null;

        if (this.changedTiles.some((item) => item)) {
            this.klHistory.push(
                getPushableLayerChange(
                    this.klHistory.getComposed(),
                    canvasAndChangedTilesToLayerTiles(this.context.canvas, this.changedTiles),
                ),
            );
        }

        this.hasDrawnDot = false;
        this.inputArr = [];
    }

    drawLineSegment(x1: number, y1: number, x2: number, y2: number): void {
        this.selection = this.klHistory.getComposed().selection.value;
        this.selectionPath = this.selection ? getSelectionPath2d(this.selection) : undefined;
        this.selectionBounds = this.selection
            ? integerBounds(getMultiPolyBounds(this.selection))
            : undefined;
        this.changedTiles = [];
        this.lastInput.x = x2;
        this.lastInput.y = y2;
        this.lastInput.pressure = 1;

        if (this.inputIsDrawing || x1 === undefined) {
            return;
        }

        const angle = BB.pointsToAngleDeg({ x: x1, y: y1 }, { x: x2, y: y2 });
        const mouseDist = Math.sqrt(Math.pow(x2 - x1, 2.0) + Math.pow(y2 - y1, 2.0));
        const eX = (x2 - x1) / mouseDist;
        const eY = (y2 - y1) / mouseDist;
        let loopDist;
        const bdist = this.settingSize * this.settingSpacing;
        this.lineToolLastDot = this.settingSize * this.settingSpacing;
        this.context.save();
        this.selectionPath && this.context.clip(this.selectionPath);
        const localScatter = this.calcScatter(1);
        for (loopDist = this.lineToolLastDot; loopDist <= mouseDist; loopDist += bdist) {
            this.drawDot(
                x1 + eX * loopDist,
                y1 + eY * loopDist,
                this.settingSize,
                this.settingOpacity,
                localScatter,
                angle,
            );
        }
        this.context.restore();

        if (this.changedTiles.some((item) => item)) {
            this.klHistory.push(
                getPushableLayerChange(
                    this.klHistory.getComposed(),
                    canvasAndChangedTilesToLayerTiles(this.context.canvas, this.changedTiles),
                ),
            );
        }
    }

    //IS
    isDrawing(): boolean {
        return this.inputIsDrawing;
    }

    //SET
    setAlpha(a: number): void {
        if (this.settingAlphaId === a) {
            return;
        }
        this.settingAlphaId = a;
        this.updateAlphaCanvas();
    }

    setColor(c: TRgb): void {
        if (this.settingColor === c) {
            return;
        }
        this.settingColor = { r: c.r, g: c.g, b: c.b };
        this.settingColorStr =
            'rgb(' +
            this.settingColor.r +
            ',' +
            this.settingColor.g +
            ',' +
            this.settingColor.b +
            ')';
        this.updateAlphaCanvas();
    }

    setContext(c: CanvasRenderingContext2D): void {
        this.context = c;
    }

    setHistory(klHistory: KlHistory): void {
        this.klHistory = klHistory;
    }

    setSize(s: number): void {
        this.settingSize = s;
    }

    setOpacity(o: number): void {
        this.settingOpacity = o;
    }

    setScatter(o: number): void {
        this.settingScatter = o;
    }

    setSpacing(s: number): void {
        this.settingSpacing = s;
    }

    sizePressure(b: boolean): void {
        this.settingHasSizePressure = b;
    }

    opacityPressure(b: boolean): void {
        this.settingHasOpacityPressure = b;
    }

    scatterPressure(b: boolean): void {
        this.settingHasScatterPressure = b;
    }

    setLockAlpha(b: boolean): void {
        this.settingLockLayerAlpha = b;
    }

    setSparkleCount(count: number): void {
        this.settingSparkleCount = Math.max(1, Math.min(20, count)); // limit between 1 and 20
    }

    //GET
    getSpacing(): number {
        return this.settingSpacing;
    }

    getSize(): number {
        return this.settingSize;
    }

    getOpacity(): number {
        return this.settingOpacity;
    }

    getScatter(): number {
        return this.settingScatter;
    }

    getLockAlpha(): boolean {
        return this.settingLockLayerAlpha;
    }

    getSparkleCount(): number {
        return this.settingSparkleCount;
    }
}
