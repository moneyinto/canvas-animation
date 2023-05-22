<template>
    <div class="animation-list">
        <div
            class="animation-header"
            v-for="item in ANIMATION_LIST"
            :key="item.name"
        >
            <h2 class="animation-title">{{ item.name }}</h2>
            <div
                class="animation-item"
                v-for="child in item.children"
                :key="child.name"
                @click="selectAnimation(child.name, child.duration)"
            >
                {{ child.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ANIMATION_LIST } from "@/config/animation";

const emit = defineEmits(["selectAnimation"]);

const selectAnimation = (animation: string, duration: number) => {
    emit("selectAnimation", animation, duration);
};
</script>

<style>
.animation-list {
    padding: 25px 15px;
    height: 100%;
    overflow-y: auto;
    user-select: none;
}

.animation-header {
    margin-bottom: 30px;
}

.animation-title {
    font-weight: 600;
    margin-bottom: 5px;
}

.animation-item {
    cursor: pointer;
    line-height: 1.4;
    font-size: 18px;
    padding-left: 5px;
}
</style>
