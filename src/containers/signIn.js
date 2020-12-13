import React, {useState, useContext} from "react";
import {useHistory} from 'react-router-dom';
import { SignIn } from "../components";
import { Header } from "../components";
import {FirebaseContext} from '../context/firebase';
import * as Routes from '../constants/routes';


export function SignInContainer() {
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ passW, setpassW ] = useState('');
  const [ error, setError ] = useState('');
  const isInvalid = email === '' && passW === '';
  const handleSignIn = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, passW)
    .then(() => {
      history.push(Routes.Browse);
    }).catch((error) => {
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
        <SignIn.Form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          {error ? <SignIn.Error>{error}</SignIn.Error> : null}
          <SignIn.Input placeholder='Email or Phone Number' type='text' onChange={({target})=> setEmail(target.value)}></SignIn.Input>
          <SignIn.Input placeholder='Password' type='password' onChange={({target})=> setpassW(target.value)}></SignIn.Input>
          <SignIn.Submit disabled={isInvalid}>Sign In</SignIn.Submit>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
          <span>Need help?</span>

        </SignIn.Form>
        <SignIn.Text>
        <img src="images/misc/FB-f-Logo.png" alt="FB-link"></img>
          <span>Login with Facebook</span>
          <div>
            New to Netflix?
            <SignIn.Link to={'./signUp'}>Sign up now.</SignIn.Link>
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
