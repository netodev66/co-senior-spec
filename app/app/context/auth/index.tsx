import React, { useCallback } from 'react';

import { IAuthContextState } from './types';
import { useStorageState } from './useStorageState';
import { api } from '@/app/api';

const AuthContext = React.createContext<IAuthContextState>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  const signIn = useCallback(() => {

    api.post()

  }, []);

  const state = {
    signIn: () => {
      // Perform sign-in logic here
      setSession('xxx');
    },
    signOut: () => {
      setSession(null);
    },
    session,
    isLoading,
  };

  return <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>;
}
