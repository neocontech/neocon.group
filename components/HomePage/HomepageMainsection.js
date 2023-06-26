import React from "react";
import Hero from "./Hero";
import Feedback from "./Feedback";
import Aboutus from "./Aboutus";
import Concerns from "./Concerns";
import Contact from "./Contact";

function HomepageMainsection() {
  return (
    <>
      <div>
        <Hero />
        <Feedback />
        <Aboutus />
        <Concerns />
        <Contact />
      </div>
    </>
  );
}

export default HomepageMainsection;
