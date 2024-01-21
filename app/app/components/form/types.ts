import { Control, FieldPath, FieldValues, Path, RegisterOptions } from 'react-hook-form';

import { IProps as IPropsInputField } from '../inputField/types';

export interface IProps<T extends FieldValues = FieldValues> extends IPropsInputField {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
