<script setup lang="ts">
import Header from '~/components/Header/Header.vue';
import GetPlanBlock from '~/components/GetPlanBlock/GetPlanBlock.vue';
import MainInfoBlock from '~/components/MainInfoBlock/MainInfoBlock.vue';
import { useCompanyStore } from '@/stores/company';
const companyStore = useCompanyStore();
document.body.classList.add(companyStore.getCompany.slug);
</script>

<template>
  <div class="offer__background h-screen">
    <Header />

    <main>
      <div class="offer__container container mx-auto mt-24 gap-16">
        <GetPlanBlock />

        <MainInfoBlock />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.offer__container {
  display: flex;
  justify-content: center;

  padding: 0 100px;
}

.offer__background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  .planetlearn & {
    background-image: url('@/assets/bg_planetlearn.jpg');
    opacity: 0.1;
  }

  .smartstudy & {
    background-image: url('@/assets/bg_smartstudy.jpg');
    background-size: cover;
  }
}
</style>
