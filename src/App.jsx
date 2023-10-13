import "./App.css";
import React from "react";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// auth
import Login from "./compo/login/Login";
import Register from "./compo/register/Register";
// home page or landing page
import Home from "./compo/home/Home";
import Header from "./compo/home/navbar/Header";
// cart
import Subtotal from "./compo/cart/Subtotal";
import Checkout from "./compo/cart/Checkout";
// 404
import Notfound from "./compo/NotFound/Notfound";
// profile and orders
import Orders from "./compo/ordersAndProfile/Orders";
// indivisual product page
import ProductDetail from "./compo/product/ProductDetail";
// footer and the unimp
import Foot from "./compo/Foot";

import { store } from './States/store'
// adding css
import "./styles/Home.css"
import "./styles/Product.css"
import "./styles/Header.css"
import "./styles/AddButton.css"
import "./styles/Checkout.css"
import "./styles/CheckoutProduct.css"


const cart = () => {
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
            <Route path="/checkout" Component={cart}></Route>
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
