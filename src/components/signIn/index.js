import React from "react";
import {Frame, Form, Submit, Input, Text, Link, Error} from './styles/signIn';

export default function SignIn({children}) {
  return (
    <Frame>{children}</Frame>
  );
}

SignIn.Form = function SignInForm({children, ...restProps}) {
  return (
    <Form {...restProps}>
      {children}
    </Form>
  );
};

SignIn.Input = function SignInInput({children, ...restProps}) {
  return (
  <Input {...restProps}>{children}</Input>
  );
};

SignIn.Submit = function SignInSubmit({children, ...restProps}) {
  return (
  <Submit {...restProps}>{children}</Submit>
  );
};

SignIn.Text = function SignInText({children}) {
  return (
    <Text>{children}</Text>
  );
};

SignIn.Link = function SignInLink({to, children}) {
  return (
    <Link to={to}>{children}</Link>
  );
};
SignIn.Error = function SignInError({children}) {
  return (
    <Error>{children}</Error>
  );
};