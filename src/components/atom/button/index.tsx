import React from 'react';
import * as S from './style';

export interface ButtonProps extends S.StyledButtonProps {}
export const Button = (props: ButtonProps) => {
  return <S.Button {...props} />;
};
