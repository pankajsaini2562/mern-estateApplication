import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-400  shadow-sm">
      <div className="flex justify-between items-center p-2 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="flex font-bold text-sm sm:text-2xl flex-wrap">
            <div className="tex-blue-500 ">Saini</div>
            <div className="text-red-700 ">Estate</div>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            className="bg-transparent w-12 sm:w-48  focus:outline-none"
            placeholder="search here"
          ></input>
          <FaSearch className="bg-slate- 300" />
        </form>
        <ul className="flex gap-3 font-medium">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline">Signin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
