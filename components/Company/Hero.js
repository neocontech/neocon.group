import React from "react";

function Hero() {
  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="py-20">
        <div className="font-regular text-base pb-10">
          <h2 className="text-ngl_black">
            Home /<span className="text-ngl_orange"> Company</span>
          </h2>
        </div>
        <div>
          <p className="text-48xl text-ngl_black font-semibold">Company</p>
          <p className="text-base font-regular text-ngl_gray_3 py-5 border-b border-ngl_gray_3">
          Neocon Group is a thriving business consortium, comprising a collection of distinct enterprises operating across various industries. With a focus on versatility and innovation, we have established ourselves as a prominent player in the corporate landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
