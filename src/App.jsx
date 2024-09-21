import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Challenges from "./views/Challenges";
import Challenge from "./views/Challenge";
import { checkToken } from "./Functions";
import Habitat from "./views/Habitat";

const App = () => {

  checkToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={localStorage.getItem('token') && localStorage.getItem('token') !== '' ? <Challenges /> : <Login />} />
        <Route path="/challenge/:id" element={<Challenge />} />
        <Route path="/habitat" element={<Habitat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;