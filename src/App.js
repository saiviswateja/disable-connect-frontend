import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import { Home, Signup, Login } from "./components/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
