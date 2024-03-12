<script setup lang="ts">
import Header from '~/components/Header/Header.vue';
import WelcomeBlock from '~/components/WelcomeBlock/WelcomeBlock.vue';
import DayTrialBlock from '~/components/DayTrialBlock/DayTrialBlock.vue';
import { useCompanyStore } from '@/stores/company';
const companyStore = useCompanyStore();
</script>

<template>
  <div :class="['background h-screen', companyStore.getCompany.slug]">
    <Header />

    <main>
      <div class="page-container flex justify-center container mx-auto mt-24 gap-16">
        <WelcomeBlock />

        <DayTrialBlock />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 0 100px;
}

.background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.planetlearn.background::before {
  background-image: url('@/assets/bg_planetlearn.jpg');
  opacity: 0.1;
}

.smartstudy.background::before {
  background-image: url('@/assets/bg_smartstudy.jpg');
  background-size: cover;
}
</style>
