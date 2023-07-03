import React from "react";

function Hero() {
  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="py-20">
        <div className="font-regular text-base pb-10">
          <h2 className="text-ngl_black">
            Home /<span className="text-ngl_orange"> News Room</span>
          </h2>
        </div>
        <div>
          <p className="text-48xl text-ngl_black font-semibold">News Room</p>
          <p className="text-base font-regular text-ngl_gray_3 py-5 border-b border-ngl_gray_3">
            Stay up-to-date with the latest happenings, industry insights, and
            exciting developments within our organization. Explore our news
            articles, press releases, and media resources to get a firsthand
            look at our innovative solutions, successful projects, and thought
            leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
