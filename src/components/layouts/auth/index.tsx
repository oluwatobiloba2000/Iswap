import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import * as S from './style';

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
  titleStyles?: StyleProp<TextStyle>;
}
export const AuthLayout = ({children, title, titleStyles}: AuthLayoutProps) => {
  return (
    <S.Layout>
      <S.Text style={titleStyles} category="h1">
        {title}
      </S.Text>
      {children}
    </S.Layout>
  );
};
