<script setup lang="ts">
import { useCompanyStore } from '@/stores/company';

const companyStore = useCompanyStore();
</script>

<template>
  <p class="text">
    <span class="text--accent">{{ companyStore.getCompanyName[0] }}</span>
    <span>{{ companyStore.getCompanyName[1] }}</span>
  </p>
</template>

<style scoped lang="scss">
.text {
  display: inline;

  @include font-size(24px, 100%, 700);

  color: var(--black-color);

  &--accent {
    color: var(--first-accent-color);
  }
}
</style>
