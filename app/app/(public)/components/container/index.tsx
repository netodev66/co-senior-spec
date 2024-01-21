import { VStack, Center, Heading } from 'native-base';
import { PropsWithChildren } from 'react';

export const SignInOrRegisterUserContainer = (props: PropsWithChildren) => {
  return (
    <VStack flex={1} px={10}>
      <Center>
        <Heading noOfLines={2} my={24}>{`Olá, \nBem-vindo(a) ao Ton`}</Heading>
        {props.children}
      </Center>
    </VStack>
  );
};
