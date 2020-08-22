import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/Auth";
import AuthRoute from './util/AuthRoute'

import MenuBar from "./components/MenuBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SinglePost from './components/SinglePost'

function App() {
  return (
    <Container>
      <AuthProvider>
        <Router>
          <MenuBar />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <AuthRoute
              exact
              path="/login"
              component={Login}
            />
            <AuthRoute
              exact
              path="/register"
              component={Register}
            />
            <Route exact path='/posts/:postId' render={props => <SinglePost {...props}/>}/>
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  );
}

export default App;
