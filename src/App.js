import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import "./App.css"

import Header from "./components/Header/Header"
import RegistrationForm from "./components/Login/RegistrationForm"
import LoginForm from './components/Login/LoginForm';
import AlertComponent from './components/AlertComponent/AlertComponent'
import MainMenu from './components/MainMenu/MainMenu'
// import PrivateRoute from './utils/PrivateRoute';

function App() {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
            <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            {/* <PrivateRoute path="/Menu">
              <MainMenu/>
            </PrivateRoute> */}
            <Route path="/menu">
                <MainMenu/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
