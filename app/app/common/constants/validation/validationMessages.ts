const defaultMessages = {
  requiredField: 'Campo obrigatório',
  invalidFormat: 'Formato inválido',
};

export const validationMessages = {
  defaultMessages,
  email: {
    invalidFormat: 'Formato de E-mail inválido',
  },
  password: {
    invalidFormat: defaultMessages.invalidFormat,
    minLenght: 'A senha deve conter no mínimo 8 dígitos',
  },
};
