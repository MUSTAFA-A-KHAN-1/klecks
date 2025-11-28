import { BB } from '../../../../bb/bb';
import { TPointerEvent } from '../../../../bb/input/event.types';
import { createMatrixFromTransform } from '../../../../bb/transform/create-matrix-from-transform';
import { applyToPoint, inverse } from 'transformation-matrix';
import {
    CoalescedExploder,
    TCoalescedPointerEvent,
} from '../../../../bb/input/event-chain/coalesced-exploder';
import { EventChain } from '../../../../bb/input/event-chain/event-chain';
import { TChainElement } from '../../../../bb/input/event-chain/event-chain.types';
import { TViewportTransform } from '../../project-viewport/project-viewport';
import { TEaselInterface, TEaselTool } from '../easel.types';
import { TVector2D } from '../../../../bb/bb-types';
import { BrushCursorPixelSquare } from './brush-cursor-pixel-square';
import { BrushCursorRound } from './brush-cursor-round';
// Ensure this import path is correct based on your project structure
import { ShapeRecognition } from '../../../../bb/math/shape-recognition';

export type TEaselBrushEvent = {
    x: number;
    y: number;
    isCoalesced: boolean;
    pressure: number;
};

// Definition for the shape data passed back to the app
export type TRecognizedShape = { 
    type: 'circle' | 'rectangle' | 'line'; 
    x1: number; 
    y1: number; 
    x2: number; 
    y2: number; 
};

export type TEaselBrushParams = {
    radius: number;

    onLineStart: (e: TEaselBrushEvent) => void;
    onLineGo: (e: TEaselBrushEvent) => void;
    onLineEnd: () => void;
    onLine: (p1: TVector2D, p2: TVector2D) => void;
    
    // New callback to notify the app when a shape is detected
    onShapeDetected?: (shape: TRecognizedShape) => void; 
};

type TLineToolDirection = 'x' | 'y';

export class EaselBrush implements TEaselTool {
    private readonly svgEl: SVGElement;
    private radius: number;
    private readonly onLineStart: TEaselBrushParams['onLineStart'];
    private readonly onLineGo: TEaselBrushParams['onLineGo'];
    private readonly onLineEnd: TEaselBrushParams['onLineEnd'];
    private readonly onLine: TEaselBrushParams['onLine'];
    private readonly onShapeDetected?: TEaselBrushParams['onShapeDetected']; // New
    
    private easel: TEaselInterface = {} as TEaselInterface;
    private oldScale: number = 1;
    private isDragging: boolean = false;
    private eventChain: EventChain; 
    
    // Shape Recognition Instance
    private shapeRecognition: ShapeRecognition; 

    private readonly brushCursorRound: BrushCursorRound;
    private readonly brushCursorPixelSquare: BrushCursorPixelSquare;
    private currentCursor: BrushCursorRound | BrushCursorPixelSquare;
    private lastPos: TVector2D = { x: 0, y: 0 };
    private lastLineEnd: TVector2D | undefined; 
    private lineToolDirection: TLineToolDirection | undefined;
    private firstShiftPos: TVector2D | undefined;
    private hideCursorTimeout: ReturnType<typeof setTimeout> | undefined;
    private isOver: boolean = false;

    private onExplodedPointer(e: TCoalescedPointerEvent): void {
        const vTransform = this.easel.getTransform();
        const m = createMatrixFromTransform(vTransform);
        // canvas coordinates
        const p = applyToPoint(inverse(m), { x: e.relX, y: e.relY });
        const x = p.x;
        const y = p.y;

        if (vTransform.scale !== this.oldScale) {
            this.oldScale = vTransform.scale;
        }

        if (!e.isCoalesced) {
            this.lastPos.x = e.relX;
            this.lastPos.y = e.relY;
            this.currentCursor.update(
                this.easel.getTransform(),
                { x: e.relX, y: e.relY },
                this.radius,
            );
            if (!this.isOver && e.type !== 'pointerup') {
                this._onPointerEnter();
            }
        }

        const pressure = e.pressure ?? 1;
        const isCoalesced = e.isCoalesced;
        const shiftIsPressed = this.easel.keyListener.isPressed('shift');

        // --- Shape Recognition Integration ---
       if (!shiftIsPressed && this.onShapeDetected) {
            // Properties shared by Down/Move events
            const drawingProps = {
                pressure,
                isCoalesced,
                shiftIsPressed,
                scale: vTransform.scale,
            };

            if (e.type === 'pointerdown' && e.button === 'left') {
                this.shapeRecognition.chainIn({
                    type: 'down',
                    x,
                    y,
                    ...drawingProps,
                });
            } else if (e.type === 'pointermove' && e.button === 'left') {
                this.shapeRecognition.chainIn({
                    type: 'move',
                    x,
                    y,
                    ...drawingProps,
                });
            } else if (e.type === 'pointerup') {
                // Fixed: explicitly providing the required properties for 'up'
                this.shapeRecognition.chainIn({
                    type: 'up',
                    isCoalesced,
                    shiftIsPressed,
                    scale: vTransform.scale,
                });
            }
        }
        // -------------------------------------

        if (shiftIsPressed && !this.firstShiftPos) {
            this.firstShiftPos = { x: e.relX, y: e.relY };
        }
        if (!shiftIsPressed) {
            this.firstShiftPos = undefined;
            this.lineToolDirection = undefined;
        }

        if (e.type === 'pointerdown' && e.button === 'left') {
            if (shiftIsPressed) {
                if (this.lastLineEnd) {
                    this.onLine(this.lastLineEnd, { x, y });
                }
                return;
            }

            this.onLineStart({ x, y, pressure, isCoalesced });
            this.isDragging = true;
        }
        if (e.type === 'pointermove' && e.button === 'left') {
            if (shiftIsPressed) {
                if (!this.lineToolDirection) {
                    const dX = Math.abs(e.relX - this.firstShiftPos!.x);
                    const dY = Math.abs(e.relY - this.firstShiftPos!.y);
                    if (dX > 5 || dY > 5) {
                        this.lineToolDirection = dX > dY ? 'x' : 'y';
                    }
                }
                if (this.lineToolDirection) {
                    const viewportP = {
                        x: this.lineToolDirection === 'x' ? e.relX : this.firstShiftPos!.x,
                        y: this.lineToolDirection === 'y' ? e.relY : this.firstShiftPos!.y,
                    };
                    const canvasP = applyToPoint(inverse(m), viewportP);
                    this.onLineGo({ ...canvasP, pressure, isCoalesced });
                }
            } else {
                this.onLineGo({ x, y, pressure, isCoalesced });
            }
        }
        if (e.type === 'pointerup' && e.button === undefined && this.isDragging) {
            this.onLineEnd();
            this.isDragging = false;
            if (e.pointerType === 'touch') {
                // due to delay of double-tap listener, pointerleave fires to early
                this.onPointerLeave();
            }
        }
    }

