import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function News() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const [perPage, setPerPage] = useState(4);
  const [newsList, setnewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setnewsList(data);
      } catch (error) {
        console.error("Error fetching booth data:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setShowArrows(true);

        setPerPage(1);
      } else {
        setShowArrows(true);

        setPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: perPage,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: false,
    pagination: false,

    start: currentSlide,
  };
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div>
          <div className="flex flex-row">
            <div className="w-5 block xsm:hidden sm:hidden">
              <BiSquareRounded size={20} className="text-ngl_orange mt-7 " />
            </div>

            <div className="w-full">
              <div className="px-5">
                <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                  News Room
                </p>
              </div>

              <div>
                <Splide options={splideOptions} className="xsm:px-0 sm:px-0">
                  {newsList.map((news, index) => (
                    <SplideSlide key={index}>
                      <div className="bg-ngl_white rounded-3xl w-[391px] xsm:w-auto sm:w-auto xsm:mx-5 sm:mx-5 h-auto">
                        <div className="relative">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_BACKEND_URL +
                              "/storage/" +
                              news.image
                            }
                            alt="news img png"
                            width={391}
                            height={191}
                            className="w-[391px] h-[191px] rounded-3xl"
                          />
                          <p className="w-1/2 leading-tight absolute bottom-0 text-ngl_white text-2xl font-bold p-6 rounded-bl-3xl bg-gradient-to-r from-ngl_black to-ngl_white/5">
                            {news.name}
                          </p>
                        </div>
                        <div className="flex flex-col p-5">
                          <p className="text-ngl_black text-2xl leading-tight font-semibold pb-3">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: news.title
                                  .split(" ")
                                  .slice(0, 10)
                                  .join(" "),
                              }}
                            ></div>
                          </p>
                          <p className="text-base font-regular text-ngl_black">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: news.description
                                  .split(" ")
                                  .slice(0, 10)
                                  .join(" "),
                              }}
                            ></div>
                          </p>
                          <div className="flex justify-end pt-3">
                            <div className="flex flex-row">
                              <button
                                className="px-5"
                                onClick={() => handleReadMoreClick(news.link)}
                              >
                                Read more
                              </button>
                              <BsFillArrowRightCircleFill className="my-auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
