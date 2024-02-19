// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-xl text-red-500">Logo</h1>
          <nav>
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link to="/" className="text-gray-700 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-700 hover:text-black">
                  Listings
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/host" className="text-gray-700 hover:text-black">
            Become a host
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-black">
            Login
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-black">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
