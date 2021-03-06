import LoginContainer from 'modules/auth/container/LoginContainer';
import React from 'react';
import { Divider } from 'stylesheet/Text/Text.styled';
import { PrimaryTitle, SubTitle } from 'stylesheet/Title/Title.styled';
import { LoginPageWrapper } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <PrimaryTitle purple>Sign in to Test React System</PrimaryTitle>
      <SubTitle gray>Enter your detail belows</SubTitle>
      <LoginContainer />
    </LoginPageWrapper>
  );
}
