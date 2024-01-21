import { IButtonProps } from 'native-base';

export interface IProps extends IButtonProps {
  text: string;
  type?: 'secondary' | 'primary';
}
