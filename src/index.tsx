import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/global.style.scss";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/home/Home";
import * as serviceWorkerRegistration from "./app/serviceWorkerRegistration";
import reportWebVitals from "./app/reportWebVitals";
import HttpService from "./app/apiService";

ReactDOM.render(
  <ApolloProvider client={HttpService}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
