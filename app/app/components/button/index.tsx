import { Button as NativeButton, Text } from 'native-base';

import { IProps } from './types';

const types = {
  primary: {
    bg: 'tertiary.400',
    pressedColor: 'tertiary.300',
  },
  secondary: {
    bg: 'purple.400',
    pressedColor: 'purple.500',
  },
};

export const Button: React.FunctionComponent<IProps> = ({ text, type = 'primary', ...props }) => {
  const { bg, pressedColor } = types[type];

  return (
    <NativeButton
      bg={bg}
      _pressed={{
        bgColor: pressedColor,
      }}
      {...props}>
      <Text>{text}</Text>
    </NativeButton>
  );
};
