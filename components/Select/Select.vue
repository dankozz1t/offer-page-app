<script setup lang="ts">
import IconDropdown from '~/components/icons/IconDropdown.vue';
import IconCheckmark from '~/components/icons/IconCheckmark.vue';
import { ref } from 'vue';
import { useFieldValidation } from '~/composables/useFieldValidation';

const props = defineProps({
  items: {
    type: Array as () => string[],
    required: true,
  },
  selected: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select',
  },
  label: {
    type: String,
    default: '',
  },
  invalid: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:selected']);

const { fieldValidationClass, setFieldInvalid } = useFieldValidation();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;

  setFieldInvalid(props.invalid);
};

const selectItem = (item: string) => {
  emit('update:selected', item);
  isOpen.value = false;

  setFieldInvalid(false);
};
</script>

<template>
  <div class="select i-input">
    <div @click="toggleDropdown">
      <p v-if="label" class="i-input__label">{{ label }}</p>
      <div
        :class="[
          'select__input i-input__field',
          isOpen && 'select__input--open',
          fieldValidationClass,
        ]"
      >
        <p>{{ selected || placeholder }}</p>

        <IconDropdown />
      </div>
    </div>
    <transition name="select-show">
      <div v-show="isOpen" class="select__dropdown">
        <div
          v-for="(item, index) in items"
          :key="`${item}-${index}`"
          :class="['select__item', item === selected && 'select__item--check']"
          @click="selectItem(item)"
        >
          <span>
            {{ item }}
          </span>

          <IconCheckmark v-show="item === selected" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/components/i-input';

.select {
  position: relative;
  width: 100%;
}

.select__input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  transition: border-radius var(--transition-time) var(--transition-cubic);

  &--open {
    border-radius: 8px 8px 0 0;
    border-bottom: none;
  }
}

.select__dropdown {
  position: absolute;
  width: 100%;
  border-top: none;

  z-index: 1;

  border-radius: 0 0 8px 8px;
  overflow: auto;

  max-height: 200px;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
  }

  .planetlearn & {
    border: 1px solid var(--gray-color);
    background-color: #fff;

    &::-webkit-scrollbar {
      background-color: var(--white-color);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--fourth-accent-color);
    }
  }

  .smartstudy & {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: #617398;

    &::-webkit-scrollbar {
      background-color: #617398;
    }
    &::-webkit-scrollbar-thumb {
      background: #4d5e82;
    }
  }
}

.select__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 8px 8px 16px;
  cursor: pointer;

  @include font-size(12px, 100%, 400);

  transition:
    color var(--transition-time) var(--transition-cubic),
    background-color var(--transition-time) var(--transition-cubic);

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  .planetlearn & {
    border-bottom: 1px solid var(--gray-color);

    &:hover {
      color: #ffffff;
      background-color: #00ca14;
    }

    &--check {
      color: #ffffff;
      background-color: #00ca14;
    }
  }

  .smartstudy & {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      color: #ffffff;
      background-color: #6c89ff;
    }

    &--check {
      color: #ffffff;
      background-color: #6c89ff;
    }
  }
}

.select-show-enter-active,
.select-show-leave-active {
  max-height: 200px;
  opacity: 1;
  overflow: hidden;

  transition:
    max-height 300ms ease-in-out,
    opacity 250ms ease-in-out;
}

.select-show-enter-from,
.select-show-leave-to {
  max-height: 1px;
  opacity: 0;
}
</style>
