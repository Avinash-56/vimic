import React, { Fragment, useEffect } from "react";
import Navbar from "./componets/layout/Navbar";
import Landing from "./componets/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./componets/auth/Login";
import Register from "./componets/auth/Register";
import { Provider } from "react-redux";
import store from "./store.js";
import Alert from "./componets/layout/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./componets/dashboard/Dashboard";
import PrivateRoute from "./componets/routing/PrivateRoute";
import CreateProfile from "./componets/profile-form/CreateProfile";
import EditProfile from "./componets/profile-form/EditProfile";
import AddExperience from "./componets/profile-form/AddExperience";
import AddEducation from "./componets/profile-form/AddEducation";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
