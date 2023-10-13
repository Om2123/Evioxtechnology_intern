import React from 'react'

export default function Head() {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex flex-grow sm:flex-grow-0">
          <Link to="/">

            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className='objectfit-contain cursor-pointer w-[150px] h-[40px]' />
          </Link>
        </div>
        {/* searh */}
        <div className="hidden sm:flex bg-yellow-400  items-center h-10 rounded-md flex-grow hover:bg-yellow-500 cursor-pointer">
          <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none px-4" />
          {/* <SearchIcon className="h-12 p-4" /> */}
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

          {
            !user
              ?
              <Link to={"/login"} className="link cursor-pointer" >
                <p>Hello Guest</p>
                <p className="font-extrabold md:text-sm">Sign In</p>
              </Link>
              :
              <div className="link cursor-pointer" >
                <Link to={"/orders"} >Hello {user?.email} </ Link>
                <p className="font-extrabold md:text-sm" onClick={logout}>Log out</p>
              </div>
          }
          {showProductList && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold m-4">Searched List</h2>
                <ul className="overflow-scroll max-h-72">
                  {products.map((product) =>
                  (

                    <li className="mb-2 border md:flex  p-2" key={product.doc.key.path.segments[6]}>
                      <img src={product.doc.data.value.mapValue.fields.image.stringValue} className="w-12 m-2 h-12" alt="" />
                      <Link to={`/product/${product.doc.key.path.segments[6]}`} className="text-stone-500 hover:underline">
                        <div className="font-semibold text-center">{product.doc.data.value.mapValue.fields.title.stringValue}</div>
                        <div className="text-black  font-semibold text-md   ">${product.doc.data.value.mapValue.fields.price.integerValue}</div>
                      </Link>
                      <div className="md:ml-5">
                        <button
                          className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full mr-4 hover:bg-yellow-600 transition duration-300"
                          onClick={() => addToBaskets(product.doc.data.value.mapValue.fields, product.doc.key.path.segments[6])}
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => buyNow(product.doc.data.value.mapValue.fields)}
                          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                        >
                          Buy Now
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
                  onClick={() => {
                    setShowProductList(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <Link to={'/orders'} className="link cursor-pointer">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">&amp; Orders</p>
          </Link>

          <Link to="/checkout" className="link cursor-pointer relavtive flex items-center">
            <FontAwesomeIcon id="cartIcon" icon={faCartShopping} size="lg" />
            <span className="absolute cursor-pointer top-0 right-0 md:right-16 top-3 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">{basket?.length}</span>
          </Link>


        </div>
      </div>
      {/* bottom nav */}

    </header>
  )
}
