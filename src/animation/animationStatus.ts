import { IAnimationStatus, IKeyframe } from "./types";

const baseKeyframe: IKeyframe = {
    range: [0, 100],
    originTranslate: [0, 0],
    translate: [0, 0],
    originScale: [1, 1],
    scale: [1, 1],
    originOpacity: 1,
    opacity: 1,
    originRotate: 0,
    rotate: 0,
    originSkew: [0, 0],
    skew: [0, 0],
    change: true
};

export const animationStatus: IAnimationStatus = {
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
    ],
    shakeX: [
        {
            ...baseKeyframe,
            range: [0, 10],
            originTranslate: [0, 0],
            translate: [-10, 0]
        },
        {
            ...baseKeyframe,
            range: [10, 20],
            originTranslate: [-10, 0],
            translate: [10, 0]
        },
        {
            ...baseKeyframe,
            range: [20, 30],
            originTranslate: [10, 0],
            translate: [-10, 0]
        },
        {
            ...baseKeyframe,
            range: [30, 40],
            originTranslate: [-10, 0],
            translate: [10, 0]
        },
        {
            ...baseKeyframe,
            range: [40, 50],
            originTranslate: [10, 0],
            translate: [-10, 0]
        },
        {
            ...baseKeyframe,
            range: [50, 60],
            originTranslate: [-10, 0],
            translate: [10, 0]
        },
        {
            ...baseKeyframe,
            range: [60, 70],
            originTranslate: [10, 0],
            translate: [-10, 0]
        },
        {
            ...baseKeyframe,
            range: [70, 80],
            originTranslate: [-10, 0],
            translate: [10, 0]
        },
        {
            ...baseKeyframe,
            range: [80, 90],
            originTranslate: [10, 0],
            translate: [-10, 0]
        },
        {
            ...baseKeyframe,
            range: [90, 100],
            originTranslate: [-10, 0],
            translate: [0, 0]
        }
    ],
    shakeY: [
        {
            ...baseKeyframe,
            range: [0, 10],
            originTranslate: [0, 0],
            translate: [0, -10]
        },
        {
            ...baseKeyframe,
            range: [10, 20],
            originTranslate: [0, -10],
            translate: [0, 10]
        },
        {
            ...baseKeyframe,
            range: [20, 30],
            originTranslate: [0, 10],
            translate: [0, -10]
        },
        {
            ...baseKeyframe,
            range: [30, 40],
            originTranslate: [0, -10],
            translate: [0, 10]
        },
        {
            ...baseKeyframe,
            range: [40, 50],
            originTranslate: [0, 10],
            translate: [0, -10]
        },
        {
            ...baseKeyframe,
            range: [50, 60],
            originTranslate: [0, -10],
            translate: [0, 10]
        },
        {
            ...baseKeyframe,
            range: [60, 70],
            originTranslate: [0, 10],
            translate: [0, -10]
        },
        {
            ...baseKeyframe,
            range: [70, 80],
            originTranslate: [0, -10],
            translate: [0, 10]
        },
        {
            ...baseKeyframe,
            range: [80, 90],
            originTranslate: [0, 10],
            translate: [0, -10]
        },
        {
            ...baseKeyframe,
            range: [90, 100],
            originTranslate: [0, -10],
            translate: [0, 0]
        }
    ],
    headShake: [
        {
            ...baseKeyframe,
            range: [0, 6.5],
            originTranslate: [0, 0],
            translate: [-6, 0]
        },
        {
            ...baseKeyframe,
            range: [6.5, 18.5],
            originTranslate: [-6, 0],
            translate: [5, 0]
        },
        {
            ...baseKeyframe,
            range: [18.5, 31.5],
            originTranslate: [5, 0],
            translate: [-3, 0]
        },
        {
            ...baseKeyframe,
            range: [31.5, 43.5],
            originTranslate: [-3, 0],
            translate: [2, 0]
        },
        {
            ...baseKeyframe,
            range: [43.5, 50],
            originTranslate: [2, 0],
            translate: [0, 0]
        },
        {
            ...baseKeyframe,
            range: [50, 100],
            change: false
        }
    ],
    swing: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originRotate: 0,
            rotate: 15
        },
        {
            ...baseKeyframe,
            range: [20, 40],
            originRotate: 15,
            rotate: -10
        },
        {
            ...baseKeyframe,
            range: [40, 60],
            originRotate: -10,
            rotate: 5
        },
        {
            ...baseKeyframe,
            range: [60, 80],
            originRotate: 5,
            rotate: -5
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originRotate: -5,
            rotate: 0
        }
    ],
    tada: [
        {
            ...baseKeyframe,
            range: [0, 10],
            originScale: [1, 1],
            scale: [0.9, 0.9],
            originRotate: 0,
            rotate: -3
        },
        {
            ...baseKeyframe,
            range: [10, 20],
            originScale: [0.9, 0.9],
            scale: [0.9, 0.9],
            originRotate: -3,
            rotate: -3
        },
        {
            ...baseKeyframe,
            range: [20, 30],
            originScale: [0.9, 0.9],
            scale: [1.1, 1.1],
            originRotate: -3,
            rotate: 3
        },
        {
            ...baseKeyframe,
            range: [30, 40],
            originScale: [1.1, 1.1],
            scale: [1.1, 1.1],
            originRotate: 3,
            rotate: -3
        },
        {
            ...baseKeyframe,
            range: [40, 50],
            originScale: [1.1, 1.1],
            scale: [1.1, 1.1],
            originRotate: -3,
            rotate: 3
        },
        {
            ...baseKeyframe,
            range: [50, 60],
            originScale: [1.1, 1.1],
            scale: [1.1, 1.1],
            originRotate: 3,
            rotate: -3
        },
        {
            ...baseKeyframe,
            range: [60, 70],
            originScale: [1.1, 1.1],
            scale: [1.1, 1.1],
            originRotate: -3,
            rotate: 3
        },
        {
            ...baseKeyframe,
            range: [70, 80],
            originScale: [1.1, 1.1],
            scale: [1.1, 1.1],
            originRotate: 3,
            rotate: -3
        },
        {
            ...baseKeyframe,
            range: [80, 90],
            originScale: [1.1, 1.1],
            scale: [1.1, 1.1],
            originRotate: -3,
            rotate: 3
        },
        {
            ...baseKeyframe,
            range: [90, 100],
            originScale: [1.1, 1.1],
            scale: [1, 1],
            originRotate: 3,
            rotate: 0
        }
    ],
    wobble: [
        {
            ...baseKeyframe,
            range: [0, 15],
            translatePercentage: true,
            originTranslate: [0, 0],
            translate: [-25, 0],
            originRotate: 0,
            rotate: -5
        },
        {
            ...baseKeyframe,
            range: [15, 30],
            translatePercentage: true,
            originTranslate: [-25, 0],
            translate: [20, 0],
            originRotate: -5,
            rotate: 3
        },
        {
            ...baseKeyframe,
            range: [30, 45],
            translatePercentage: true,
            originTranslate: [20, 0],
            translate: [-15, 0],
            originRotate: 3,
            rotate: -3
        },
        {
            ...baseKeyframe,
            range: [45, 60],
            translatePercentage: true,
            originTranslate: [-15, 0],
            translate: [10, 0],
            originRotate: -3,
            rotate: 2
        },
        {
            ...baseKeyframe,
            range: [60, 75],
            translatePercentage: true,
            originTranslate: [10, 0],
            translate: [-5, 0],
            originRotate: 2,
            rotate: -1
        },
        {
            ...baseKeyframe,
            range: [75, 100],
            translatePercentage: true,
            originTranslate: [-5, 0],
            translate: [0, 0],
            originRotate: -1,
            rotate: 0
        }
    ],
    jello: [
        {
            ...baseKeyframe,
            range: [0, 11.1],
            change: false
        },
        {
            ...baseKeyframe,
            range: [11.1, 22.2],
            originSkew: [0, 0],
            skew: [-12.5, -12.5]
        },
        {
            ...baseKeyframe,
            range: [22.2, 33.3],
            originSkew: [-12.5, -12.5],
            skew: [6.25, 6.25]
        },
        {
            ...baseKeyframe,
            range: [33.3, 44.4],
            originSkew: [6.25, 6.25],
            skew: [-3.125, -3.125]
        },
        {
            ...baseKeyframe,
            range: [44.4, 55.5],
            originSkew: [-3.125, -3.125],
            skew: [1.5625, 1.5625]
        },
        {
            ...baseKeyframe,
            range: [55.5, 66.6],
            originSkew: [1.5625, 1.5625],
            skew: [-0.78125, -0.78125]
        },
        {
            ...baseKeyframe,
            range: [66.6, 77.7],
            originSkew: [-0.78125, -0.78125],
            skew: [0.390625, 0.390625]
        },
        {
            ...baseKeyframe,
            range: [77.7, 88.8],
            originSkew: [0.390625, 0.390625],
            skew: [-0.1953125, -0.1953125]
        },
        {
            ...baseKeyframe,
            range: [88.8, 100],
            originSkew: [-0.1953125, -0.1953125],
            skew: [0, 0]
        }
    ],
    heartBeat: [
        {
            ...baseKeyframe,
            range: [0, 14],
            originScale: [1, 1],
            scale: [1.3, 1.3]
        },
        {
            ...baseKeyframe,
            range: [14, 28],
            originScale: [1.3, 1.3],
            scale: [1, 1]
        },
        {
            ...baseKeyframe,
            range: [28, 42],
            originScale: [1, 1],
            scale: [1.3, 1.3]
        },
        {
            ...baseKeyframe,
            range: [42, 70],
            originScale: [1.3, 1.3],
            scale: [1, 1]
        },
        {
            ...baseKeyframe,
            range: [70, 100],
            change: false
        }
    ],
    backInDown: [
        {
            ...baseKeyframe,
            range: [0, 80],
            originTranslate: [0, -1200],
            translate: [0, 0],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originOpacity: 0.7,
            opacity: 1,
            originScale: [0.7, 0.7],
            scale: [1, 1]
        }
    ],
    backInLeft: [
        {
            ...baseKeyframe,
            range: [0, 80],
            originTranslate: [-2000, 0],
            translate: [0, 0],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originOpacity: 0.7,
            opacity: 1,
            originScale: [0.7, 0.7],
            scale: [1, 1]
        }
    ],
    backInRight: [
        {
            ...baseKeyframe,
            range: [0, 80],
            originTranslate: [2000, 0],
            translate: [0, 0],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originOpacity: 0.7,
            opacity: 1,
            originScale: [0.7, 0.7],
            scale: [1, 1]
        }
    ],
    backInUp: [
        {
            ...baseKeyframe,
            range: [0, 80],
            originTranslate: [0, 1200],
            translate: [0, 0],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originOpacity: 0.7,
            opacity: 1,
            originScale: [0.7, 0.7],
            scale: [1, 1]
        }
    ],
    backOutDown: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originOpacity: 1,
            opacity: 0.7,
            originScale: [1, 1],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [20, 100],
            originTranslate: [0, 0],
            translate: [0, 1200],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        }
    ],
    backOutLeft: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originOpacity: 1,
            opacity: 0.7,
            originScale: [1, 1],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [20, 100],
            originTranslate: [0, 0],
            translate: [-2000, 0],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        }
    ],
    backOutRight: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originOpacity: 1,
            opacity: 0.7,
            originScale: [1, 1],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [20, 100],
            originTranslate: [0, 0],
            translate: [2000, 0],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        }
    ],
    backOutUp: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originOpacity: 1,
            opacity: 0.7,
            originScale: [1, 1],
            scale: [0.7, 0.7]
        },
        {
            ...baseKeyframe,
            range: [20, 100],
            originTranslate: [0, 0],
            translate: [0, -1200],
            originOpacity: 0.7,
            opacity: 0.7,
            originScale: [0.7, 0.7],
            scale: [0.7, 0.7]
        }
    ],
    bounceIn: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originScale: [0.3, 0.3],
            scale: [1.1, 1.1],
            originOpacity: 0,
            opacity: 0.25
        },
        {
            ...baseKeyframe,
            range: [20, 40],
            originScale: [1.1, 1.1],
            scale: [0.9, 0.9],
            originOpacity: 0.25,
            opacity: 0.5
        },
        {
            ...baseKeyframe,
            range: [40, 60],
            originScale: [0.9, 0.9],
            scale: [1.03, 1.03],
            originOpacity: 0.5,
            opacity: 0.75
        },
        {
            ...baseKeyframe,
            range: [60, 80],
            originScale: [1.03, 1.03],
            scale: [0.97, 0.97],
            originOpacity: 0.75,
            opacity: 1
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originScale: [0.97, 0.97],
            scale: [1, 1]
        }
    ],
    bounceInDown: [
        {
            ...baseKeyframe,
            range: [0, 40],
            originTranslate: [0, -1200],
            translate: [0, 25],
            originScale: [1, 3],
            scale: [1, 0.9],
            originOpacity: 0,
            opacity: 1
        },
        {
            ...baseKeyframe,
            range: [40, 60],
            originTranslate: [0, 25],
            translate: [0, -10],
            originScale: [1, 0.9],
            scale: [1, 0.95]
        },
        {
            ...baseKeyframe,
            range: [60, 80],
            originTranslate: [0, -10],
            translate: [0, 5],
            originScale: [1, 0.95],
            scale: [1, 0.985]
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originTranslate: [0, 5],
            translate: [0, 0],
            originScale: [1, 0.985],
            scale: [1, 1]
        }
    ],
    bounceInLeft: [
        {
            ...baseKeyframe,
            range: [0, 70],
            originTranslate: [-2000, 0],
            translate: [25, 0],
            originScale: [3, 1],
            scale: [1, 1],
            originOpacity: 0,
            opacity: 1
        },
        {
            ...baseKeyframe,
            range: [70, 80],
            originTranslate: [25, 0],
            translate: [-10, 0],
            originScale: [1, 1],
            scale: [0.98, 1]
        },
        {
            ...baseKeyframe,
            range: [80, 90],
            originTranslate: [-10, 0],
            translate: [5, 0],
            originScale: [0.98, 1],
            scale: [0.995, 1]
        },
        {
            ...baseKeyframe,
            range: [90, 100],
            originTranslate: [5, 0],
            translate: [0, 0],
            originScale: [0.995, 1],
            scale: [1, 1]
        }
    ],
    bounceInRight: [
        {
            ...baseKeyframe,
            range: [0, 70],
            originTranslate: [2000, 0],
            translate: [-25, 0],
            originScale: [3, 1],
            scale: [1, 1],
            originOpacity: 0,
            opacity: 1
        },
        {
            ...baseKeyframe,
            range: [70, 80],
            originTranslate: [-25, 0],
            translate: [10, 0],
            originScale: [1, 1],
            scale: [0.98, 1]
        },
        {
            ...baseKeyframe,
            range: [80, 90],
            originTranslate: [10, 0],
            translate: [-5, 0],
            originScale: [0.98, 1],
            scale: [0.995, 1]
        },
        {
            ...baseKeyframe,
            range: [90, 100],
            originTranslate: [-5, 0],
            translate: [0, 0],
            originScale: [0.995, 1],
            scale: [1, 1]
        }
    ],
    bounceInUp: [
        {
            ...baseKeyframe,
            range: [0, 40],
            originTranslate: [0, 1200],
            translate: [0, -25],
            originScale: [1, 3],
            scale: [1, 0.9],
            originOpacity: 0,
            opacity: 1
        },
        {
            ...baseKeyframe,
            range: [40, 60],
            originTranslate: [0, -25],
            translate: [0, 10],
            originScale: [1, 0.9],
            scale: [1, 0.95]
        },
        {
            ...baseKeyframe,
            range: [60, 80],
            originTranslate: [0, 10],
            translate: [0, -5],
            originScale: [1, 0.95],
            scale: [1, 0.985]
        },
        {
            ...baseKeyframe,
            range: [80, 100],
            originTranslate: [0, -5],
            translate: [0, 0],
            originScale: [1, 0.985],
            scale: [1, 1]
        }
    ],
    bounceOut: [
        {
            ...baseKeyframe,
            range: [0, 20],
            originScale: [1, 1],
            scale: [0.9, 0.9]
        },
        {
            ...baseKeyframe,
            range: [20, 50],
            originScale: [0.9, 0.9],
            scale: [1.1, 1.1]
        },
        {
            ...baseKeyframe,
            range: [50, 55],
            scale: [1.1, 1.1],
            change: false
        },
        {
            ...baseKeyframe,
            range: [55, 100],
            originScale: [1.1, 1.1],
            scale: [0.3, 0.3],
            originOpacity: 1,
            opacity: 0
        }
    ]
};

