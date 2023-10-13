import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../States/feat/cart/basketSlice";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch()

  const addToBaskets = () => {
    //dispatch item to data layer

    dispatch(addToBasket({
      id: id,
      image: image,
      title: title,
      price: price,
      rating: rating,
    }))

  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 growing-hover">
      <Link to={`/product/${id}`}>

        <img src={image} className=" w-72 object-contain" />
        <h4 className="my-3">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <>*</>
            ))}
        </div>
      </Link>

      {/* <p className="text-xs my-2 line-clamp-2">{description}</p> */}

      <div className="mb-5">
        {/* <Currency quantity={price * 71} currency="INR" />
         */}
        {price} Rs
      </div>


      <button className="mt-auto button" onClick={addToBaskets}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
