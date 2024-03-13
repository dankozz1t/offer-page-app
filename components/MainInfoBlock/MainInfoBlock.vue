<script setup lang="ts">
import IconLock from '~/components/icons/IconLock.vue';
import IconStar from '~/components/icons/IconStar.vue';
import DayTrialBlock from '~/components/DayTrialBlock/DayTrialBlock.vue';
</script>

<template>
  <div class="info-block">
    <div class="info-block__box">
      <DayTrialBlock />

      <ul class="info-block__list">
        <li class="info-block__item">
          <IconStar />
          <p>
            Exclusive access to <span class="info-block__item--accent">350+</span> learning programs
          </p>
        </li>
        <li class="info-block__item">
          <IconStar />
          <p>Personalized course plan</p>
        </li>
        <li class="info-block__item">
          <IconStar />
          <p>Comfy learning schedule made by you</p>
        </li>
        <li class="info-block__item">
          <IconStar />
          <p><span class="info-block__item--accent"> 24/7</span> tutor support in a secure chat</p>
        </li>
        <li class="info-block__item">
          <IconStar />
          <p>Lifetime access to materials</p>
        </li>
      </ul>

      <p class="info-block__secure">
        <IconLock />
        Safe & secure payment
      </p>

      <p class="info-block__disclaimer">
        $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial
        period, you will automatically be charged the full price of $19.99/Month . You can cancel
        your subscription at any time. By continuing, you indicate that you've read and agree to our
        Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-block {
  position: relative;

  .smartstudy & {
    &::before {
      content: '';
      position: absolute;
      width: 86px;
      height: 86px;
      left: -45px;
      top: -45px;
      z-index: 1;
      background-image: url('~/assets/ellipse_smartstudy.svg');
    }
  }
}

.info-block__box {
  position: relative;
  z-index: 6;

  width: 100%;
  max-width: 476px;
  padding: 24px;

  .planetlearn & {
    border-radius: 24px;
    border: 1px solid #cdcdcd;
    background-color: var(--white-color);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);

    &::before {
      content: '';
      position: absolute;
      width: 200px;
      height: 80px;
      right: 24px;
      top: -56px;
      background-image: url('~/assets/asteroid_planetlearn.svg');
    }
  }

  .smartstudy & {
    border-radius: 32px;
    border: 4px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.3);

    &::after {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      right: -200px;
      bottom: 150px;
      z-index: -1;
      background-image: url('~/assets/rocket_smartstudy.png');
    }
  }
}

.info-block__list {
  margin-bottom: 24px;

  @include font-size(16px, 120%, 400);

  .smartstudy & {
    color: var(--white-color);
  }
}

.info-block__item {
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  &--accent {
    font-weight: 700;

    .planetlearn & {
      color: var(--first-accent-color);
    }

    .smartstudy & {
      color: var(--third-accent-color);
    }
  }

  .smartstudy & {
    &:nth-child(1),
    &:nth-child(4) {
      color: var(--third-accent-color);
    }
  }
}

.info-block__secure {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;

  margin-bottom: 24px;

  @include font-size(16px, 100%, 600);

  color: var(--third-accent-color);
  border-radius: 12px;

  .planetlearn & {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .smartstudy & {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.info-block__disclaimer {
  text-align: center;
  opacity: 0.5;

  @include font-size(12px, 120%, 400);

  .smartstudy & {
    color: var(--white-color);
  }
}
</style>
