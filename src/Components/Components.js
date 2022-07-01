import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";

const Components = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" exact component={AuthModule} />
        <Route path="/register" component={AuthRegister} />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};

export default Components;
