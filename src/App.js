import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Invoice from "./components/Invoice";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Invoice} />
        </Router>
      </Provider>
    );
  }
}

export default App;
