import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark mt-5 py-3 py-md-5">
      <div className="container px-md-5 px-lg-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="fs-4 fw-light text-light mb-0 mb-md-0">
          Copyright © 2023 By Mahmudul Hasan Bhuia.
        </p>
        <div className="d-flex flex-wrap justify-content-between">
          <a href="https://twitter.com" className="me-3 mb-3 mb-md-0">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="me-3 mb-3 mb-md-0">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" className="me-3 mb-3 mb-md-0">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="me-3 mb-3 mb-md-0">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
