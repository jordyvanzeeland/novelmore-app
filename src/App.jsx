import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={localStorage.getItem('token') && localStorage.getItem('token') !== '' ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;