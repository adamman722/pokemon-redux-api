import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import SlickAutoPlay from "./components/Slick Auto Play/SlickAutoPlay";
import TrainerDetails from "./components/Trainer details/TrainerDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<App />}>
          <Route path="/home" element={<SlickAutoPlay />} />
          <Route path="/home/:trainerId" element={<TrainerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
