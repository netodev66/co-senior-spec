export interface IAuthContextState {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}
