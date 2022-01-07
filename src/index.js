import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import store from "./store/";

import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