    private _onPointerEnter(): void {
        clearTimeout(this.hideCursorTimeout);
        this.svgEl.setAttribute('opacity', '1');
        this.isOver = true;
    }

    // ----------------------------------- public -----------------------------------
    constructor(p: TEaselBrushParams) {
        this.radius = p.radius;
        this.onLineStart = p.onLineStart;
        this.onLineGo = p.onLineGo;
        this.onLineEnd = p.onLineEnd;
        this.onLine = p.onLine;
        this.onShapeDetected = p.onShapeDetected; // Store the callback
        //print console log when shape recognition is initialized
        console.log('EaselBrush: Initializing Shape Recogniton');
        // Initialize Shape Recognition
        this.shapeRecognition = new ShapeRecognition({
            onShapeRecognized: (type) => {
                const shapeData = this.shapeRecognition.getRecognizedShape();
                console.log('Shape recognized:', type, shapeData);
                if (this.onShapeDetected && shapeData) {
                    this.onShapeDetected(shapeData);
                }
            }
        });

        this.svgEl = BB.createSvg({
            elementType: 'g',
        });
        this.brushCursorRound = new BrushCursorRound();
        this.brushCursorPixelSquare = new BrushCursorPixelSquare();
        this.currentCursor = this.brushCursorRound;
        this.svgEl.append(this.currentCursor.getElement());

        this.eventChain = new EventChain({
            chainArr: [new CoalescedExploder() as TChainElement],
        });
        this.eventChain.setChainOut((e) => {
            this.onExplodedPointer(e as TCoalescedPointerEvent);
        });
    }

    // ... (Rest of the class methods remain unchanged: getSvgElement, onPointer, etc.)
    
    getSvgElement(): SVGElement {
        return this.svgEl;
    }

    onPointer(e: TPointerEvent): void {
        this.eventChain.chainIn(e);
    }

    onPointerLeave(): void {
        clearTimeout(this.hideCursorTimeout);
        this.svgEl.setAttribute('opacity', '0');
        this.isOver = false;
    }

    setEaselInterface(easelInterface: TEaselInterface): void {
        this.easel = easelInterface;
    }

    onUpdateTransform(transform: TViewportTransform): void {
        this.currentCursor.update(transform, { x: this.lastPos.x, y: this.lastPos.y }, this.radius);
    }

    getIsLocked(): boolean {
        return this.isDragging;
    }

    setBrush(p: { radius?: number; type?: 'round' | 'pixel-square' }): void {
        if (p.radius !== undefined) {
            this.radius = p.radius;
            if (!this.isOver) {
                this.svgEl.setAttribute('opacity', '1');
                clearTimeout(this.hideCursorTimeout);
                this.hideCursorTimeout = setTimeout(() => {
                    this.svgEl.setAttribute('opacity', '0');
                }, 500);
            }
            const { width, height } = this.easel.getSize();
            this.currentCursor.update(
                this.easel.getTransform(),
                this.isOver ? this.lastPos : { x: width / 2, y: height / 2 },
                this.radius,
            );
        }
        if (p.type !== undefined) {
            const newBrushCursor =
                p.type === 'round' ? this.brushCursorRound : this.brushCursorPixelSquare;
            if (newBrushCursor !== this.currentCursor) {
                this.currentCursor.getElement().remove();
                this.currentCursor = newBrushCursor;
                this.getSvgElement().append(this.currentCursor.getElement());
            }
        }
    }

    setLastDrawEvent(p?: TVector2D): void {
        this.lastLineEnd = p ? { ...p } : undefined;
    }

    activate(cursorPos?: TVector2D): void {
        this.easel.setCursor('crosshair');
        this.isDragging = false;
        if (cursorPos) {
            this.lastPos.x = cursorPos.x;
            this.lastPos.y = cursorPos.y;
            this.currentCursor.update(
                this.easel.getTransform(),
                { x: cursorPos.x, y: cursorPos.y },
                this.radius,
            );
        } else {
            this.onPointerLeave();
        }
    }
}