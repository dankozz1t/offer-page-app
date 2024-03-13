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
  <section class="welcome">
    <h1 class="welcome__title">
      <span class="welcome__title--accent">Start</span> your learning journey
      <span class="welcome__title--accent">now</span>
    </h1>
    <h2 class="welcome__subtitle">
      Get a <LogoText /> plan to rock <span class="block"> self-learning </span>
    </h2>

    <Button @click="onShowModal"> Get my plan </Button>

    <Modal :is-visible="isVisibleModal" :on-close="onCloseModal">
      <PaymentModalContent :on-close="onCloseModal" />
    </Modal>
  </section>
</template>

<style scoped lang="scss">
.welcome {
  max-width: 500px;

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--white-color);
  }
}

.welcome__title {
  margin-bottom: 24px;

  @include font-size(48px, 120%, 800);

  .smartstudy &--accent {
    color: var(--first-accent-color);
  }
}

.welcome__subtitle {
  margin-bottom: 32px;

  @include font-size(24px, 120%, 600);
}
</style>
