import React from "react";
function Hero() {
  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="py-20">
        <div className="font-regular text-base pb-10">
          <h2 className="text-ngl_black">
            Home /<span className="text-ngl_orange"> Our Business</span>
          </h2>
        </div>
        <div>
          <p className="text-48xl text-ngl_black font-semibold">Our Business</p>
          <p className="text-base font-regular text-ngl_gray_3 py-5 border-b border-ngl_gray_3">
            At Neocon Group, we believe in the power of synergy and
            collaboration. By forging strategic partnerships and nurturing a
            vibrant ecosystem, we create an environment that encourages
            knowledge exchange, fosters creativity, and drives collective
            progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
