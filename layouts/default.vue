<script setup lang="ts">
  import { forgroundScheme, backgroundScheme } from '~/composables/useScheme';
</script>

<template>
  <div class="site-wrapper">
    <!-- <Bubble /> -->
    <Navbar :forground-scheme="forgroundScheme" :background-scheme="backgroundScheme" />
    <Socials :forground-scheme="forgroundScheme" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
    .site-wrapper {
      min-height: 100dvh;
    }
    main {
      margin: 0 256px;
    }
</style>
