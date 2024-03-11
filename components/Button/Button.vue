<template>
  <button :class="['pl-button', buttonClasses]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

type ButtonTypes = 'primary' | 'secondary' | 'accent';

const props = defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    default: 'primary',
  },

  isDisabled: { type: Boolean, default: false },
});

const buttonClasses = computed(() => {
  return [`button--${props.type}`];
});
</script>

<style scoped lang="scss">
@import '~/styles/components/pl-button';

.button--primary {
  background-color: var(--black-color);

  &:hover {
    background-color: var(--third-accent-color);
  }
}

.button--secondary {
  color: var(--black-color);
  border: 1px solid var(--gray-color);
  background-color: var(--white-color);

  &:hover {
    color: var(--white-color);
    background-color: var(--black-color);
  }
}

.button--accent {
  color: var(--black-color);
  background-color: var(--second-accent-color);

  &:hover {
    background-color: var(--second-accent-hover-color);
  }
}
</style>
