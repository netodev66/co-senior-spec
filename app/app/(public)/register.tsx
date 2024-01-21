import { useRouter } from 'expo-router';

import { SignInOrRegisterUserContainer } from './components/container';
import { FormRegistrationUser } from './components/form';
import { IFormSate } from './components/form/types';

export default function Register() {
  const submit = async (data: IFormSate) => {
    console.log({ data });
  };

  const router = useRouter();

  const secondaryButtonPress = async () => {
    router.push('/(public)/sign-in');
  };

  return (
    <SignInOrRegisterUserContainer>
      <FormRegistrationUser
        secondaryButtonPress={secondaryButtonPress}
        secondaryButtonText="Voltar"
        onSubmit={submit}
        buttonSubmitText="Registrar"
      />
    </SignInOrRegisterUserContainer>
  );
};
