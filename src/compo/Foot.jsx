import React from "react";
import "../styles/Footer.css";

const Foot = () => {
  return (
    <div>
      <footer>
        <div className="top text-center">
          <a
            href="#home"
           >
            Back to top
          </a>
        </div>

        <div className="middle">
          <div className="center">
            <ul>
              <li>
                <h3>Get to Know Us</h3>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">About Amazon Eccomerce</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Make Money with Us</h3>
              </li>
              <li>
                <a href="#">Sell on Amazon</a>
              </li>
              <li>
                <a href="#">Sell Your Services on Amazon</a>
              </li>
              <li>
                <a href="#">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="#">Sell Your Apps on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#">Become an Amazon Vendor</a>
              </li>
              <li>
                <a href="#">Sell Your Subscription on Amazon</a>
              </li>
              <li>
                <a href="#">› See all</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Amazon Payment Products</h3>
              </li>
              <li>
                <a href="#">Amazon Rewards Visa Signature Cards</a>
              </li>
              <li>
                <a href="#">Amazon.com Store Card</a>
              </li>
              <li>
                <a href="#">Amazon.com Corporate Credit Line</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Let Us Help You</h3>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates &amp; Policies</a>
              </li>
              <li>
                <a href="#">Amazon Prime</a>
              </li>
              <li>
                <a href="#">Returns &amp; Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#">Amazon Assistant</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          <ul className="copy text-center">
            <li>
              <a href="#" className="logo"></a>
            </li>
            <li>
              <a href="#" className="select">
                <i className="fa fa-globe" aria-hidden="true"></i> English
              </a>
            </li>
            <li>
              <a href="#" className="select">
                <i className="flag-icon-us"></i>United States
              </a>
            </li>
          </ul>
        </div>

        {/*  */}
      </footer>
    </div>
  );
};

export default Foot;
