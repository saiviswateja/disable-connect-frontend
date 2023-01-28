import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    var fname=e.target[0].value;
    var lname=e.target[1].value;
    var mobile=e.target[2].value;
    var emergency=e.target[3].value;
    var age=e.target[4].value;
    var email=e.target[5].value;
    var typeOfDis=e.target[6].value;
    var pass1=e.target[7].value;
    var pass2=e.target[8].value;

    if(pass1!==pass2){
      alert("password does not match");
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signUp`,
        user
      );

      if (data.success === true) {
        Cookies.set("token", data.token, {
          expires: 20,
          path: "/",
        });
        navigate("/todo");
      }
    } catch (error) {
      error.response.data?.validMessage &&
        alert(error.response.data?.validMessage);
      console.log("error while signup user", error.response.data.message);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-orange-100">
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:w-fit flex flex-col gap-4 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-extrabold text-center">SignUp</h1>
        <div className="flex gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        </div>
        <div className="flex gap-4">
        <input
          type="text"
          placeholder="Mobile Number"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Emergency Contact"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        </div>
        <input
          type="number"
          min='1'
          max='100'
          placeholder="Age"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <select>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
        </select>
        <div className="flex gap-4">
        <input
          type="password"
          placeholder="Password"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 text-base rounded-lg border border-gray-300"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        </div>
        <button className="p-3 text-base font-bold active:bg-orange-500 rounded-lg bg-orange-400 text-white duration-50 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
