import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'native-base';
import { useForm } from 'react-hook-form';

import { IFormSate, IProps } from './types';
import { schema } from './validation/schemas';

import { Button } from '@/app/components/button';
import { ControlledInputField } from '@/app/components/form/inputField';

export const FormRegistrationUser = (props: IProps) => {
  const { control, handleSubmit, formState } = useForm<IFormSate>({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const submit = async (data: IFormSate) => {
    try {
      await props.onSubmit(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ControlledInputField<IFormSate>
        name="username"
        control={control}
        placeholder="E-mail"
        errorMessage={errors.username?.message}
      />
      <ControlledInputField<IFormSate>
        name="password"
        control={control}
        errorMessage={errors.password?.message}
        placeholder="Senha"
        secureTextEntry
      />
      <View flexDirection="row">
        <Button w="4/6" text={props.buttonSubmitText} onPress={handleSubmit(submit)} />
        <Button
          type="secondary"
          w="2/6"
          text={props.secondaryButtonText}
          onPress={props.secondaryButtonPress}
        />
      </View>
    </>
  );
};
