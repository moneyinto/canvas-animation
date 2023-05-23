export interface IAnimationOptions {
    type: string;
    duration: number;
}

export interface IKeyframe {
    range: [number, number];
    baseTranslate?: [number, number];
    translate: [number, number];
    baseScale?: [number, number];
    scale: [number, number];
    baseOpacity?: number;
    opacity: number;
    change?: boolean;
}

export interface IAnimationStatus {
    [key: string]: IKeyframe[];
}
