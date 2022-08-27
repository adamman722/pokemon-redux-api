import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SlickAutoPlay from "./components/Slick Auto Play/SlickAutoPlay";
import TrainerDetails from "./components/Trainer details/TrainerDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<SlickAutoPlay />} />
          <Route path=":trainerId" element={<TrainerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
