import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-5 mt-5">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="d-flex flex-column">
            <p className="fs-5 fw-bold mb-3">Location</p>
            <p className="fs-6 mb-2">Ikra Villa, Monir Chemical Road</p>
            <p className="fs-6 mb-2">Opposite of DUET Campus</p>
            <p className="fs-6 mb-2">Gazipur Sadar, Gazipur</p>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="d-flex flex-column">
            <p className="fs-5 fw-bold mb-3">Contact Us</p>
            <a
              href="mailto:info@kitchensecret.com"
              className="fs-6 text-light mb-2"
            >
              <FaMailBulk /> info@kitchensecret.com
            </a>
            <a href="tel:+1-123-456-7890" className="fs-6 text-light mb-2">
              <FaPhoneAlt /> +880-1946280853
            </a>
            <a href="tel:+1-123-456-7890" className="fs-6 text-light">
              <FaPhoneAlt /> +880-1819831933
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-end">
              <a href="https://twitter.com" className="me-3 text-light">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="me-3 text-light">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" className="me-3 text-light">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaInstagram />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaTelegram />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaPinterest />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaSnapchat />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaReddit />
              </a>
              <a href="https://instagram.com" className="text-light">
                <FaTiktok />
              </a>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <p className="fs-6 mb-0">
                © 2023 Kitchen Secret. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
