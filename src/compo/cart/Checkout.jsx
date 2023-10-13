import React from "react";
import CheckoutProduct from "../CheckoutProduct";
import { useSelector } from "react-redux";

function Checkout() {
  const basket = useSelector((state) => state.counter.basket)

  return (
    <div className="lg:flex max-w-screen-2xl mx-auto">
      <div className="flex-grow m-5 shadow-sm md:hidden">
        <img
          className="object-contain"
          src="https://links.papareact.com/ikj"
          alt="amazon Banner"
        />
      </div>
      <div>
        <div className="flex flex-col p-5 space-y-50 m-4 bg-white">
          <h1
            className={`text-3xl ${basket.length > 0 ? 'border-b pb-4' : 'pb-2'
              }`}
          >
            {basket.length === 0
              ? 'Your Amazon Basket is empty.'
              : 'Shopping Basket'}
          </h1>
          {/* 

            <TransitionGroup>
              {groupedItems.map((group, i) => (
                <CSSTransition
                  key={group[0].image}
                  timeout={500}
                  classNames="item"
                >
                  <CheckoutProduct
                    id={group[0].id}
                    title={group[0].title}
                    rating={group[0].rating}
                    price={group[0].price}
                    description={group[0].description}
                    category={group[0].category}
                    image={group[0].image}
                    hasPrime={group[0].hasPrime}
                    quantity={group.length}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

        <CSSTransition
          in={items.length > 0}
          timeout={300}
          classNames="disappear"
          unmountOnExit
        >
          <div className="flex flex-col bg-white p-10 shadow-md">
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{' '}
              <span className="font-bold">
                <Currency quantity={total * 71} currency="INR" />
              </span>
            </h2>

            <button
              role="link"
              onClick={createCheckoutSession}
              disabled={!session}
              className={`button mt-2 ${
                !session &&
                'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300'
              }`}
            >
              {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
            </button>
          </div>
        </CSSTransition>
      </main>
    */}
        </div>
        {/* <h2 className="checkout__title">Your Shopping Basket</h2> */}
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />

        ))}
      </div>
    </div>
  );
}

export default Checkout;
