import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 text-white-400 bg-000215 body-font">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium text-white mb-4 md:mb-0 mr-50">
          <span className="ml-3 text-2xl">SoulHouse</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 text-white font-bold text-xl hover:text-gray-600">Home</a>
          <a href="/songs" className="mr-20 text-white font-bold text-xl hover:text-gray-600">Songs</a>
          <a href="/playlist" className="mr-20 text-white font-bold text-xl hover:text-gray-600">Playlist</a>
        </nav>
        <a href="/signup" className="mr-5 text-white font-bold text-xl hover:text-gray-600">Sign Up</a>
        <Link to="/login">
          <a href="/" className="mr-5 text-white font-bold text-xl hover:text-gray-600">Login</a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;


