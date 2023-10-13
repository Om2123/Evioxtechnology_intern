import React from "react";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../States/feat/cart/basketSlice";

function CheckoutProduct({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const removeFromBaskets = () => { dispatch(removeFromBasket({ id: id })) };
  return (
    <div className="block py-4 sm:grid sm:grid-cols-5 my-16 sm:my-3">
    <div className="text-center sm:text-left">
       
      <img src={image} alt="" />
    </div>

    {/* Middle */}
    <div className="col-span-3 mx-5 mb-4 sm:mb-0">
      <p className="my-3">{title}</p>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <>*</>
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-3">description</p>
      {/* {quantity} × <Currency quantity={price * 71} currency="INR" /> ={" "} */}
      <span className="font-bold">
        {/* <Currency quantity={total * 71} currency="INR" />
         */}
         {price} Rs
      </span>
      
    </div>

    {/* Buttons on the right of the products */}
    <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <div className="flex justify-between xs:justify-start">
        <button className="button sm:p-1" onClick={removeFromBaskets}>
          {/* <MinusSmIcon className="h-5 text-black" /> */}
        </button>
        <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
          Quantity: <span className="font-bold">1</span>
        </div>
        <button className="button sm:p-1" >
          {/* <PlusIcon className="h-5 text-black" /> */}
        </button>
      </div>
      <button className="button" onClick={removeFromBaskets}>
        Remove from Basket
      </button>
    </div>
  </div>
  );
}

export default CheckoutProduct;
