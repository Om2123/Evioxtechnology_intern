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
import ProductDetail from "./compo/product/ProductDetail";
import { store } from './States/store'
import { Provider } from 'react-redux'

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
    <BrowserRouter >
      <Provider store={store}>
        <div className="app">
          <Header />
          <Routes>
            {/* Home Page Route */}
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/product/:id" Component={ProductDetail} />
            <Route path="/checkout" Component={HomePage}></Route>
            <Route path="/" Component={Home}></Route>
            <Route path="/*" Component={Notfound}></Route>
            <Route path="/orders" Component={Orders}></Route>
          </Routes>
          <Foot />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
