import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import {
  Home,
  Signup,
  Login,
  Gender,
  Height_weight,
  Dashboard,
} from "./components/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/height_weight" element={<Height_weight />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
