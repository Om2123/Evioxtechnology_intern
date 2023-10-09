import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./compo/Login";
import Header from "./compo/Header";
import React from "react";
import Checkout from "./compo/Checkout";
import Home from "./compo/Home";
import Foot from "./compo/Foot";
import Subtotal from "./compo/Subtotal";
import Notfound from "./compo/NotFound/Notfound";
import Orders from "./compo/Orders";
import Register from "./compo/Register";

const HomePage = () => {
  return (
    <React.Fragment>
      <Checkout />
      <Subtotal />
    </React.Fragment>
  );
};



function App() {
  return (
    <BrowserRouter basename="/Amazon-Clone">
      <div className="app">
        <Header />
        <Routes>
          {/* Home Page Route */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/checkout" Component={HomePage}></Route>
          <Route path="/" Component={Home}></Route>
          <Route path="/*" Component={Notfound}></Route>
          <Route path="/orders" Component={Orders}></Route>
        </Routes>
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
