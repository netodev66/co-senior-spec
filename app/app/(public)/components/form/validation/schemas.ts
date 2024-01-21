import * as yup from 'yup';

import { regexValidation } from '@/app/common/constants/validation/regexValidation';
import { validationMessages } from '@/app/common/constants/validation/validationMessages';

export const schema = yup.object({
  username: yup
    .string()
    .email(validationMessages.email.invalidFormat)
    .required(validationMessages.defaultMessages.requiredField),
  password: yup
    .string()
    .min(8, validationMessages.password.minLenght)
    .matches(regexValidation.password, validationMessages.password.invalidFormat)
    .required(validationMessages.defaultMessages.requiredField),
});
