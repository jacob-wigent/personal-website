<script setup lang="ts">
  import { forgroundScheme, backgroundScheme } from '~/composables/useScheme';
  import { gsap } from 'gsap';
  import { ref } from 'vue';

  const bubbleEnabled = ref(true);

  onMounted(() => {
    const magneticEls = document.querySelectorAll('.magnetic') as NodeListOf<HTMLElement>;
    const bubbleShrinkEls = document.querySelectorAll('.bubble-shrink') as NodeListOf<HTMLElement>;
    const bubbleExpandEls = document.querySelectorAll('.bubble-expand') as NodeListOf<HTMLElement>;
    const threshold = 100; // pixels

    const getBubble = () => document.getElementById('bubble');

    bubbleExpandEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if(!bubbleEnabled.value) { return; }
        getBubble()?.classList.add('expand');
      });
      el.addEventListener('mouseleave', () => {
        if(!bubbleEnabled.value) { return; }
        getBubble()?.classList.remove('expand');
      });
    });

    bubbleShrinkEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if(!bubbleEnabled.value) { return; }
        getBubble()?.classList.add('shrink');
      });
      el.addEventListener('mouseleave', () => {
        if(!bubbleEnabled.value) { return; }
        getBubble()?.classList.remove('shrink');
      });
    });

    window.addEventListener('mousemove', (e) => {
      if(!bubbleEnabled.value) { return; }
      let closestEl: HTMLElement | null = null;
      let closestDistance = Infinity;

      // Find the closest element within threshold
      magneticEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - elCenterX;
        const deltaY = e.clientY - elCenterY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < threshold && distance < closestDistance) {
          closestDistance = distance;
          closestEl = el;
        }
      });

      // Reset all elements except the closest one
      magneticEls.forEach((el) => {
        if (el !== closestEl) {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power3.out',
          });
        }
      });

      // Apply magnetic effect to closest element
      if (closestEl) {
        const rect = (closestEl as HTMLElement).getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - elCenterX;
        const deltaY = e.clientY - elCenterY;

        const strength = 0.15 * (1 - closestDistance / threshold);
        const moveX = deltaX * strength;
        const moveY = deltaY * strength;

        gsap.to(closestEl as HTMLElement, {
          x: moveX,
          y: moveY,
          duration: 0.3,
          ease: 'power3.out',
        });
      }
    });
  })
</script>

<template>
    <Bubble v-if="bubbleEnabled"/>
    <Navbar :forground-scheme="forgroundScheme" :background-scheme="backgroundScheme" />
    <Socials :forground-scheme="forgroundScheme" />
    <p id="bubble-toggle" class="bubble-expand" @click="bubbleEnabled = !bubbleEnabled">CURSOR <span>{{ bubbleEnabled ? 'ON' : 'OFF' }}</span></p>
    <main>
      <slot />
    </main>
    <Footer />
</template>

<style scoped lang="scss">
    .site-wrapper {
      min-height: 100dvh;
    }
    main {
      margin: 0 256px;
    }

    #bubble-toggle {
      position: fixed;
      bottom: 16px;
      right: 12px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-family: $font-mono;
      color: $gray;
      z-index: 4;

      &:hover {
        cursor: pointer;
      }

      span {
        color: $accent;
        font-weight: 900;
      }
    }
</style>
