import { TVector2D } from '../bb/bb-types';
import { ShapeRecognition } from '../bb/math/shape-recognition';

export type TConsoleApi = {
    readonly draw: (path: TVector2D[]) => void;
    readonly recognizeShape: (path: TVector2D[]) => 'circle' | 'rectangle' | 'line' | null;
    readonly help: () => void;
};

export function createConsoleApi(p: { onDraw: (path: TVector2D[]) => void }): TConsoleApi {
    const output = [
        'Draw via the console! Learn more: %cKL.help()',
        'background: #000; color: #0f0;',
    ];
    'info' in (console as any) ? console.info(...output) : console.log(...output);

    return Object.freeze({
        draw: (path: TVector2D[]): void => {
            p.onDraw(path);
        },
        recognizeShape: (path: TVector2D[]): 'circle' | 'rectangle' | 'line' | null => {
            console.log('Shape recognition triggered with', path.length, 'points');
            const recognizedShape = ShapeRecognition.recognizeShapeFromPoints(path);
            console.log(`Recognized shape: ${recognizedShape || 'unknown'}`);
            return recognizedShape;
        },
        help: (): void => {
            console.log(`KL.draw({x: number; y: number}[]) // draw a line
KL.recognizeShape({x: number; y: number}[]) // recognize shape from points
KL.help() // print help
`);
        },
    });
}
