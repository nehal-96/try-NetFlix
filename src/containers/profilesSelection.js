import React from "react";
import { Header } from "../components";
import { Profiles } from "../components";

export function ProfilesSelectionContainer({user, setProfile}) {
  return (
    <Header >
      <Header.Container>
        <Header.Logo to={"./"} />
      </Header.Container>
      <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.User onClick={()=>setProfile({
          displayName: user.displayName,
          photoURL: user.photoURL
        })}>
          <li>
          <img src={user.photoURL ? `/images/users/${user.photoURL}.png` : '/images/misc/loading.gif'} alt='profileURL'></img>
          <p>{user.displayName}</p>
          </li>
          </Profiles.User>
        </Profiles>
    </Header>
  )
}