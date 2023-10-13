import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../States/feat/cart/basketSlice";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch()

  const addToBaskets = () => {
    //dispatch item to data layer
     
    dispatch(addToBasket({
      id:id,
      image:image,
      title:title,
      price:price,
      rating:rating,
    }))
  };
  return (
    <div className="product" >
      <div to={`/product/${id}`} className="product__info">
        <Link  to={`/product/${id}`} >{title}</Link>
        <Link className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </Link>
        <div className="product__rating">
          <p >🌟🌟🌟</p>
        </div>
      </div>
      <img src={image} alt="canva" />

      <button className="add-to-cart-button"
       onClick={addToBaskets}
       >
        <span>Add to Cart</span>
      </button>


    </div>
  );
}

export default Product;
