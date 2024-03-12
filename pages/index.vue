<script setup lang="ts">
import WelcomeBlock from '~/components/WelcomeBlock/WelcomeBlock.vue';
import DayTrialBlock from '~/components/DayTrialBlock/DayTrialBlock.vue';
</script>

<template>
  <div class="page-container flex justify-center container mx-auto mt-24 gap-16">
    <WelcomeBlock />

    <DayTrialBlock />
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 0 100px;
}
</style>
