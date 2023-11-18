import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl font-medium">Oops! Page not found.</p>
      <p className="text-lg mt-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link to={"/"} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Go back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
