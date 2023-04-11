import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>
        Sorry, the page you are looking for does not exist. You can always go
        back to the{" "}
        <Link to="/" className="text-blue-400 text-xl">
          homepage
        </Link>
      </p>
      <img
        className="mx-auto"
        src="/error-image.png"
        alt="error image of crabby cat"
      />
    </div>
  );
};

export default ErrorPage;
