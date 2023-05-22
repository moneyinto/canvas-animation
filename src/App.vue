<template>
    <div class="canvas-animation-body">
        <div class="canvas-container">
            <canvas ref="canvas"></canvas>
        </div>
        <div class="canvas-animation-list">
            <AnimationList />
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import AnimationList from "./layout/animationList.vue";

const canvas = ref<HTMLCanvasElement>();
nextTick(() => {
    if (canvas.value) {
        const width = canvas.value.clientWidth;
        const height = canvas.value.clientHeight;
        canvas.value.style.width = `${width}px`;
        canvas.value.style.height = `${height}px`;

        const dpr = window.devicePixelRatio;
        canvas.value.width = width * dpr;
        canvas.value.height = height * dpr;
        const ctx = canvas.value.getContext("2d", {
            willReadFrequently: true
        })!;
        ctx.scale(dpr, dpr);

        // 字体加载完成后再绘制
        document.fonts.ready.then(() => {
            drawAnimationText(ctx);
        });
    }
});

const drawAnimationText = (ctx: CanvasRenderingContext2D) => {
    const width = canvas.value!.width;
    const height = canvas.value!.height;
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.font = "normal bold 64px 'Work Sans'";
    ctx.fillStyle = "#351c75";
    const text = "Animate.css";
    const metrics = ctx.measureText(text);
    const actualWidth = metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft;
    const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    const x = width / 2 - actualWidth / 2;
    const y = height / 2 - actualHeight / 2;
    ctx.fillText(text, x, y);
    ctx.restore();
};
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
</style>
