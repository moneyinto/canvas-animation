import { getAnimationStatus } from "./animationStatus";
import { IAnimationOptions } from "./types";

export default class CanvasAnimation {
    private _ctx: CanvasRenderingContext2D;
    private _duration: number;
    private _startTime: number;
    private _animationTyep: string;
    private _draw: () => void;
    private _clearRect: () => void;
    private _progressing: boolean;
    private _width: number;
    private _height: number;

    public onEnd: () => void = () => {};
    constructor(
        ctx: CanvasRenderingContext2D,
        draw: () => void,
        clearRect: () => void
    ) {
        this._ctx = ctx;
        this._duration = 0;
        this._startTime = 0;
        this._animationTyep = "";
        this._draw = draw;
        this._clearRect = clearRect;
        this._progressing = false;
        this._width = 100;
        this._height = 100;
    }

    setOptions(options: IAnimationOptions) {
        this._animationTyep = options.type;
        this._duration = options.duration;
        this._width = options.width || 100;
        this._height = options.height || 100;
    }

    public start() {
        this._progressing = true;
        this._startTime = Date.now();
        this._action();
    }

    // 3d 绕轴旋转！！！！！！！！！！！
    // 待研究
    private _action() {
        if (!this._progressing) return;
        const duration = Date.now() - this._startTime;
        if (duration > this._duration) {
            this._progressing = false;
            this.onEnd();
            return;
        }
        const animationStatus = getAnimationStatus(
            this._animationTyep,
            (duration / this._duration) * 100,
            this._width,
            this._height
        );
        this._clearRect();
        this._ctx.save();
        if (
            this._animationTyep === "rotateInDownLeft" ||
            this._animationTyep === "rotateInUpLeft" ||
            this._animationTyep === "rotateOutDownLeft" ||
            this._animationTyep === "rotateOutUpLeft" ||
            this._animationTyep === "hinge"
        ) {
            this._ctx.translate(-this._width / 2, this._height / 2);
        } else if (
            this._animationTyep === "rotateInDownRight" ||
            this._animationTyep === "rotateInUpRight" ||
            this._animationTyep === "rotateOutDownRight" ||
            this._animationTyep === "rotateOutUpRight"
        ) {
            this._ctx.translate(this._width / 2, this._height / 2);
        }
        this._ctx.scale(...animationStatus.scale);
        this._ctx.translate(...animationStatus.translate);
        this._ctx.globalAlpha = animationStatus.opacity;
        this._ctx.rotate((animationStatus.rotate * Math.PI) / 180);
        this._ctx.transform(
            1,
            (animationStatus.skew[0] * Math.PI) / 180,
            (animationStatus.skew[1] * Math.PI) / 180,
            1,
            0,
            0
        );
        this._draw();
        this._ctx.restore();
        window.requestAnimationFrame(this._action.bind(this));
    }

    public stop() {
        this._progressing = false;
    }
}
