import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";
import { onAuthUIStateChange, AuthState } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";

import Header from "./Header";
import IndividualList from "./Individual/IndividualList";
import IndividualDetail from "./Individual/IndividualDetail";
import AddIndividual from "./Individual/AddIndividual";
import AddOximeter from "./PulseOximetry/AddPulseOximetry";
import { URL } from "../utils/constants";

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  body: {
    padding: 20,
  },
  amplifyAuthenticator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100vh",
  },
});

const App = () => {
  const classes = useStyles();
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item className={classes.body}>
        <Switch>
          <Route exact path={URL.HOME}>
            <IndividualList />
          </Route>
          <Route exact path={URL.INDIVIDUALS}>
            <IndividualList />
          </Route>
          <Route path={`${URL.INDIVIDUALS}/add`}>
            <AddIndividual />
          </Route>
          <Route path={`${URL.INDIVIDUALS}/:individualID`}>
            <IndividualDetail />
          </Route>
          <Route exact path={`${URL.PULSE_OXIMETRY}/:individualID`}>
            <AddOximeter />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  ) : (
    <AmplifyAuthenticator
      usernameAlias="email"
      className={classes.amplifyAuthenticator}
    >
      <AmplifySignUp
        usernameAlias="email"
        slot="sign-up"
        formFields={[{ type: "email" }, { type: "password" }]}
      />
    </AmplifyAuthenticator>
  );
};

export default App;