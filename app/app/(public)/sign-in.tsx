import { useRouter } from 'expo-router';

import { SignInOrRegisterUserContainer } from './components/container';
import { FormRegistrationUser } from './components/form';
import { IFormSate } from './components/form/types';

export default function SignIn() {
  const submit = async (data: IFormSate) => {
    console.log({ data });
  };
  const router = useRouter();

  const secondaryButtonPress = async () => {
    router.push('/(public)/register');
  };

  return (
    <SignInOrRegisterUserContainer>
      <FormRegistrationUser
        secondaryButtonPress={secondaryButtonPress}
        secondaryButtonText="Registrar"
        onSubmit={submit}
        buttonSubmitText="Entrar"
      />
    </SignInOrRegisterUserContainer>
  );
}
