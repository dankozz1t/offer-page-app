<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  isVisible: boolean;
  onClose: () => void;
}>();
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="modal">
      <div class="modal__content">
        <slot></slot>
      </div>

      <div class="modal__background" @mousedown="onClose"></div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  z-index: 21;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;

  overflow: hidden;
}

.modal__content {
  padding: 24px 16px;

  z-index: 11;

  .planetlearn & {
    border-radius: 12px;
    background-color: var(--white-color);
  }

  .smartstudy & {
    border-radius: 24px;
    background-color: #4d5e82;
  }
}

.modal__background {
  z-index: 9;

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;

  background: rgba(0, 0, 0, 0.4);
}
</style>
