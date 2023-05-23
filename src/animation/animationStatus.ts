import { IAnimationStatus } from "./types";

const animationStatus: IAnimationStatus = {
    bounce: [
        {
            range: [0, 20],
            translate: [0, 0],
            scale: [1, 1],
            opacity: 1,
            change: false
        },
        {
            range: [20, 40],
            baseTranslate: [0, 0],
            translate: [0, -30],
            baseScale: [1, 1],
            scale: [1, 1.1],
            opacity: 1,
            change: true
        },
        {
            range: [40, 43],
            translate: [0, -30],
            scale: [1, 1.1],
            baseOpacity: 1,
            opacity: 1,
            change: false
        },
        {
            range: [43, 53],
            baseTranslate: [0, -30],
            translate: [0, 0],
            baseScale: [1, 1.1],
            scale: [1, 1],
            baseOpacity: 1,
            opacity: 1,
            change: true
        },
        {
            range: [53, 70],
            baseTranslate: [0, 0],
            translate: [0, -15],
            baseScale: [1, 1],
            scale: [1, 1.05],
            baseOpacity: 1,
            opacity: 1,
            change: true
        },
        {
            range: [70, 80],
            baseTranslate: [0, -15],
            translate: [0, 0],
            baseScale: [1, 1.05],
            scale: [1, 0.95],
            baseOpacity: 1,
            opacity: 1,
            change: true
        },
        {
            range: [80, 90],
            baseTranslate: [0, 0],
            translate: [0, -4],
            baseScale: [1, 0.95],
            scale: [1, 1.02],
            baseOpacity: 1,
            opacity: 1,
            change: true
        },
        {
            range: [90, 100],
            translate: [0, 0],
            scale: [1, 1],
            opacity: 1,
            change: false
        }
    ],
    flash: [
        {
            range: [0, 25],
            baseTranslate: [0, 0],
            translate: [0, 0],
            baseScale: [1, 1],
            scale: [1, 1],
            baseOpacity: 1,
            opacity: 0,
            change: true
        },
        {
            range: [25, 50],
            baseTranslate: [0, 0],
            translate: [0, 0],
            baseScale: [1, 1],
            scale: [1, 1],
            baseOpacity: 0,
            opacity: 1,
            change: true
        },
        {
            range: [50, 75],
            baseTranslate: [0, 0],
            translate: [0, 0],
            baseScale: [1, 1],
            scale: [1, 1],
            baseOpacity: 1,
            opacity: 0,
            change: true
        },
        {
            range: [75, 100],
            baseTranslate: [0, 0],
            translate: [0, 0],
            baseScale: [1, 1],
            scale: [1, 1],
            baseOpacity: 0,
            opacity: 1,
            change: true
        }
    ]
};

export const getAnimationStatus = (type: string, process: number) => {
    const keyframes = animationStatus[type];

    const keyframeIndex = keyframes.findIndex((keyframe) => {
        return process >= keyframe.range[0] && process <= keyframe.range[1];
    });

    const keyframe = keyframes[keyframeIndex];
    if (!keyframe.change) {
        return {
            translate: keyframe.translate,
            scale: keyframe.scale,
            opacity: keyframe.opacity
        };
    }
    const range = keyframe.range[1] - keyframe.range[0];
    const processInKeyframe = process - keyframe.range[0];
    const processPercent = processInKeyframe / range;
    const translate: [number, number] = [
        (keyframe.translate[0] - keyframe.baseTranslate![0]) * processPercent + keyframe.baseTranslate![0],
        (keyframe.translate[1] - keyframe.baseTranslate![1]) * processPercent + keyframe.baseTranslate![1]
    ];
    const scale: [number, number] = [
        (keyframe.scale[0] - keyframe.baseScale![0]) * processPercent + keyframe.baseScale![0],
        (keyframe.scale[1] - keyframe.baseScale![1]) * processPercent + keyframe.baseScale![1]
    ];

    const opacity = (keyframe.opacity - keyframe.baseOpacity!) * processPercent + keyframe.baseOpacity!;

    return {
        translate,
        scale,
        opacity
    };
};
