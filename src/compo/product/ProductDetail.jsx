import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import {  getProductById } from '../../firebase/firebase';
import axios from 'axios';

export default function ProductDetail() {
  const [product, setProducts] = useState();
  const idd = useParams();
  const id = idd.id;
  useEffect(  () => {
    getProductById(idd).then((res)=>{setProducts(res)}).catch((er)=>console.log(er))
  });

  const buyNow = () => {
    axios.post('http://localhost:4242/single-product-checkout', { product ,id}, {
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    })
      .then(response => {
        window.location.href = response.data.sessionUrl
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (

    // <div className="md:flex">
    //   <div className='basis-1/2'>
    //     <img src={product?.image.stringValue} alt="" />
    //   </div>
    //   <div className='basis-1/2'>
    //     <div>
    //       <h1>{product?.title.stringValue}</h1>
    //       <h3>{product?.rating.integerValue}</h3>
    //     </div>
    //     <div>{product?.price.integerValue}</div>
    //     <div className="flex">
    //       <button>add to cart</button>
    //       <button>Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto p-4">
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image.stringValue}
              alt={product.title.stringValue}
              className="max-w-full h-auto"
            />
          </div>
          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-2">{product.title.stringValue}</h2>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-lg">
                ★ {product.rating.integerValue}
              </span>
              <span className="text-gray-600 text-sm ml-2">
                (1234 Reviews)
              </span>
            </div>
            <p className="text-gray-700 text-lg mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores incidunt sint harum molestias, libero qui quis debitis, porro eius vero at assumenda.</p>
            <p className="text-2xl font-bold text-blue-600">Rs {product.price.integerValue}</p>
            <div className="mt-4">
              <button
                className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full mr-4 hover:bg-yellow-600 transition duration-300"
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
