import "./App.css";
import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Invoice from "./components/Invoice";
import CreateInvoice from "./components/CreateInvoice";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Invoice} />
          <Route exact path="/createinvoice" component={CreateInvoice} />
        </Router>
      </Provider>
    );
  }
}

export default App;
