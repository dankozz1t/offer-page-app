<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCompanyStore } from '@/stores/company';

const companyStore = useCompanyStore();
const isLoading = ref(true);

onMounted(async () => {
  await companyStore.setCompany();
  isLoading.value = false;
});
</script>

<template>
  <NuxtLayout v-if="!isLoading">
    <NuxtPage />
  </NuxtLayout>
  <div v-else class="text-center text-5xl">Loading...</div>
</template>
