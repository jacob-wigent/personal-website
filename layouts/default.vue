<script setup>
</script>

<template>
  <div class="site-wrapper">
    <Navbar />
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
</style>
