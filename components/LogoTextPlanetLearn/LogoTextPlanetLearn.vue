<template>
  <p class="text">
    <span class="text--accent">Planet</span>
    <span>Learn</span>
  </p>
</template>

<style scoped lang="scss">
.text {
  @include font-size(24px, 100%, 700);

  color: var(--black-color);

  &--accent {
    color: var(--first-accent-color);
  }
}
</style>
