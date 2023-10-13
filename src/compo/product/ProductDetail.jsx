import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Reviews from './Reviews';
import {getProductById} from "./../../firebase/productDb"

export default function ProductDetail() {
  const [product, setProducts] = useState();

  const idd = useParams();
  const id = idd.id;
  useEffect(() => {
    getProductById(idd).then((res) => { setProducts(res) }).catch((er) => console.log(er))
  });

  const buyNow = () => {
    axios.post('http://localhost:4242/single-product-checkout', { product, id }, {
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    })
      .then(response => {
        window.location.href = response.data.sessionUrl
      })
      .catch(error => {console.error('Error:', error);});
  }
  return (
    <div className="container mx-auto p-4">
      {product ?
        (<>
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

          {/* reviews */}
          <Reviews title={product.title.stringValue} />
        </>
        ) : (
          <>
            <div class="w-full">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          </>
        )}
    </div>
  )
}
