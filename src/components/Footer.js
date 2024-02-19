// Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-5 text-center">
      <div className="flex justify-center items-center">
        <img
          src="https://www.airbnb.com.br/favicon.ico"
          alt="ITIbnb Logo"
          className="w-6 h-6 mr-2"
        />
        <p className="text-sm">© 2024 ITIbnb, Inc. All rights reserved.</p>
      </div>
      <div className="mt-4">
        <Link to="/faq" className="mr-4 text-gray-400 hover:text-white">
          FAQ
        </Link>
        <Link to="/policy" className="mr-4 text-gray-400 hover:text-white">
          Policy
        </Link>
        <Link to="/404" className="mr-4 text-gray-400 hover:text-white">
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
