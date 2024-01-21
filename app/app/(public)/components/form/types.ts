export interface IFormSate {
  username: string;
  password: string;
}

export interface IProps {
  onSubmit: (data: IFormSate) => Promise<void>;
  buttonSubmitText: 'Entrar' | 'Registrar';
  secondaryButtonText: 'Voltar' | 'Registrar';
  secondaryButtonPress: () => void;
}