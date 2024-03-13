<script setup lang="ts">
import Button from '~/components/Button/Button.vue';
import IconGooglePay from '~/components/icons/IconGooglePay.vue';
import IconPayPal from '~/components/icons/IconPayPal.vue';

import { defineProps } from 'vue';

defineProps<{
  onClose: () => void;
}>();
</script>

<template>
  <div class="payment-modal">
    <h4 class="payment-modal__title">Payment method</h4>

    <Button type="accent" class="payment-modal__button">
      <IconPayPal />
      BUY NOW
    </Button>

    <Button type="secondary" class="payment-modal__button">
      <IconGooglePay />
      PAY
    </Button>

    <p class="payment-modal__separator">OR</p>

    <Button type="primary" disabled class="payment-modal__button"> Submit </Button>
    <button class="payment-modal__close" @click="onClose">Close</button>
  </div>
</template>

<style scoped lang="scss">
.payment-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 400px;

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--white-color);
  }
}

.payment-modal__title {
  margin-bottom: 24px;

  @include font-size(21px, 120%, 800);
}

.payment-modal__button {
  margin-bottom: 16px;
  min-width: 100%;
  height: 56px;
}

.payment-modal__separator {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;

  @include font-size(12px, 140%, 600);

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    width: 45%;

    left: 0;
    bottom: 50%;
    transform: translate(0, 50%);

    border-radius: 24px;
    background-color: var(--white-color);
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    width: 45%;

    right: 0;
    bottom: 50%;
    transform: translate(0, 50%);

    border-radius: 24px;
    background-color: var(--white-color);
    opacity: 0.5;
  }

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--grey-color);
  }
}

.payment-modal__close {
  padding: 10px 16px;
  @include font-size(16px, 140%, 600);
}
</style>
