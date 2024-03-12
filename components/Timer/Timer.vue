<template>
  <div class="timer">
    <div :class="{ 'timer__block--critical': isCritical, timer__block: true }">
      <div class="timer__progress" :style="progressBarStyle"></div>
      <span class="timer__text">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const totalTime = 3 * 60;
const criticalTime = 10;

const timeLeft = ref(totalTime);

const isCritical = computed(() => timeLeft.value <= criticalTime && timeLeft.value != 0);

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft.value % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
});

const progressBarStyle = computed(() => ({
  width: `${(timeLeft.value / totalTime) * 100}%`,
}));

const updateTimer = () => {
  if (timeLeft.value > 0) {
    return timeLeft.value--;
  }

  clearInterval(timerInterval);
};

let timerInterval;
onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<style lang="scss" scoped>
$progress-color: #00ca14;
$bg-color: var(--black-color);
$text-color: var(--white-color);
$border-color: #ff0000cc;

.timer {
  @include font-size(24px, 140%, 600);
}

.timer__block {
  position: relative;
  width: 160px;
  height: 60px;

  overflow: hidden;
  border-radius: 12px;
  background-color: $bg-color;

  transition: border var(--transition-time) var(--transition-cubic);

  &--critical {
    border: 1px solid $border-color;
    box-shadow: 0 0 6px 0 $border-color;
  }
}

.timer__progress {
  height: 100%;

  overflow: hidden;
  border-radius: 12px;
  background-color: $progress-color;

  transition: width 1.5s linear;
}

.timer__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  color: $text-color;
}
</style>
