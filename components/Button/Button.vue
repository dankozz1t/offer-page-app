<script setup lang="ts">
import { defineProps, computed } from 'vue';

type ButtonTypes = 'primary' | 'secondary' | 'accent';

const props = defineProps({
  option: {
    type: String as PropType<ButtonTypes>,
    default: 'primary',
  },

  isDisabled: { type: Boolean, default: false },
});

const buttonClasses = computed(() => {
  return [`button--${props.option}`];
});
</script>

<template>
  <button :class="['i-button', buttonClasses]" type="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '~/styles/components/i-button';

.button--primary {
  .planetlearn & {
    background-color: var(--black-color);

    &:hover {
      background-color: var(--third-accent-color);
    }
  }

  .smartstudy & {
    color: #495eee;
    background-color: var(--white-color);

    &:hover {
      color: var(--white-color);
      background-color: #6c89ff;
    }
  }
}

.button--secondary {
  color: var(--black-color);
  border: 1px solid var(--gray-color);
  background-color: var(--white-color);

  &:hover {
    color: var(--white-color);
    border-color: var(--black-color);

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
