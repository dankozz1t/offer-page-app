<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import IconGooglePay from '@/components/icons/IconGooglePay.vue';
</script>

<template>
  <div class="container mx-auto">
    <div class="flex gap-5 p-5">
      <Button> Get my plan </Button>
      <Button disabled> Get my plan </Button>

      <Button type="secondary">
        <IconGooglePay />
        PAY
      </Button>

      <Button type="accent">
        <IconsIconPayPal />
        BUY NOW
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
