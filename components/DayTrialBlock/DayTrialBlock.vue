<script setup lang="ts">
const isTimerExpired = ref(localStorage.getItem('timeLeft') == 0);
</script>

<template>
  <div class="trial mb-9">
    <div>
      <h3 class="trial__title">3-day trial for <span class="trial__title--accent">$0.99</span></h3>
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
</template>

<style scoped lang="scss">
.trial {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trial__title {
  text-wrap: nowrap;
  margin-bottom: 8px;

  @include font-size(22px, 120%, 800);

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
</style>
