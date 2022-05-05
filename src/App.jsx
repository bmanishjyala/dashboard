import React from "react";
import Sidebar from "./comps/Sidebar";
import Topbar from "./comps/Topbar";
import Home from "./pages/Home";

export default function App() {
  
  return (
    <>
      <Topbar />
      <div className="containers">
        <Sidebar id="sidebar" /> 

        <Home />
      </div>
    </>
  );
}
