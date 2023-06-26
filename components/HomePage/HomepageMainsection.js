import React from "react";
import Hero from "./Hero";
import Feedback from "./Feedback";
import Aboutus from "./Aboutus";
import Concerns from "./Concerns";
import Contact from "./Contact";
import News from "./News";

function HomepageMainsection() {
  return (
    <>
      <div>
        <Hero />
        <Feedback />
        <Aboutus />
        <Concerns />
        <News />
        <Contact />
      </div>
    </>
  );
}

export default HomepageMainsection;
