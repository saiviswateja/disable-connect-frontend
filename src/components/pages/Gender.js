import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import userContext from "../../context/userContext";

import axios from "axios";
import Cookies from "js-cookie";


const Login = () => {
  // navigator
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  // handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_SERVER_URL}/signIn`,
      //   user
      // );

      // console.log("data is ", data);
      if (true) {
        let user = Cookies.get("user");
        console.log("came here");
        console.log(JSON.parse(user));
        user.gender = e.target.
        navigate("/height_weight");
      }
    } catch (error) {
      console.log("error is here ", error);
      error.response.data?.validMessage &&
        alert(error.response.data?.validMessage);
      console.log("error while signup user", error.response.data.message);
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-white">
      <h1 className="text-3xl font-bold text-orange-400">Choose gender</h1>
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:w-3/12 flex flex-col gap-4 bg-white rounded-lg shadow-lg"
      >
        <button className="p-3 pl-6  text-left text-base font-bold active:bg-orange-600 border border-black bg-white text-black duration-50 ease-in-out">
          👩🏻‍🦰<span className="ml-5">Women</span>
        </button>
        <button className="p-3 pl-6 text-left text-base font-bold active:bg-orange-600 border border-black  bg-white text-black duration-50 ease-in-out">
          👨🏻<span className="ml-5">Men</span>
        </button>
      </form>
      <Link
        className="mt-8 w-2/12 p-3 text-base font-bold active:bg-gray-800  bg-black text-white duration-50 ease-in-out"
        to="/height_weight"
      >
        Next
      </Link>
    </div>
  );
};

export default Login;
