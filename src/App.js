import React, { useState, useEffect } from "react";
import "./styles.css";
import Home from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage";
import Sign from "./pages/SignPage";
import Login from "./pages/LoginPage";
import Week from "./pages/Week";
import List from "./pages/ListPage";
import Today from "./pages/Today";
import Add from "./pages/AddlistPage";

export default function App() {
  return (
  <>
    <Home />
    <Login/>
    <Dashboard/>

    <Add />
    <List/>
  </>)
}
