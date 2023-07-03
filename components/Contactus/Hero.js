import React from "react";

function Hero() {
  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="py-20">
        <div className="font-regular text-base pb-10">
          <h2 className="text-ngl_black">
            Home /<span className="text-ngl_orange"> Contact us</span>
          </h2>
        </div>
        <div>
          <p className="text-48xl text-ngl_black font-semibold">Contact us</p>
          <p className="text-base font-regular text-ngl_gray_3 py-5 border-b border-ngl_gray_3">
            We value your inquiries, feedback, and partnership opportunities.
            Whether you have a question, want to explore potential
            collaborations, or simply wish to learn more about our innovative
            solutions, our dedicated team is here to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
