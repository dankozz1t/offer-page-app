import { ref, computed } from 'vue';

export function useFieldValidation() {
  const isInvalid = ref(null);

  const fieldValidationClass = computed(() => {
    if (isInvalid.value != null) {
      return isInvalid.value ? 'i-input__field--invalid' : 'i-input__field--valid';
    }

    return '';
  });

  const setFieldInvalid = (isValid: boolean) => {
    isInvalid.value = isValid;
  };

  return { isInvalid, fieldValidationClass, setFieldInvalid };
}
