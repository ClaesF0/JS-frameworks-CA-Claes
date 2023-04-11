import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 text-center text-xs p-3 bottom-0 w-full">
        <Link className="text-blue-400" to="/contact">
          Contact page
        </Link>
        <p>
          &copy; 2023 - {new Date().getFullYear()}{" "}
          <Link to="/" className="text-blue-400">
            Claes
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
