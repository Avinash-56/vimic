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
import Profiles from "./componets/profiles/Profiles";
import Profile from "./componets/profile/Profile";
import Posts from "./componets/posts/Posts";
import Post from "./componets/post/Post";

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
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
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
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
