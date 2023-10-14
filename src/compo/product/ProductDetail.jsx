import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews';
import { databases } from '../../firebase/backUpDb';
import { singleProductCheckout } from '../../payment/paymentFun';
import { useDispatch } from 'react-redux';
import { addToBasket } from "./../../States/feat/cart/basketSlice";

export default function ProductDetail() {
  const [product, setProducts] = useState();
  const dispatch = useDispatch()

  const idd = useParams();
  const id = idd.id;
  useEffect(() => {
    databases.getDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_COLLECTIONS_ID, id)
      .then((res) => { setProducts(res) })
      .catch((er) => console.log(er))
  });
  
  const buyNow = () => {
    singleProductCheckout(product)
      .then((res) => {
        // const urlMatch = res.match(/https:\/\/[^"]+/);
        console.log(res);
        if (res) {
          window.location.href = res.replace(/"/g, '');
        }
        alert("payment failed")
      })
      .catch((res) => console.log(res))
  }
  const addtoCart = () => {
    dispatch(addToBasket({
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      rating: product.rating,
    }))
  }
  return (
    <div className="container mx-auto p-4">
      {product ?
        (<>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full h-auto"
              />
            </div>
            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">
                  ★ {product.rating}
                </span>
                <span className="text-gray-600 text-sm ml-2">
                  (1234 Reviews)
                </span>
              </div>
              <p className="text-gray-700 text-lg mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores incidunt sint harum molestias, libero qui quis debitis, porro eius vero at assumenda.</p>
              <p className="text-2xl font-bold text-blue-600">Rs {product.price}</p>
              <div className="mt-4">
                <button
                  className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full mr-4 hover:bg-yellow-600 transition duration-300"
                  onClick={addtoCart}
                >
                  Add to Cart
                </button>
                <button
                  onClick={buyNow}
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* reviews */}
          <Reviews title={product.title} />
        </>
        ) : (
          <>
            <div className="w-full ">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div role="status">

              </div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          </>
        )}
    </div>
  )
}
