<script setup lang="ts">
import { gsap } from 'gsap';

const fillCircle = useTemplateRef('fillCircle');

const handleMouseEnter = (event: MouseEvent) => {
    if (!fillCircle.value) return;
    
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    gsap.set(fillCircle.value, {
        left: x,
        top: y,
        scale: 0,
        opacity: 1
    });
    
    const maxDimension = Math.max(rect.width, rect.height);
    const scale = maxDimension * 2.5;
    
    gsap.to(fillCircle.value, {
        scale: scale,
        duration: 0.6,
        ease: "power2.out"
    });
};

const handleMouseLeave = () => {
    if (!fillCircle.value) return;
    
    gsap.set(fillCircle.value, { opacity: 0 });
};
</script>

<template>
    <a href="#" class="button magnetic bubble-shrink" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <span class="fill-circle" ref="fillCircle"></span>
        <span class="button-text">
            <slot>Click Me</slot>
        </span>
    </a>
</template>

<style scoped lang="scss">
.button {
    position: relative;
    z-index: 0;
    display: block;
    width: fit-content;
    padding: 12px 24px;
    border: solid 2px $gray;
    border-radius: 4px;
    text-decoration: none;
    color: $gray;
    transition: color 0.1s ease-in-out;
    overflow: hidden;

    &::after {
        display: none;
    }

    .fill-circle {
        position: absolute;
        width: 1px;
        height: 1px;
        background-color: $gray;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        opacity: 0;
        transform-origin: center;
    }

    .button-text {
        position: relative;
        z-index: 1;
        transition: color 0.1s ease-in-out;
    }

    &:hover {
        .button-text {
            color: $white;
        }
    }
}
</style>