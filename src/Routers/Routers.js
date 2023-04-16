import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />

      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};

export default Routers;
