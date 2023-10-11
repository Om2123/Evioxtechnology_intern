import React from "react";
import "../styles/AddButton.css";
import "../styles/Product.css";
import { useStateValue } from "../States/StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    //dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
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

      <button className="add-to-cart-button" onClick={addToBasket}>
        <span>Add to Cart</span>
      </button>


    </div>
  );
}

export default Product;
