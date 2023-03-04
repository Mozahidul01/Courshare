import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormAction from "../components/FormAction";
import FormInput from "../components/FormInput";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="section py-16 sm:w-[36rem]">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <Link to="/log-in" className="flex gap-20 items-center">
          <div className="flex items-center justify-center w-7 h-7 rounded-full cursor-pointer transition ease-in-out delay-150 hover:bg-slate-200">
            <FaArrowLeft />
          </div>
          <h1 className="text-2xl font-bold text-center text-teal uppercase">
            Reset Your Password
          </h1>
        </Link>
        <form className="mt-6">
          <FormInput
            required
            type="email"
            labelText="Your Email"
            labelFor="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="text-sm font-medium text-red-500">{error}</p>}

          <FormAction handleSubmit={handleSubmit} text="Submit" />
        </form>
      </div>
    </div>
  );
}
