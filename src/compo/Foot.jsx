 import React from "react";
 
const Foot = () => {
  return (
    <footer className="py-6 bg-amazon_blue text-gray-300">
      <div className="container mx-auto" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Get to Know Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Careers</li>
              <li className="mb-2">About Amazon E-commerce</li>
              <li className="mb-2">Investor Relations</li>
              <li className="mb-2">Amazon Devices</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Make Money with Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Sell on Amazon</li>
              <li className="mb-2">Sell Your Services on Amazon</li>
              <li className="mb-2">Sell on Amazon Business</li>
              <li className="mb-2">Sell Your Apps on Amazon</li>
              <li className="mb-2">Become an Affiliate</li>
              <li className="mb-2">Advertise Your Products</li>
              <li className="mb-2">Self-Publish with Us</li>
              <li className="mb-2">Become an Amazon Vendor</li>
              <li className="mb-2">Sell Your Subscription on Amazon</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Amazon Payment Products</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Amazon Rewards Visa Signature Cards</li>
              <li className="mb-2">Amazon.com Store Card</li>
              <li className="mb-2">Amazon.com Corporate Credit Line</li>
              <li className="mb-2">Shop with Points</li>
              <li className="mb-2">Credit Card Marketplace</li>
              <li className="mb-2">Reload Your Balance</li>
              <li className="mb-2">Amazon Currency Converter</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Let Us Help You</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Your Account</li>
              <li className="mb-2">Your Orders</li>
              <li className="mb-2">Shipping Rates &amp; Policies</li>
              <li className="mb-2">Amazon Prime</li>
              <li className="mb-2">Returns &amp; Replacements</li>
              <li className="mb-2">Manage Your Content and Devices</li>
              <li className="mb-2">Amazon Assistant</li>
              <li className="mb-2">Help</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-400">
            <div className="logo">Amazon Clone</div>
          </div>
          <div className="text-gray-400">
            <div className="select">
              <i className="fa fa-globe" aria-hidden="true"></i> English
            </div>
            <div className="select">
              <i className="flag-icon-us"></i> United States
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Foot;
