import { Slot, useRouter } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';

import { SessionProvider } from './context/auth';

export default function Layout() {
  const isSignedIn = true;
  const router = useRouter();

  useEffect(() => {
    // console.log('User changed: ', isSignedIn);

    // if (isSignedIn) {
    //   router.replace('/');
    // } else if (!isSignedIn) {
    // }
    // router.replace('/(home)/');
    router.replace('/(public)/sign-in');
  }, [isSignedIn]);

  return (
    <SessionProvider>
      <NativeBaseProvider>
        <Slot />
      </NativeBaseProvider>
    </SessionProvider>
  );
}
