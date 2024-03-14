<template>
  <div class="timer">
    <div :class="{ 'timer__block--critical': isCritical, timer__block: true }">
      <div class="timer__progress" :style="progressBarStyle"></div>
      <span class="timer__text">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  localKey: string;
  totalTimeSeconds: number;
  criticalTime: number;
}>();

const emit = defineEmits(['timer-expired']);

const timeLeft = ref(Number(localStorage.getItem(props.localKey)) || props.totalTimeSeconds);

const isCritical = computed(() => timeLeft.value <= props.criticalTime && timeLeft.value != 0);

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft.value % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
});

const progressBarStyle = computed(() => ({
  width: `${(timeLeft.value / props.totalTimeSeconds) * 100}%`,
}));

const updateTimer = () => {
  if (timeLeft.value > 0) {
    timeLeft.value--;
    localStorage.setItem(props.localKey, String(timeLeft.value));

    return;
  }

  emit('timer-expired', true);
  clearInterval(timerInterval);
};

let timerInterval: number | undefined;
onMounted(() => {
  timerInterval = Number(setInterval(updateTimer, 1000));
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<style lang="scss" scoped>
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

  @include media(not-desktop) {
    width: 110px;
    height: 47px;
  }
}

.timer__progress {
  height: 100%;

  overflow: hidden;
  border-radius: 12px;

  transition: width 1.5s linear;

  .planetlearn & {
    background-color: #00ca14;
  }

  .smartstudy & {
    background-color: #4eaaff;
  }
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
