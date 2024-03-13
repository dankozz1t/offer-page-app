<script setup lang="ts">
import IconLock from '~/components/icons/IconLock.vue';
import IconStar from '~/components/icons/IconStar.vue';

const isTimerExpired = ref(localStorage.getItem('timeLeft') == 0);
</script>

<template>
  <div class="ellipse-item">
    <div class="trial">
      <div class="flex justify-between items-center mb-9">
        <div>
          <h3 class="trial__title">
            3-day trial for <span class="trial__text--accent">$0.99</span>
          </h3>
          <template v-if="!isTimerExpired">
            <p class="trial__subtitle">Then $9.99</p>
            <p class="trial__week">$39.99/week</p>
          </template>
          <template v-else>
            <p class="trial__subtitle">Then $39.99/week</p>
          </template>
        </div>

        <Timer
          v-if="!isTimerExpired"
          local-key="timeLeft"
          :total-time-seconds="0.5 * 60"
          :critical-time="10"
          @timer-expired="(v) => (isTimerExpired = v)"
        />
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
        period, you will automatically be charged the full price of $19.99/Month . You can cancel
        your subscription at any time. By continuing, you indicate that you've read and agree to our
        Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$trial-border-color: #cdcdcd;
$trial-info-border-color: rgba(0, 0, 0, 0.2);

.trial {
  position: relative;
  z-index: 6;

  width: 100%;
  max-width: 476px;
  padding: 24px;

  .planetlearn & {
    border-radius: 24px;
    border: 1px solid $trial-border-color;
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

.ellipse-item {
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

.trial__title {
  text-wrap: nowrap;
  margin-bottom: 8px;

  @include font-size(22px, 120%, 800);

  .smartstudy & {
    color: var(--third-accent-color);
  }
}

.trial__subtitle {
  margin-bottom: 2px;
  @include font-size(20px, 120%, 600);

  .smartstudy & {
    color: var(--white-color);
  }
}

.trial__week {
  opacity: 0.5;
  text-decoration: line-through;
  @include font-size(16px, 140%, 600);

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--white-color);
  }
}

.trial__text--accent {
  font-weight: 700;

  .planetlearn & {
    color: var(--first-accent-color);
  }

  .smartstudy & {
    color: var(--third-accent-color);
  }
}

.trial__list {
  margin-bottom: 24px;

  @include font-size(16px, 120%, 400);

  .smartstudy & {
    color: var(--white-color);
  }
}

.trial__item {
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  .smartstudy & {
    &:nth-child(1),
    &:nth-child(4) {
      color: var(--third-accent-color);
    }
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
  border-radius: 12px;

  .planetlearn & {
    border: 1px solid $trial-info-border-color;
  }

  .smartstudy & {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.trial__disclaimer {
  text-align: center;
  opacity: 0.5;

  @include font-size(12px, 120%, 400);

  .smartstudy & {
    color: var(--white-color);
  }
}
</style>
