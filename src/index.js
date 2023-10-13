import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
 import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

  import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
library.add(faShoppingBasket);

root.render(
     <App />
 );
