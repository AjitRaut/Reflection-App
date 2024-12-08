import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between fixed top-0 left-0 w-full z-10">
      <h1 className="text-xl font-bold">
        <Link to={"/"}>
        Feedback System
        </Link>
       </h1>
      <nav>
        <Link to="/dashboard" className="mx-2">
          Dashboard
        </Link>
        <Link to="/login" className="mx-2">
          Login
        </Link>
        <Link to="/register" className="mx-2">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
