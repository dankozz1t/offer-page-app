import { helpers, required, maxLength, minLength } from '@vuelidate/validators';

export const IRequired = helpers.withMessage('Filed is required', required);

export const IMaxLength = (numberCharacters: number) =>
  helpers.withMessage(
    `Field must be more than ${numberCharacters} characters`,
    maxLength(numberCharacters),
  );

export const IMinLength = (numberCharacters: number) =>
  helpers.withMessage(
    `Field must be less than ${numberCharacters} characters`,
    minLength(numberCharacters),
  );
