<script setup lang="ts">
import IconLock from '~/components/icons/IconLock.vue';
import IconStar from '~/components/icons/IconStar.vue';
import { useCompanyStore } from '@/stores/company';
const companyStore = useCompanyStore();
</script>

<template>
  <div :class="['trial', companyStore.getClass.trial]">
    <div class="flex justify-between items-center mb-9">
      <div>
        <h3 class="trial__title">3-day trial for <span class="trial__text--accent">$0.99</span></h3>
        <p class="trial__subtitle">Then $9.99</p>
      </div>

      <Timer />
    </div>

    <ul class="trial__list">
      <li class="trial__item">
        <IconStar />
        <p>Exclusive access to <span class="trial__text--accent">350+</span> learning programs</p>
      </li>
      <li class="trial__item">
        <IconStar />
        <p>Personalized course plan</p>
      </li>
      <li class="trial__item">
        <IconStar />
        <p>Comfy learning schedule made by you</p>
      </li>
      <li class="trial__item">
        <IconStar />
        <p><span class="trial__text--accent"> 24/7</span> tutor support in a secure chat</p>
      </li>
      <li class="trial__item">
        <IconStar />
        <p>Lifetime access to materials</p>
      </li>
    </ul>

    <p class="trial__info">
      <IconLock />
      Safe & secure payment
    </p>

    <p class="trial__disclaimer">
      $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial
      period, you will automatically be charged the full price of $19.99/Month . You can cancel your
      subscription at any time. By continuing, you indicate that you've read and agree to our Terms
      & Conditions, Privacy Policy , Money Back , and Subscription Terms .
    </p>
  </div>
</template>

<style scoped lang="scss">
$trial-border-color: #cdcdcd;
$trial-info-border-color: rgba(0, 0, 0, 0.2);

.trial {
  position: relative;

  width: 100%;
  max-width: 476px;
  padding: 24px;

  border-radius: 24px;
  border: 1px solid $trial-border-color;
  background-color: var(--white-color);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);

  &--planetlearn::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 80px;
    right: 24px;
    top: -56px;
    background-image: url('@/assets/asteroid.svg');
  }
}

.trial__title {
  text-wrap: nowrap;
  margin-bottom: 8px;

  @include font-size(24px, 120%, 800);
}

.trial__subtitle {
  @include font-size(20px, 120%, 600);
}

.trial__text--accent {
  font-weight: 700;
  color: var(--first-accent-color);
}

.trial__list {
  margin-bottom: 24px;

  @include font-size(16px, 120%, 400);
}

.trial__item {
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
}

.trial__info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;

  margin-bottom: 24px;

  @include font-size(16px, 100%, 600);

  color: var(--third-accent-color);
  border: 1px solid $trial-info-border-color;
  border-radius: 12px;
}

.trial__disclaimer {
  text-align: center;
  opacity: 0.5;

  @include font-size(12px, 120%, 400);
}
</style>
