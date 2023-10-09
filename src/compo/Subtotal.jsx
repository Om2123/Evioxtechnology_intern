import React from "react";
import "../styles/Subtotal.css";
import { useStateValue } from "../States/StateProvider";
import axios from "axios";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const sumOfBasket = basket.reduce((sum, product) => parseInt(sum) + parseInt(product.price), 0);
  const handleCheckout = () => {
    axios.post('http://localhost:4242/create-checkout-session', { basket, sumOfBasket }, {
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    })
      .then(response => {
        // Handle the response here
        window.location.href = response.data.sessionUrl;
        // You can also perform any necessary actions based on the response here
        // For example, if you want to redirect:
        // window.location.href = response.data.someUrl;
      })
      .catch(error => {
        // Handle any errors that occurred during the request.
        console.error('Error:', error);
      });
  }
  return (
    <div className="flex flex-col items-center py-4 border border-gray-300 rounded-md">
      <h4 className="text-xl mb-4">
        Subtotal {basket.length} item: {sumOfBasket} rs
      </h4>

      {basket.length !== 0 ? (
        <button
          onClick={handleCheckout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-lg border border-blue-600 transition duration-300 ease-in-out"
        >
          Proceed to Checkout
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-300 text-gray-500 cursor-not-allowed font-bold py-2 px-4 rounded-md text-lg border border-gray-300"
        >
          Proceed to Checkout
        </button>
      )}
    </div>


  );
}


export default Subtotal;
const styles = {
  enabledButton: {
    backgroundColor: '#f0c14b',
    color: '#111',
    cursor: 'pointer',
  },
  disabledButton: {
    backgroundColor: '#ffffff',
    cursor: 'not-allowed',
  },
};