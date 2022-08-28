import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import SlickAutoPlay from "./components/Slick Auto Play/SlickAutoPlay";
import TrainerDetails from "./components/Trainer details/TrainerDetails";
import Login from "./components/login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace={true} />} />
        <Route path="home" element={<App />}>
          <Route path="/home" element={<SlickAutoPlay />} />
          <Route path="/home/:trainerId" element={<TrainerDetails />} />
        </Route>
        <Route path="/login" element={<App />}>
          <Route path="/login" element={<Login />} />
        </Route>
        {/* TODO: need to create a actual account page just using TrainerDetails as a test */}
        <Route path="/account" element={<App />}>
          <Route path="/account/:trainerId" element={<TrainerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
