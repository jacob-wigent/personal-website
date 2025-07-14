<script setup lang="ts">
    import { gsap } from 'gsap';

    onMounted(() => {

        const bubble = document.getElementById('bubble');

        gsap.set(bubble, {xPercent: -50, yPercent: -50});

        window.addEventListener("mousemove", e => {
            gsap.to(bubble, {
                duration: 0.1,
                x: e.pageX,
                y: e.pageY,
                ease: "bounce.inOut",
                overwrite: "auto",
            });
        });

    })

</script>

<template>
    <div id="bubble"></div>
</template>

<style scoped lang="scss">
    #bubble {
        width: 32px;
        height: 32px;
        background-color: $accent;
        border-radius: 50%;
        position: absolute;
        z-index: 10;
    }
</style>