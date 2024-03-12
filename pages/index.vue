<script setup lang="ts">
await navigateTo({
  path: '/',
  query: {
    abtest: 'test',
  },
});
</script>

<template>
  <p>Loading</p>
</template>

<style scoped lang="scss"></style>
