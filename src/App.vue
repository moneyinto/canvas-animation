<template>
    <div class="canvas-animation-body">
        <div class="github-block">
            <GithubOutlined class="github-icon" @click="openGithub" />
        </div>
        <div ref="canvasContainer" class="canvas-container">
            <canvas ref="canvas"></canvas>
        </div>
        <div class="canvas-animation-list">
            <AnimationList @selectAnimation="selectAnimation" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import AnimationList from "./layout/animationList.vue";
import CanvasAnimation from "./animation";
import { animationStatus } from "./animation/animationStatus";
import { message } from "ant-design-vue";
import { GithubOutlined } from "@ant-design/icons-vue";

const canvasContainer = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const ctx = ref<CanvasRenderingContext2D>();
let animation: CanvasAnimation;
const text = "Animate.css";
let animationType = "";
let actualWidth = 0;
let actualHeight = 0;
let x = 0;
let y = 0;
nextTick(() => {
    if (canvas.value && canvasContainer.value) {
        // 字体加载完成后再绘制
        document.fonts.ready.then(() => {
            resizeCanvas();

            if (ctx.value) {
                const context = ctx.value;
                animation = new CanvasAnimation(
                    context,
                    () => {
                        drawAnimationText(context, text, x, y);
                    },
                    clearRect
                );

                animation.onEnd = () => {
                    animationType = "";
                    clearRect();
                    drawAnimationText(context, text, x, y);
                };
            }
        });
    }
});

const selectAnimation = (type: string, duration: number) => {
    if (!animationStatus[type]) {
        return message.error("该动画暂未实现");
    }
    animationType = type;
    animation.setOptions({
        type,
        duration,
        width: actualWidth,
        height: actualHeight
    });
    animation.start();
};

const resizeCanvas = () => {
    if (canvas.value && canvasContainer.value) {
        const width = canvasContainer.value.clientWidth;
        const height = canvasContainer.value.clientHeight;
        canvas.value.style.width = `${width}px`;
        canvas.value.style.height = `${height}px`;

        const dpr = window.devicePixelRatio;
        canvas.value.width = width * dpr;
        canvas.value.height = height * dpr;
        if (!ctx.value) {
            ctx.value = canvas.value.getContext("2d", {
                willReadFrequently: true
            })!;
        }
        ctx.value.scale(dpr, dpr);

        clearRect();

        ctx.value.font = "normal bold 64px 'Work Sans'";
        ctx.value.fillStyle = "#351c75";
        const metrics = ctx.value.measureText(text);
        actualWidth = metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft;
        actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        x = -actualWidth / 2;
        y = actualHeight / 2;
        ctx.value.translate(width / 2, height / 2);
        drawAnimationText(ctx.value, text, x, y);
    }
};

const clearRect = () => {
    if (canvas.value && ctx.value) {
        const width = canvas.value.clientWidth;
        const height = canvas.value.clientHeight;
        ctx.value.clearRect(
            -width / 2,
            -height / 2,
            canvas.value!.width,
            canvas.value!.height
        );
    }
};

const drawAnimationText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number
) => {
    ctx.save();
    if (
        animationType === "rotateInDownLeft" ||
        animationType === "rotateInUpLeft" ||
        animationType === "rotateOutDownLeft" ||
        animationType === "rotateOutUpLeft"
    ) {
        ctx.fillText(text, x + actualWidth / 2, y - actualHeight / 2);
    } else if (
        animationType === "rotateInDownRight" ||
        animationType === "rotateInUpRight" ||
        animationType === "rotateOutDownRight"
    ) {
        ctx.fillText(text, x - actualWidth / 2, y - actualHeight / 2);
    } else {
        ctx.fillText(text, x, y);
    }
    ctx.restore();
};

const openGithub = () => {
    window.open("https://github.com/moneyinto/canvas-animation");
};

onMounted(() => {
    window.addEventListener("resize", resizeCanvas);
});

onUnmounted(() => {
    window.removeEventListener("resize", resizeCanvas);
});
</script>

<style lang="scss">
.canvas-animation-body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fce5cd;
    display: flex;
}

.canvas-container {
    flex: 1;
    min-width: 0;

    canvas {
        width: 100%;
        height: 100%;
    }
}

.canvas-animation-list {
    width: 280px;
    background-color: #f7d7b5;
}

.github-block {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: #181717;
    top: -75px;
    left: -75px;
    transform: rotate(45deg);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px;
    .github-icon {
        font-size: 36px;
        transform: rotate(-45deg);
        color: white;
        cursor: pointer;
        transition: 0.3s ease-in-out all;
        margin-top: 5px;
        &:hover {
            transform: scale(1.2) rotate(-45deg);
        }
    }
}
</style>
