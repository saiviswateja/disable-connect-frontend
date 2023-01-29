import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex justify-center items-center bg-black w-full h-[832px] overflow-hidden text-center text-base text-white font-poppins">
      <div className="mt-[12%] flex flex-col items-center z-10">
        <h1 className="text-[60px] font-bold">LiftToFit</h1>
        <p className="mt-16 text-3xl font-normal italic">
          Fitness is not a destination. It’s a way of life.
        </p>
        <p className="mt-2 text-3xl font-normal italic">
          Life has its ups and downs. We call them squats.
        </p>
        <Link
          className="mt-16 p-3 w-6/12 text-base font-bold text-center active:bg-gray-200 rounded-lg bg-white text-black duration-50 ease-in-out"
          to="/signup"
        >
          Get Started
        </Link>
        <span className="mt-3 text-md font-normal">
          Already have account?
          <Link
            to="login"
            className="ml-2 italic underline text-md font-semibold"
          >
            Sign in
          </Link>
        </span>
      </div>
      <img
        className="absolute top-[27px] left-[0px] w-[507px] h-[758px] object-cover"
        alt=""
        src="../pexelsanushgorak1431282removebgpreview@2x.png"
      />
      <img
        className="absolute top-[257px] left-[616px] w-[724px] h-[493px] object-cover"
        alt=""
        src="../pexelswangmotret7261835removebgpreview@2x.png"
      />
      <div className="absolute top-[466px] left-[30px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[360px] h-[366px]" />
      <div className="absolute top-[446px] left-[1001px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[360px] h-[324px]" />
    </div>
  );
};

export default Home;
