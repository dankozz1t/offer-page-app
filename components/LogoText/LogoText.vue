<script setup lang="ts">
import { useCompanyStore } from '@/stores/company';

const companyStore = useCompanyStore();
</script>

<template>
  <p class="text">
    <span class="text--accent">{{ companyStore.getCompany.companyName[0] }}</span>
    <span>{{ companyStore.getCompany.companyName[1] }}</span>
  </p>
</template>

<style scoped lang="scss">
.text {
  display: inline;

  @include font-size(24px, 100%, 700);

  &--accent {
    color: var(--first-accent-color);
  }

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--white-color);
  }
}
</style>
