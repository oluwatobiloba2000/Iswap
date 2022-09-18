import React from 'react';
import * as S from './style';

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}
export const AuthLayout = ({children, title}: AuthLayoutProps) => {
  return (
    <S.Layout>
      <S.Text category="h1">{title}</S.Text>
      {children}
    </S.Layout>
  );
};