export const getAnimationStatus = (type: string, process: number, width: number) => {
    const keyframes = animationStatus[type];

    const keyframeIndex = keyframes.findIndex((keyframe) => {
        return process >= keyframe.range[0] && process <= keyframe.range[1];
    });

    const keyframe = keyframes[keyframeIndex];
    if (!keyframe.change) {
        return {
            translate: keyframe.translate,
            scale: keyframe.scale,
            opacity: keyframe.opacity,
            rotate: keyframe.rotate,
            skew: keyframe.skew
        };
    }
    const range = keyframe.range[1] - keyframe.range[0];
    const processInKeyframe = process - keyframe.range[0];
    const processPercent = processInKeyframe / range;
    const translate: [number, number] = [
        ((keyframe.translate[0] - keyframe.originTranslate![0]) * processPercent + keyframe.originTranslate![0]) * (keyframe.translatePercentage ? 0.01 * width : 1),
        ((keyframe.translate[1] - keyframe.originTranslate![1]) * processPercent + keyframe.originTranslate![1]) * (keyframe.translatePercentage ? 0.01 * width : 1)
    ];
    const scale: [number, number] = [
        (keyframe.scale[0] - keyframe.originScale![0]) * processPercent + keyframe.originScale![0],
        (keyframe.scale[1] - keyframe.originScale![1]) * processPercent + keyframe.originScale![1]
    ];

    const opacity = (keyframe.opacity - keyframe.originOpacity!) * processPercent + keyframe.originOpacity!;

    const rotate = (keyframe.rotate - keyframe.originRotate!) * processPercent + keyframe.originRotate!;

    const skew: [number, number] = [
        (keyframe.skew[0] - keyframe.originSkew![0]) * processPercent + keyframe.originSkew![0],
        (keyframe.skew[1] - keyframe.originSkew![1]) * processPercent + keyframe.originSkew![1]
    ];

    return {
        translate,
        scale,
        opacity,
        rotate,
        skew
    };
};
