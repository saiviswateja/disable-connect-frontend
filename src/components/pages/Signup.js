import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// package to store cookie in browser
import Cookies from "js-cookie";
const Signup = () => {
  // navigator
  const navigate = useNavigate();

  // states
  const [user, setUser] = useState({});

  // handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signUp`,
        user
      );

      console.log("data is ", data);
      if (data.success === true) {
        Cookies.set("token", data.token, {
          expires: 20,
          path: "/",
        });
        navigate("/login");
      }
    } catch (error) {
      error.response.data?.validMessage &&
        alert(error.response.data?.validMessage);
      console.log("error while signup user", error.response.data.message);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:w-3/12 flex flex-col gap-4 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-extrabold text-center">SignUp</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="p-3 text-base font-bold active:bg-orange-500 rounded-lg bg-orange-400 text-white duration-50 ease-in-out">
          Submit
        </button>
        <hr />
        <div className="text-center">
          <h3 className="text-sm text-gray-400">Already have a account</h3>
          <h3 className="text-base text-gray-600">let's login</h3>
        </div>
        <Link
          className="p-3 text-base font-bold text-center active:bg-orange-500 rounded-lg bg-orange-400 text-white duration-50 ease-in-out"
          to="/login"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
