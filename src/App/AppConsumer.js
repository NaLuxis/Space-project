import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home/Home";
import { Store } from "../Pages/Store/Store";
import { Profile } from "../Pages/Store/Profile-Planet/Profile";
import { About } from "../Pages/About/About";

function AppConsumer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/profile/:id" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />{" "}
      {/* ↑ a changer a la fin pour mettre lerreur boundary en place */}
    </Routes>
  );
}

export { AppConsumer };
