import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getProducts } from "../firebase/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../States/feat/cart/basketSlice";

function Header() {
  const basket = useSelector((state) => state.counter.basket)
  const dispatch = useDispatch();

  const [querySearched, setQuery] = useState("");
  const [showProductList, setShowProductList] = useState(false);
  const [products, setProducts] = React.useState([]);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    getProducts().then((products) => setProducts(products.docChanges));
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
  const handleSearch = async () => {
    setProducts(filteredData)
    setShowProductList(true);
  };
  const addToBaskets =(prod , id)=>{
    dispatch(addToBasket({
      id:id,
      title:prod.title.stringValue,
      image:prod.image.stringValue,
      price:prod.price.integerValue,
      rating:prod.rating.integerValue,
    }))
  }
  const logout = async () => { await signOut(auth); }
  return (
    <div className="header" id="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        ></img>
      </Link>

      <div className="header__option">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">
          <FontAwesomeIcon icon={faLocationDot} bounce size="xs" />
          Select your address
        </span>
      </div>
      <div className="header__search">
        <input
          className="header__searchInput"
          id="searchBar"
          placeholder="Search Amazon.in"
          type="text"
          value={querySearched}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <div
          id="searchIcon"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

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
                      onClick={()=>addToBaskets(product.doc.data.value.mapValue.fields,product.doc.key.path.segments[6])}
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

      <div className="header_nav">

        {
          !user
            ?
            <Link to="/login" className="header__link ">
              <div className="header__option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign In</span>
              </div>
            </Link>
            :
            <div className="header__link" onClick={logout}>
              <div className="header__option">
                <span className="header__optionLineOne">Hello {user?.email} </span>
                <span className="header__optionLineTwo">Log out</span>
              </div>
            </div>
        }


        <Link to={'/orders'} className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <FontAwesomeIcon id="cartIcon" icon={faCartShopping} size="lg" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
