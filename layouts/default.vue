<script lang="ts" setup></script>

<template>
  <main class="main h-screen">
    <NuxtPage />
  </main>
</template>

<style scoped lang="scss">
.main {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/bg_planets.jpg');
    opacity: 0.1;
    z-index: -1;
  }
}
</style>
