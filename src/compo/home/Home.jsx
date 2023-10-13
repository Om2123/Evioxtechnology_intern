import React, { useEffect } from "react";
import Product from "../Product";
import { getProducts } from "../../firebase/backUpDb";
import HomePageCard from "./HomePageCard";

function Home() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    try {
      getProducts().then((res) => setProducts(res))

    } catch (error) {

    }
  }, []);

  const renderLargeProducts = () => {
    return products
      .slice(0, 2)
      .map((product) => (
        <Product
          key={product.$id}
          id={product.$id}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating}
          largeImage={true}
        />
      ));
  };


  return (
    <div className="home" id="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://amazon-clone-2-0-five.vercel.app/_next/image?url=%2Fbanner2.jpg&w=1920&q=100"
          alt="Amazon Banner"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-stone-200 max-sm:mt-40">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"https://mazon-clone.netlify.app/images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"https://mazon-clone.netlify.app/images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"https://mazon-clone.netlify.app/images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"https://mazon-clone.netlify.app/images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"https://mazon-clone.netlify.app/images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={"https://mazon-clone.netlify.app/images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"https://mazon-clone.netlify.app/images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"https://mazon-clone.netlify.app/images/home_grid_8.jpg"}
            link={"Learn more"}
          />
        </div>

        <img
          src="https://links.papareact.com/dyz"
          alt=""
          className="md:col-span-full  max-sm:hidden"
        />

        <div className="home__row bg-stone-200">
          {renderLargeProducts()}
        </div>


      </div>
    </div>
  );
}

export default Home;
