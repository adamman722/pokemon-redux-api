import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/navbar/Navbar";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
