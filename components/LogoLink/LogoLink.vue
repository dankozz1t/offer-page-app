<script setup lang="ts">
import LogoText from '~/components/LogoText/LogoText.vue';
import { useCompanyStore } from '@/stores/company';

const companyStore = useCompanyStore();

const IconLogo = defineAsyncComponent(
  () => import(`~/components/icons/${companyStore.getComponent.iconLogo}.vue`),
);
</script>

<template>
  <NuxtLink to="/" class="flex gap-2 items-center">
    <component :is="IconLogo" />

    <LogoText />
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
