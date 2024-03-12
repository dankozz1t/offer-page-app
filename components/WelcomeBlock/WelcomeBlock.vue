<script setup lang="ts">
import LogoText from '~/components/LogoText/LogoText.vue';
</script>

<template>
  <section class="welcome">
    <h1 class="welcome__title">
      <span class="welcome__title--accent">Start</span> your learning journey
      <span class="welcome__title--accent">now</span>
    </h1>
    <h2 class="welcome__subtitle">
      Get a <LogoText /> plan to rock <span class="block"> self-learning </span>
    </h2>

    <Button> Get my plan </Button>
  </section>
</template>

<style scoped lang="scss">
.welcome {
  max-width: 500px;

  .planetlearn & {
    color: var(--black-color);
  }

  .smartstudy & {
    color: var(--white-color);
  }
}

.welcome__title {
  margin-bottom: 24px;

  @include font-size(48px, 120%, 800);

  .smartstudy &--accent {
    color: var(--first-accent-color);
  }
}

.welcome__subtitle {
  margin-bottom: 32px;

  @include font-size(24px, 120%, 600);
}
</style>
