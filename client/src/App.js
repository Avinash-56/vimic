import React, { Fragment } from "react";
import Navbar from "./componets/layout/Navbar";
import Landing from "./componets/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./componets/auth/Login";
import Register from "./componets/auth/Register";
import { Provider } from "react-redux";
import store from "./store.js";
import Alert from "./componets/layout/Alert";

const App = () => (
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
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
