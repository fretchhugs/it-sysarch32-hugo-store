import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './component/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" Component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
