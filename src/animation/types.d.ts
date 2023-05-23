export interface IAnimationOptions {
    type: string;
    duration: number;
}

export interface IKeyframe {
    range: [number, number];
    originTranslate?: [number, number];
    translate: [number, number];
    originScale?: [number, number];
    scale: [number, number];
    originOpacity?: number;
    opacity: number;
    originRotate?: number;
    rotate: number;
    change?: boolean;
}

export interface IAnimationStatus {
    [key: string]: IKeyframe[];
}
