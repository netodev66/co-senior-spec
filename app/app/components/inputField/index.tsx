import { FormControl, Input } from 'native-base';

import { IProps } from './types';

export const InputField: React.FunctionComponent<IProps> = ({ errorMessage, ...props }) => {
  const isInvalid = !!errorMessage;
  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        color="tertiary.400"
        _focus={{
          borderColor: 'tertiary.400',
        }}
        fontSize="md"
        h={16}
        mt="1"
        _invalid={{
          color: 'red.500',
        }}
        {...props}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
