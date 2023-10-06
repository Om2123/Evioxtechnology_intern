/**
 ************* Front-End Libraries ******************
 * I'm using axios for making API Requests.
 * moment is a Library which will allows me working with time and date.
 * I will use react-file-base64 to convert images.
 * redux-thunk is used for asynchronous actions using redux.
 */
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const app = (
  <SnackbarProvider preventDuplicate maxSnack={3}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>
);

ReactDOM.render(app, document.getElementById("root"));
