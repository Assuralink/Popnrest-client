import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import loginReducer from "./reducers/loginReducer";
import cartReducer from "./reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  loginReducer,
  cartReducer,
});

const store = createStore(rootReducer);
console.log("STORE ::");
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
