import React from "react";
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
      "At Neocon Group, we believe that collaboration is the key to success. We actively seek out partnerships and alliances that foster knowledge exchange and inspire creativity. Together, we can push the boundaries of what is possible and create lasting impact in the digital realm. As the Chairman, I am fully committed to upholding our core values of integrity, excellence, and customer-centricity. We are dedicated to building strong relationships based on trust, reliability, and transparency. Our clients and partners are at the heart of everything we do, and their success is our ultimate measure of achievement. Thank you for your unwavering support and trust in Neocon Group. I look forward to the remarkable milestones we will achieve together.",
    name: "MOHAMMED ALAMGIR KABIR - Chairman, Neocon Group",
  },
  {
    id: 2,
    image: feedImg,
    sigimage: Signature,
    comment:
      "At Neocon Group, we believe that collaboration is the key to success. We actively seek out partnerships and alliances that foster knowledge exchange and inspire creativity. Together, we can push the boundaries of what is possible and create lasting impact in the digital realm. As the Chairman, I am fully committed to upholding our core values of integrity, excellence, and customer-centricity. We are dedicated to building strong relationships based on trust, reliability, and transparency. Our clients and partners are at the heart of everything we do, and their success is our ultimate measure of achievement. Thank you for your unwavering support and trust in Neocon Group. I look forward to the remarkable milestones we will achieve together.",
    name: "MOHAMMED ALAMGIR KABIR - Chairman, Neocon Group",
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
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-20">
          <div className="bg-ngl_white rounded-xl p-6 xsm:py-5 sm:py-5 xsm:px-2 sm:px-2">
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
