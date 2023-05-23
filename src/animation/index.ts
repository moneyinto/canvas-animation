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
    constructor(ctx: CanvasRenderingContext2D, draw: () => void, clearRect: () => void) {
        this._ctx = ctx;
        this._duration = 0;
        this._startTime = 0;
        this._animationTyep = "";
        this._draw = draw;
        this._clearRect = clearRect;
        this._progressing = false;
    }

    setOptions(options: IAnimationOptions) {
        this._animationTyep = options.type;
        this._duration = options.duration;
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
            return;
        }
        const animationStatus = getAnimationStatus(
            this._animationTyep,
            duration / this._duration * 100
        );
        this._clearRect();
        this._ctx.save();
        this._ctx.scale(...animationStatus.scale);
        this._ctx.translate(...animationStatus.translate);
        this._ctx.globalAlpha = animationStatus.opacity;
        this._ctx.rotate(animationStatus.rotate * Math.PI / 180);
        this._draw();
        this._ctx.restore();
        window.requestAnimationFrame(this._action.bind(this));
    }

    public stop() {
        this._progressing = false;
    }
}
