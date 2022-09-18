import {Input as KittenInput, InputProps} from '@ui-kitten/components';
import styled from 'styled-components';

export interface StyledInputProps extends InputProps {
  // Add your own props here
}

export const Input = styled(KittenInput)<StyledInputProps>`
  margin-bottom: 16px;
`;
