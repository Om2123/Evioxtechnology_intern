import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../States/feat/cart/basketSlice";

function Header() {
  const basket = useSelector((state) => state.counter.basket)
  const dispatch = useDispatch();

  const [querySearched, setQuery] = useState("");
  const [showProductList, setShowProductList] = useState(false);
  const [products, setProducts] = React.useState([]);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    // getProducts().then((products) => setProducts(products.docChanges));

    onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });
  })
  const buyNow = (product) => {
    axios.post('http://localhost:4242/single-product-checkout-withoutId', { product }, {
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
  const filteredData = products.filter((item) => {
    const title = item.doc.data.value.mapValue.fields.title.stringValue; // Access the title field
    if (title.toLowerCase().includes(querySearched.toLowerCase())) return item;
    return null;
  });
  const handleSearch = async () => { setProducts(filteredData); setShowProductList(true); };
  const addToBaskets = (prod, id) => {
    dispatch(addToBasket({
      id: id,
      title: prod.title.stringValue,
      image: prod.image.stringValue,
      price: prod.price.integerValue,
      rating: prod.rating.integerValue,
    }))
  }
  const logout = async () => { if(user) await signOut(auth); }
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center max-sm:z-50  bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 mx-4 flex flex-grow sm:flex-grow-0">
          <Link to="/">
            <img src="https://links.papareact.com/f90" alt="" className="cursor-pointer w-[140px] max-sm:w-[5rem]
            max-sm:h-[2rem] h-[40px] objectfit-contain" />
          </Link>
        </div>
        {/* search */}
        <div className="hidden sm:flex bg-yellow-400  items-center h-10 rounded-md flex-grow hover:bg-yellow-500 cursor-pointer">
          <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2.5 text-sm font-medium text-center text-gray-500 bg-stone-400  rounded-l-lg hover:bg-gray-200    dark:bg-white dark:bg-stone-200 dark:focus:ring-gray-700 dark:text-grey-500 " type="button">All
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <input
            value={querySearched}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Amazon"
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink  outline-none px-4" />
          {/* <SearchIcon className="h-12 p-4"/> */}
          <div className="px-3" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        {showProductList && (
          <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-75">
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

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link cursor-pointer"  >
            <Link to={"/login"}>Hello {user ? user.email : "Guest"}</Link>
            <p className="font-extrabold md:text-sm" onClick={()=>logout()}>{user ? "Account List" : " Log out"}</p>
          </div>

          <Link to={"/orders"} className="link cursor-pointer max-sm:hidden">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </Link>
          <Link to={"/checkout"} className="link cursor-pointer relavtive flex items-center"  >
            <span className="absolute cursor-pointer top-0 right-0 md:right-16 top-3 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">{basket.length}</span>
            <FontAwesomeIcon id="cartIcon" icon={faCartShopping} size="2xl" />
          </Link>
        </div>
      </div>
      {/* mobile -searchbar */}
      <form className="lg:hidden md:hidden">
        <div className="flex">

          <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-stone-400  rounded-l-lg hover:bg-gray-200    dark:bg-white dark:bg-stone-200 dark:focus:ring-gray-700 dark:text-grey-500 " type="button">All
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div className="relative w-full">
            <input type="search" className="block p-2.5 w-full z-20 text-sm text-black bg-white     rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required
              value={querySearched}
              onChange={(e) => setQuery(e.target.value)}

            />

            <button type="submit" onClick={handleSearch} className="absolute top-0 right-0 py-2.5 px-4  text-md font-large h-full text-grey-500 bg-amber-400	 rounded-r-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400	 dark:hover:bg-amber-500	 dark:focus:ring-blue-800">
              <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
      {/* bottom nav */}
      <div className="flex space-x-3 items-center bg-amazon_blue-light p-2 text-white text-sm">
        <p className="link flex items-center">
          {/* <MenuIcon className="h-6 mr-1"/>  */}
          All
        </p>
        <p className="link">Prime Videos</p>
        <p className="link">Amazon bussiness</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Customer service</p>
        <p className="link hidden lg:inline-flex">New Realse</p>
        <p className="link hidden lg:inline-flex">Amazon Pay</p>
      </div>
    </header >
  );
}

export default Header;
