<script setup lang="ts">
import LogoTextPlanetLearn from '~/components/LogoTextPlanetLearn/LogoTextPlanetLearn.vue';
</script>

<template>
  <section class="welcome">
    <h1 class="welcome__title">Start your learning journey now</h1>
    <h2 class="welcome__subtitle">
      Get a <LogoTextPlanetLearn /> plan to rock <span class="block"> self-learning </span>
    </h2>

    <Button> Get my plan </Button>
  </section>
</template>

<style scoped lang="scss">
.welcome {
  max-width: 500px;
}

.welcome__title {
  margin-bottom: 24px;

  @include font-size(48px, 120%, 800);
}

.welcome__subtitle {
  margin-bottom: 32px;

  @include font-size(24px, 120%, 600);
}
</style>
