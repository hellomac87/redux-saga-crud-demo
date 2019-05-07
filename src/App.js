import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import TodoList from "./containers/todoList";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={TodoList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
