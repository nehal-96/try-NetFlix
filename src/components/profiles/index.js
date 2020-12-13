import React from "react";
import {Container, Title, User, Spinner, Picture, HideBody} from './styles/profiles';

export default function Profiles({children}) {
  return (
    <Container>{children}</Container>
  )
}

Profiles.Title = function ProfilesUser({children}) {
  return (
    <Title>{children}</Title>
  )
}

Profiles.User = function ProfilesUser({children, ...restProp}) {
  return (
    <User {...restProp}>{children}</User>
  )
}

Profiles.Loading = function ProfilesLoadng({src}) {
  return (
    <Spinner>
      <HideBody />
      <Picture src={`images/users/${src}.png`} />
    </Spinner>
  )
}