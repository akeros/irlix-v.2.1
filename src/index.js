import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./normalize.scss";
import {App} from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
