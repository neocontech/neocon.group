import React from "react";
import Hero from "./Hero";
import Feedback from "./Feedback";
import Aboutus from "./Aboutus";
import Concerns from "./Concerns";

function HomepageMainsection() {
  return (
    <>
      <div>
        <Hero />
        <Feedback />
        <Aboutus />
        <Concerns />
      </div>
    </>
  );
}

export default HomepageMainsection;
