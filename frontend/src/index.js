import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import stateStore from "./store/reducers/state";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { MainProvider } from "./Context";

const store = createStore(stateStore, compose(applyMiddleware(thunk)));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={store}>
    <MainProvider>
      <Router>
        <App />
      </Router>
    </MainProvider>
  </Provider>,
  document.getElementById("root")
);
