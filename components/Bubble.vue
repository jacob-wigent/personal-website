<script setup lang="ts">
    import { gsap } from 'gsap';

    onMounted(() => {
        const bubble = document.getElementById('bubble');

        gsap.set(bubble, {xPercent: -50, yPercent: -50});

        window.addEventListener("mousemove", e => {
            gsap.to(bubble, {
                duration: 0.1,
                x: e.clientX,
                y: e.clientY,
                ease: "power1.inOut",
                overwrite: "auto",
            });
        });
    });
</script>

<template>
    <div id="bubble"></div>
</template>

<style scoped lang="scss">
    #bubble {
        width: 32px;
        height: 32px;
        background-color: $light-gray;
        border-radius: 50%;
        position: fixed;
        z-index: 100;
        mix-blend-mode: multiply;
        pointer-events: none;
        transition: width 0.2s ease-in-out, height 0.2s ease-in-out;

        &.expand {
            width: 64px;
            height: 64px;
            transition-duration: 0.2s;
        }

        &.shrink {
            transition-duration: 0.1s;
            width: 0px;
            height: 0px;
        }
    }
</style>