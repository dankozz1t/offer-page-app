<script setup lang="ts">
import Button from '~/components/Button/Button.vue';
import Select from '~/components/Select/Select.vue';
import Input from '~/components/Input/Input.vue';
import IconGooglePay from '~/components/icons/IconGooglePay.vue';
import IconPayPal from '~/components/icons/IconPayPal.vue';
import { useVuelidate } from '@vuelidate/core';
import { IRequired, IMinLength } from '~/helpers/rulesValidation';
import { defineProps } from 'vue';

defineProps<{
  onClose: () => void;
}>();

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const years = ['2010', '2011', '2012', '2013', '2014', '2015'];

const cardNumber = ref('');
const selectedMonth = ref('');
const selectedYear = ref('');
const cvc = ref('');

const rules = {
  form: {
    cardNumber: { required: IRequired, minlength: IMinLength(16) },
    selectedMonth: { required: IRequired },
    selectedYear: { required: IRequired },
    cvc: { required: IRequired, minlength: IMinLength(3) },
  },
};

const v$ = useVuelidate(rules, { form: { cardNumber, selectedMonth, selectedYear, cvc } });

const onSubmitForm = () => {
  const { $toastify } = useNuxtApp();
  $toastify('Successful! Form data in the console.', { type: 'success' });
  console.log('Form data', {
    cardNumber: cardNumber.value,
    selectedMonth: selectedMonth.value,
    selectedYear: selectedYear.value,
    cvc: cvc.value,
  });
};
</script>

<template>
  <form class="payment-modal" @submit.prevent="onSubmitForm">
    <h4 class="payment-modal__title">Payment method</h4>

    <Button option="accent" class="payment-modal__button">
      <IconPayPal />
      BUY NOW
    </Button>

    <Button option="secondary" class="payment-modal__button">
      <IconGooglePay />
      PAY
    </Button>

    <p class="payment-modal__separator">OR</p>

    <div class="w-full">
      <Input
        v-model="cardNumber"
        :invalid="v$.form.cardNumber.$invalid"
        class="mb-8 i-input__card"
        label="Card Number"
        placeholder="•••• •••• •••• ••••"
        maska="#### #### #### ####"
        autocomplete="cc-number"
        name="credit-number"
      />

      <div class="payment-modal__wrapper mb-10">
        <Select
          :items="month"
          :selected="selectedMonth"
          :invalid="v$.form.selectedMonth.$invalid"
          class="payment-modal__select"
          label="Month"
          placeholder="Select"
          autocomplete="cc-exp-month"
          @update:selected="selectedMonth = $event"
        />

        <Select
          :items="years"
          :selected="selectedYear"
          :invalid="v$.form.selectedYear.$invalid"
          class="payment-modal__select"
          label="Year"
          placeholder="Select"
          autocomplete="cc-exp-year"
          @update:selected="selectedYear = $event"
        />

        <Input
          v-model="cvc"
          :invalid="v$.form.cvc.$invalid"
          label="CVC"
          placeholder="•••"
          maska="###"
          type="password"
          autocomplete="cc-csc"
        />
      </div>
    </div>

    <Button
      type="submit"
      option="primary"
      :disabled="v$.form.$invalid"
      class="payment-modal__button"
    >
      Submit
    </Button>

    <button class="payment-modal__close" @click="onClose">Close</button>
  </form>
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

  @include media(not-desktop) {
    min-width: 0;
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

    opacity: 0.5;
  }

  .planetlearn & {
    color: var(--black-color);

    &::before,
    &::after {
      background-color: var(--gray-color);
      background-color: var(--gray-color);
    }
  }

  .smartstudy & {
    color: var(--gray-color);

    &::before,
    &::after {
      background-color: var(--white-color);
      background-color: var(--white-color);
    }
  }
}

.payment-modal__wrapper {
  display: flex;
  gap: 10px;
}

.payment-modal__select {
  max-width: 116px;
}

.payment-modal__close {
  padding: 10px 16px;
  @include font-size(16px, 140%, 600);
}
</style>
