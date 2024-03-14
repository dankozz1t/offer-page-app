<script setup lang="ts">
import Header from '~/components/Header/Header.vue';
import GetPlanBlock from '~/components/GetPlanBlock/GetPlanBlock.vue';
import MainInfoBlock from '~/components/MainInfoBlock/MainInfoBlock.vue';
import { useCompanyStore } from '@/stores/company';

const companyStore = useCompanyStore();
document.body.classList.add(companyStore.getCompany.slug);
</script>

<template>
  <div class="offer__background">
    <Header />

    <main>
      <div class="offer__container container mx-auto gap-16">
        <GetPlanBlock class="hidden xl:block" />

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
  margin-top: 100px;

  @include media(not-desktop) {
    padding: 0;
    margin-top: 24px;
  }
}

.offer__background {
  min-height: 100vh;
  height: 100%;

  .planetlearn & {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;

      background-image: url('@/assets/bg_planetlearn.jpg');
      opacity: 0.1;
    }
  }

  .smartstudy & {
    overflow: hidden;
    background-image: url('@/assets/bg_smartstudy.jpg');
    background-size: cover;
  }
}
</style>
