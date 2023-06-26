import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import feedImg from "../../public/assets/feedback/feedbackimg.png";
import Signature from "../../public/assets/feedback/signature.png";
const FeedbackList = [
  {
    id: 1,
    image: feedImg,
    sigimage: Signature,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit diam id lectus eget morbi ac. Eget aliquam felis lectus risus ut quisque. Amet sed risus orci aliquam viverra convallis  malesuada euismod pulvinar. Habitant enim integer  posuere ut et gravida nulla. Tempus adipiscing maecenas tortor nec donec. Sodales tortor rhoncus odio eget leo  maecenas sed porta. Id viverra in nisi suspendisse sed diam turpis placerat eros. Tellus rhoncus sed cras egestas ridiculus.",
    name: "Sabid Hasan - Senior UX UI Designer",
  },
  {
    id: 2,
    image: feedImg,
    sigimage: Signature,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit diam id lectus eget morbi ac. Eget aliquam felis lectus risus ut quisque. Amet sed risus orci aliquam viverra convallis  malesuada euismod pulvinar. Habitant enim integer  posuere ut et gravida nulla. Tempus adipiscing maecenas tortor nec donec. Sodales tortor rhoncus odio eget leo  maecenas sed porta. Id viverra in nisi suspendisse sed diam turpis placerat eros. Tellus rhoncus sed cras egestas ridiculus.",
    name: "Sabid Hasan - Senior UX UI Designer",
  },
  {
    id: 3,
    image: feedImg,
    sigimage: Signature,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit diam id lectus eget morbi ac. Eget aliquam felis lectus risus ut quisque. Amet sed risus orci aliquam viverra convallis  malesuada euismod pulvinar. Habitant enim integer  posuere ut et gravida nulla. Tempus adipiscing maecenas tortor nec donec. Sodales tortor rhoncus odio eget leo  maecenas sed porta. Id viverra in nisi suspendisse sed diam turpis placerat eros. Tellus rhoncus sed cras egestas ridiculus.",
    name: "Sabid Hasan - Senior UX UI Designer",
  },
  {
    id: 4,
    image: feedImg,
    sigimage: Signature,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit diam id lectus eget morbi ac. Eget aliquam felis lectus risus ut quisque. Amet sed risus orci aliquam viverra convallis  malesuada euismod pulvinar. Habitant enim integer  posuere ut et gravida nulla. Tempus adipiscing maecenas tortor nec donec. Sodales tortor rhoncus odio eget leo  maecenas sed porta. Id viverra in nisi suspendisse sed diam turpis placerat eros. Tellus rhoncus sed cras egestas ridiculus.",
    name: "Sabid Hasan - Senior UX UI Designer",
  },
  {
    id: 5,
    image: feedImg,
    sigimage: Signature,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit diam id lectus eget morbi ac. Eget aliquam felis lectus risus ut quisque. Amet sed risus orci aliquam viverra convallis  malesuada euismod pulvinar. Habitant enim integer  posuere ut et gravida nulla. Tempus adipiscing maecenas tortor nec donec. Sodales tortor rhoncus odio eget leo  maecenas sed porta. Id viverra in nisi suspendisse sed diam turpis placerat eros. Tellus rhoncus sed cras egestas ridiculus.",
    name: "Sabid Hasan - Senior UX UI Designer",
  },
];

function Feedback() {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: false,
    pagination: false,
    // pagination: showPagination,
    // start: currentSlide,
  };
  return (
    <>
      <div className="px-10 xsm:px-5 sm:px-5">
        <div className="pb-20">
          <div className="bg-ngl_white rounded-xl p-6">
            <Splide options={splideOptions}>
              {FeedbackList.map((feed, index) => (
                <SplideSlide key={index}>
                  <div className="flex justify-between xsm:flex-col sm:flex-col mx-2">
                    <div className="w-3/5 xsm:w-auto sm:w-auto my-auto xsm:mx-auto sm:mx-auto">
                      <div className="border border-r-0 border-dashed rounded-s-xl border-ngl_orange ">
                        <Image
                          src={feed.image}
                          alt="feedback image"
                          className="w-auto h-auto py-2 pl-2"
                        />
                      </div>
                    </div>
                    <div className="mx-10 xsm:hidden sm:hidden block"></div>
                    <div className="flex flex-col ">
                      <div className="xsm:pt-5 sm:pt-5">
                        <FaQuoteLeft size={30} className="text-ngl_orange" />
                      </div>

                      <p className="text-base font-normal text-ngl_black text-center py-5">
                        {feed.comment}
                      </p>
                      <div className="flex justify-end">
                        <FaQuoteRight size={30} className="text-ngl_orange" />
                      </div>

                      <Image
                        src={feed.sigimage}
                        alt="signature png"
                        className="w-40 h-auto mx-auto"
                      />
                      <p className="text-lg font-semibold text-ngl_black text-center">
                        {feed.name}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
