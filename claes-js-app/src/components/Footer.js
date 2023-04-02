import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
        <Link to="/contact">Contact page</Link>
        <p>
          &copy; {new Date().getFullYear()}{" "}
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
