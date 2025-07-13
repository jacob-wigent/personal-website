<script setup lang="ts">
  import { currentScheme } from '~/composables/useScheme';
</script>

<template>
  <div class="site-wrapper">
    <Navbar :scheme="currentScheme" />
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
      padding-top: 96px;
      min-height: 200vh;
      margin: 0 256px;
    }
</style>
