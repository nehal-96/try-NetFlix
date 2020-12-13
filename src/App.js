import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Pages  from './pages/index';
import * as Routes from './constants/routes';
import * as Hooks from './custom'

export default function App() {
  const {user} = Hooks.AuthUserListener()
  return (
    <Router>
     <Route exact path={Routes.Home}>
        <Pages.Home />
        </Route>
        <Hooks.IsLogged exact path={Routes.SignIn} loggedPath={Routes.Browse} user={user}>
        <Pages.SignIn />
        </Hooks.IsLogged>
        <Hooks.IsLogged exact path={Routes.SignUp} loggedPath={Routes.Browse} user={user}>
          <Pages.SignUp />
        </Hooks.IsLogged>
        <Hooks.Protected exact path={Routes.Browse} user={user}>
          <Pages.Browse />
        </Hooks.Protected>
        <Route path={Routes.FreeWatch}>
          <Pages.FreeWatch />
        </Route>
    </Router>
  );
}

