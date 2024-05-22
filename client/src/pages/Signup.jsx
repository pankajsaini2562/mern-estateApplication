import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("form data submitted:", data);
      if (data.success === false) {
        setLoading(false);
        setError(error.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      console.log("Error submitting form:", error);
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="font-medium text-center text-3xl">Sign Up</div>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-4 rounded-lg mt-3 "
      >
        <input
          className="border border-black p-2 rounded-lg  "
          type="text"
          id="username"
          placeholder="username"
          onChange={handleOnChange}
        />
        <input
          className="border border-black rounded-lg  p-2"
          type="text"
          id="email"
          placeholder="email"
          onChange={handleOnChange}
        />
        <input
          className="border border-black  rounded-lg p-2"
          type="password"
          id="password"
          placeholder="password"
          onChange={handleOnChange}
        />
        <button
          disabled={loading}
          className="text-black border p-2 rounded-lg border-black bg-slate-600 "
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <span className="flex gap-3 my-4">
        Have an account?
        <Link
          className="text-blue-800
        font-bold 
        "
          to={"/sign-in"}
        >
          Sign in
        </Link>
      </span>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
