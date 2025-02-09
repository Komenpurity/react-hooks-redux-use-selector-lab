import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import usersReducer from "./features/users/usersSlice";

// add imports and code

const store = createStore(usersReducer); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById("root")
);
