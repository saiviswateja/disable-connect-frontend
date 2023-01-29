import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import userContext from "../../context/userContext";

import axios from "axios";
import Cookies from "js-cookie";

const Height_weight = () => {
  // navigator
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  // handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signIn`,
        user
      );

      console.log("data is ", data);
      if (data) {
        // Cookies.set("token", data.token, {
        //   expires: 20,
        //   path: "/",
        // });
        navigate("/");
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
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:w-3/12 flex flex-col gap-4 bg-white rounded-lg shadow-lg"
      >
        <div className="flex justify-between">
          <div className="flex flex-col items-end">
            <h1 className="text-lg font-bold text-orange-400">Select height</h1>
            <input
              type="number"
              placeholder="175"
              className="p-3 pl-6 w-24 text-base font-bold border border-gray-200 bg-white text-black duration-50 ease-in-out"
            />
            <span className="mb-2 ml-2 text-md">cm</span>
          </div>
          <div className="w-10 h-10"></div>
          <div className="flex  flex-col items-end">
            <h1 className="text-lg font-bold text-orange-400">Select height</h1>
            <input
              type="number"
              placeholder="60.3"
              className="p-3 pl-6 w-24 text-base font-bold border border-gray-200 bg-white text-black duration-50 ease-in-out"
            />
            <span className="mb-2 ml-2 text-md">kg</span>
          </div>
        </div>
      </form>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-8 w-2/12 p-3 text-base font-bold active:bg-gray-800  bg-black text-white duration-50 ease-in-out"
      >
        Next
      </button>
    </div>
  );
};

export default Height_weight;
