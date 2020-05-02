import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { DataItemsProvider } from "./contexts/dataItems-context";
import { Auth0Provider } from "./contexts/auth0-context";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";

ReactDOM.render(
  <Auth0Provider>
    <DataItemsProvider>
      <Router>
        <App />
      </Router>
    </DataItemsProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
