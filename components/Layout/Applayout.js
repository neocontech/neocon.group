import React from "react";
import Navbar from "../Navbar/Navbar";

const Applayout = ({ header, children }) => {
  return (
    <>
      <div className="landing_bg">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Applayout;
