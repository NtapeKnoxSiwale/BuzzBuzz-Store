import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer className="footer app__blackbg">
        <div className="container">
          <div className="row">
            <div className="footer__col">
              <h4>swaystore</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">contact details</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">terms of service</a>
                </li>
                <li>
                  <a href="#">terms & conditions</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>follow us</h4>
              <div className="social__links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaTiktok />
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4>news letter</h4>
              <h5>
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </h5>
              <input
                type="email"
                placeholder="Enter your email address"></input>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
