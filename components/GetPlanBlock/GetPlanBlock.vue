<script setup lang="ts">
import { ref } from 'vue';
import LogoText from '~/components/LogoText/LogoText.vue';
import Modal from '~/components/Modal/Modal.vue';
import Button from '~/components/Button/Button.vue';
import PaymentModalContent from '~/components/PaymentModalContent/PaymentModalContent.vue';

const isVisibleModal = ref(false);

const onShowModal = () => {
  isVisibleModal.value = true;
};

const onCloseModal = () => {
  isVisibleModal.value = false;
};
</script>

<template>
  <section class="get-plan">
    <h1 class="get-plan__title">
      <span class="get-plan__title--accent">Start</span>
      your learning journey
      <span class="get-plan__title--accent">now</span>
    </h1>
    <h2 class="get-plan__subtitle">
      Get a <LogoText /> plan to rock <span class="inline xl:block"> self-learning </span>
    </h2>

    <Button class="get-plan__button" @click="onShowModal"> Get my plan </Button>

    <Modal :is-visible="isVisibleModal" :on-close="onCloseModal">
      <PaymentModalContent :on-close="onCloseModal" />
    </Modal>
  </section>
</template>

<style scoped lang="scss">
.get-plan {
  max-width: 500px;

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--white-color);
  }

  @include media(not-desktop) {
    margin-bottom: 32px;
  }
}

.get-plan__title {
  margin-bottom: 24px;

  @include font-size(48px, 120%, 800);

  .smartstudy & {
    @include font-size(40px, 120%, 800);
    text-transform: uppercase;

    &--accent {
      color: var(--first-accent-color);
    }
  }

  @include media(not-desktop) {
    margin-bottom: 16px;
    font-size: 28px;

    .smartstudy & {
      text-transform: none;
    }
  }
}

.get-plan__subtitle {
  margin-bottom: 32px;

  @include font-size(24px, 120%, 600);

  @include media(not-desktop) {
    font-size: 20px;
  }
}

.get-plan__button {
  @include media(not-desktop) {
    min-width: 100%;
  }
}
</style>
