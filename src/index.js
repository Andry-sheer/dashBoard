import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterApp from "./router";
import { Provider } from "react-redux";
import store from "./modules/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </React.StrictMode>
);
