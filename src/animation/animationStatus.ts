import { IAnimationStatus, IKeyframe } from "./types";

const baseKeyframe: IKeyframe = {
    range: [0, 100],
    originTranslate: [0, 0],
    translate: [0, 0],
    originScale: [1, 1],
    scale: [1, 1],
    originOpacity: 1,
    opacity: 1,
    change: true
};

const animationStatus: IAnimationStatus = {
    bounce: [
        {
            ...baseKeyframe,
            range: [0, 20],
            change: false
        },
        {
            ...baseKeyframe,
            range: [20, 40],
            originTranslate: [0, 0],
            translate: [0, -30],
            originScale: [1, 1],
            scale: [1, 1.1]
        },
        {
            ...baseKeyframe,
            range: [40, 43],
            translate: [0, -30],
            scale: [1, 1.1],
            change: false
        },
        {
            ...baseKeyframe,
            range: [43, 53],
            originTranslate: [0, -30],
            translate: [0, 0],
            originScale: [1, 1.1],
            scale: [1, 1]
        },
        {
            ...baseKeyframe,
            range: [53, 70],
            originTranslate: [0, 0],
            translate: [0, -15],
            originScale: [1, 1],
            scale: [1, 1.05]
        },
        {
            ...baseKeyframe,
            range: [70, 80],
            originTranslate: [0, -15],
            translate: [0, 0],
            originScale: [1, 1.05],
            scale: [1, 0.95]
        },
        {
            ...baseKeyframe,
            range: [80, 90],
            originTranslate: [0, 0],
            translate: [0, -4],
            originScale: [1, 0.95],
            scale: [1, 1.02]
        },
        {
            ...baseKeyframe,
            range: [90, 100],
            change: false
        }
    ],
    flash: [
        {
            ...baseKeyframe,
            range: [0, 25],
            originOpacity: 1,
            opacity: 0
        },
        {
            ...baseKeyframe,
            range: [25, 50],
            originOpacity: 0,
            opacity: 1
        },
        {
            ...baseKeyframe,
            range: [50, 75],
            originOpacity: 1,
            opacity: 0
        },
        {
            ...baseKeyframe,
            range: [75, 100],
            originOpacity: 0,
            opacity: 1
        }
    ],
    pulse: [
        {
            ...baseKeyframe,
            range: [0, 50],
            originScale: [1, 1],
            scale: [1.05, 1.05]
        },
        {
            ...baseKeyframe,
            range: [50, 100],
            originScale: [1.05, 1.05],
            scale: [1, 1]
        }
    ],
    rubberBand: [
        {
            ...baseKeyframe,
            range: [0, 30],
            originScale: [1, 1],
            scale: [1.25, 0.75]
        },
        {
            ...baseKeyframe,
            range: [30, 40],
            originScale: [1.25, 0.75],
            scale: [0.75, 1.25]
        },
        {
            ...baseKeyframe,
            range: [40, 50],
            originScale: [0.75, 1.25],
            scale: [1.15, 0.85]
        },
        {
            ...baseKeyframe,
            range: [50, 65],
            originScale: [1.15, 0.85],
            scale: [0.95, 1.05]
        },
        {
            ...baseKeyframe,
            range: [65, 75],
            originScale: [0.95, 1.05],
            scale: [1.05, 0.95]
        },
        {
            ...baseKeyframe,
            range: [75, 100],
            originScale: [1.05, 0.95],
            scale: [1, 1]
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
        (keyframe.translate[0] - keyframe.originTranslate![0]) * processPercent + keyframe.originTranslate![0],
        (keyframe.translate[1] - keyframe.originTranslate![1]) * processPercent + keyframe.originTranslate![1]
    ];
    const scale: [number, number] = [
        (keyframe.scale[0] - keyframe.originScale![0]) * processPercent + keyframe.originScale![0],
        (keyframe.scale[1] - keyframe.originScale![1]) * processPercent + keyframe.originScale![1]
    ];

    const opacity = (keyframe.opacity - keyframe.originOpacity!) * processPercent + keyframe.originOpacity!;

    return {
        translate,
        scale,
        opacity
    };
};
