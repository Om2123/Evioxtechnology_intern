import React, { useEffect } from "react";
import Product from "../Product";
import { getProducts } from "../../firebase/productDb";

function Home() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    // getProducts().then((products) => setProducts(products.docChanges));
      
  }, []);

  const renderLargeProducts = () => {
    return products
      .slice(0, 2)
      .map((product) => (
        <Product
          key={product.doc.key.path.segments[6]}
          id={product.doc.key.path.segments[6]}
          title={product.doc.data.value.mapValue.fields.title.stringValue}
          price={product.doc.data.value.mapValue.fields.price.integerValue}
          image={product.doc.data.value.mapValue.fields.image.stringValue}
          rating={product.doc.data.value.mapValue.fields.rating.integerValue}
          largeImage={true}
        />
      ));
  };
  const renderSmallProducts = () => {
    return products
      .slice(2)
      .map((product) => (
        <Product
          key={product.doc.key.path.segments[6]}
          id={product.doc.key.path.segments[6]}
          title={product.doc.data.value.mapValue.fields.title.stringValue}
          price={product.doc.data.value.mapValue.fields.price.integerValue}
          image={product.doc.data.value.mapValue.fields.image.stringValue}
          rating={product.doc.data.value.mapValue.fields.rating.integerValue}
          largeImage={false}
        />
      ));
  };

  return (
    <div className="home" id="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81qDhAQH-vL._SX3000_.jpg"
          alt="Amazon Banner"
        />

        {/* <div className="home__row">
          {renderLargeProducts()}
        </div>

        <div className="home__row">
          {renderSmallProducts()}
        </div> */}
      </div>
    </div>
  );
}

export default Home;
