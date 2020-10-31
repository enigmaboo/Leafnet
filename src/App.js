import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Login from './login/login';
import Register from './register/register';
import Home from './home/home';
import RegDev from './regDev/regDev';
import ConDev from './conDev/conDev';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/regdev" component={RegDev} />
          <Route exact path="/condev" component={ConDev} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
