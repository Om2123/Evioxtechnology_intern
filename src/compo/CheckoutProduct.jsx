import React from "react";
import "../styles/AddButton.css";
import "../styles/CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../States/feat/cart/basketSlice";
function CheckoutProduct({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const removeFromBaskets = () => {
    // romove item from basket
    dispatch(removeFromBasket({id:id}))

  };
  return (
    <div className="checkoutProduct" style={{ margin: '15px' }}>
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info" >
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          
            <p>🌟</p>
        </div>
        <button 
        onClick={removeFromBaskets} 
        className="add-to-cart-button">
          <span>Remove From Basket</span>
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
