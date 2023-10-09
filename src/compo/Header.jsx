import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../States/StateProvider";
import { getProducts } from "../firebase/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function Header() {
  const [{ basket }] = useStateValue();
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
  }, [])

  const filteredData = products.filter((item) => {
    const title = item.doc.data.value.mapValue.fields.title.stringValue; // Access the title field
    if (title.toLowerCase().includes(querySearched.toLowerCase())) return item;
    return null;
  });
  const handleSearch = async () => {
    setProducts(filteredData)
    setShowProductList(true);
  };
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

      {showProductList &&  (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold m-4">Searched List</h2>
            <ul className="overflow-scroll max-h-72">
              {products.map((product) => (
                
                <li className="mb-2 border flex  p-2" key={product.doc.key.path.segments[6]}>
                  <img src={product.doc.data.value.mapValue.fields.image.stringValue} className="w-10 m-2 h-10" alt="" />
                  <div className="font-semibold text-center">{product.doc.data.value.mapValue.fields.title.stringValue}</div>
                  <div className="text-white text-center font-semibold text-xl m-2 bg-red-400  rounded">{product.doc.data.value.mapValue.fields.price.integerValue}</div>
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
      ) }

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
