import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="font-medium text-center text-3xl">Sign Up</div>
      <form className="flex flex-col gap-4 rounded-lg mt-3 ">
        <input
          className="border border-black p-2 rounded-lg  "
          type="text"
          id="username"
          placeholder="username"
        />
        <input
          className="border border-black rounded-lg  p-2"
          type="text"
          id="email"
          placeholder="email"
        />
        <input
          className="border border-black  rounded-lg p-2"
          type="text"
          id="password"
          placeholder="password"
        />
        <button className="text-black border p-2 rounded-lg border-black bg-slate-600 ">
          Sign Up
        </button>
      </form>
      <span className="flex gap-3 my-4">
        Have an account?
        <Link
          className="text-zinc-950
        font-bold 
        "
          to={"/sign-in"}
        >
          Sign in
        </Link>
      </span>
    </div>
  );
}
