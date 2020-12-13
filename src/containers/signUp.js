import React, {useState, useContext} from "react";
import {useHistory} from 'react-router-dom';
import { SignIn } from "../components";
import { Header } from "../components";
import {FirebaseContext} from '../context/firebase';
import * as Routes from '../constants/routes';

export function SignUpContainer() {
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ passW, setpassW ] = useState('');
  const [ firstName, setfirstName ] = useState('');
  const [ error, setError ] = useState('');
  const isInvalid = firstName === '' && email === '' && passW === '';
  const handleSignUp = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, passW)
    .then((info) => {
      info.user.updateProfile({
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1
      }).then(()=>      history.push(Routes.Browse)      )
    }).catch((error) => {
      setfirstName('');
      setEmail('');
      setpassW('');
      setError(error.message);
    })
  }
  return (
    <Header img='/images/misc/home-bg.jpg'>
      <Header.Container>
        <Header.Logo to={"./"} />
      </Header.Container>
      <SignIn>
        <SignIn.Form onSubmit={handleSignUp}>
          <h1>Sign up</h1>
          {error ? <SignIn.Error>{error}</SignIn.Error> : null}
          <SignIn.Input value={firstName} placeholder='First Name' type='text' onChange={({target})=> setfirstName(target.value)}></SignIn.Input>
          <SignIn.Input value={email} placeholder='Email or Phone Number' type='text' onChange={({target})=> setEmail(target.value)}></SignIn.Input>
          <SignIn.Input value={passW} placeholder='Password' type='password' onChange={({target})=> setpassW(target.value)}></SignIn.Input>
          <SignIn.Submit disabled={isInvalid}>Sign In</SignIn.Submit>

        </SignIn.Form>
        <SignIn.Text>
        <img src="images/misc/FB-f-Logo.png" alt="FB-link"></img>
          <span>Sign up with Facebook</span>
          <div>
            Already a user?
            <SignIn.Link to={'./signUp'}>Sign In now.</SignIn.Link>
          </div>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>

        </SignIn.Text>
      </SignIn>

    </Header>
  );
}