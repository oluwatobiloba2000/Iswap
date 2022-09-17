import {Button as KittenButton, ButtonProps} from '@ui-kitten/components';
import styled from 'styled-components';

export interface StyledButtonProps extends ButtonProps {
  // Add your own props here
}

export const Button = styled(KittenButton)<StyledButtonProps>``;
