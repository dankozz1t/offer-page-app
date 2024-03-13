<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useFieldValidation } from '~/composables/useFieldValidation';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  maska: {
    type: String,
    default: '',
  },
  invalid: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:modelValue']);

const { fieldValidationClass, setFieldInvalid } = useFieldValidation();

const onUpdateValue = (value: string) => {
  emit('update:modelValue', value);

  setFieldInvalid(props.invalid);
};
</script>

<template>
  <div class="i-input">
    <label v-if="label" class="i-input__label" for="input">{{ label }} </label>
    <input
      :id="`input-${label}`"
      v-maska
      :class="['i-input__field', fieldValidationClass]"
      :value="modelValue"
      :placeholder="placeholder"
      :data-maska="maska"
      v-bind="$attrs"
      @input="onUpdateValue($event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/components/i-input';
</style>
