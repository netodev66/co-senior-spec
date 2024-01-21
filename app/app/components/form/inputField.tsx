import { Controller, FieldValues } from 'react-hook-form';

import { IProps } from './types';
import { InputField } from '../inputField';

export function ControlledInputField<IFormSate extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: IProps<IFormSate>) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <InputField onChangeText={onChange} value={value} {...props} />
      )}
      name={name}
    />
  );
}
