import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Mission from "../../public/assets/aboutus/mission.png";
import Vision from "../../public/assets/aboutus/vision.png";
import Bigimg from "../../public/assets/aboutus/big.png";
import Smallimg from "../../public/assets/aboutus/small.png";
import Contact from "../HomePage/Contact";

function AboutUs() {
  const videoPath = "/website-promo.mp4";
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <div>
        <div className="pt-20">
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6 pb-20">
            <div>
              <video
                className="w-auto h-auto rounded-3xl"
                controls
                autoPlay
                loop
                muted
              >
                <source src={videoPath} type="video/mp4" />
              </video>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
              <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                We believe that we can handle every
                <span className="text-ngl_orange"> Tech Solution</span>.
              </p>
              <p className="text-base font-regular text-ngl_gray_3">
                Neocon Group Limited is a leading software company in Bangladesh
                that offers a range of innovative and advanced software
                solutions to meet the evolving needs of businesses of all sizes.
                We specialize in cutting-edge technology, software development,
                web application development, mobile application development, and
                IoT, Fintech solution.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div>
              <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                Neocon Group is one of the best in{" "}
                <span className="text-ngl_orange"> Bangladesh</span>.
              </p>
              <div className="text-base font-regular text-ngl_gray_3">
                <p>
                  At Neocon Group, we are at the forefront of driving innovation
                  and transforming the digital landscape. As a leading
                  conglomerate, we bring together a diverse range of expertise
                  in stock market securities, internet services, and Software
                  Company to create a seamless ecosystem that shapes the future.
                </p>
                <p className="py-2">
                  Neocon Group is dedicated to delivering exceptional services
                  and solutions that meet the evolving needs of our clients.
                  Through our network of companies, we offer a comprehensive
                  suite of services, including state-of-the-art internet
                  connectivity, robust data center infrastructure, and
                  next-generation technologies.
                </p>
                <p>
                  With our unwavering commitment to excellence, Neocon Group
                  fosters a culture of innovation, collaboration, and continuous
                  growth. Our talented team of professionals is driven by a
                  shared passion for pushing boundaries and embracing emerging
                  trends, ensuring that we remain at the forefront of industry
                  advancements.
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1  gap-6 py-5">
                <div>
                  <div className="bg-ngl_white rounded-xl relative h-full">
                    <div className="flex justify-between xsm:flex-col sm:flex-col">
                      <div className="w-full  p-5">
                        <p className="text-ngl_black text-2xl font-semibold">
                          Mission
                        </p>
                        <p className="text-base font-regular text-ngl_gray_3">
                          At Neocon Group, our mission is to revolutionize the
                          digital landscape by empowering individuals,
                          businesses, and industries with innovative solutions.
                          We strive to bridge the gap between technology and
                          practical application, accelerating progress and
                          transforming the way people live, work, and connect.
                        </p>
                      </div>
                      <div className="w-2/12 xsm:w-auto sm:w-auto pt-20 xsm:pt-0 xsm:pl-5 xsm:pb-1 sm:pl-5 sm:pb-1">
                        <div className="">
                          <Image
                            src={Mission}
                            alt="mission png"
                            className="w-20 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 xsm:mt-2 sm:mt-2">
                      <Image
                        src={Bigimg}
                        alt="big image png"
                        className="w-44 h-auto "
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-ngl_white rounded-xl relative h-full">
                    <div className="flex justify-between xsm:flex-col sm:flex-col">
                      <div className="w-full p-5">
                        <p className="text-ngl_black text-2xl font-semibold">
                          Vision
                        </p>
                        <p className="text-base font-regular text-ngl_gray_3">
                          Our vision at Neocon Group is to be a catalyst for
                          change, driving the digital future with visionary
                          leadership and cutting-edge technologies. We envision
                          a world where seamless connectivity and advanced
                          solutions enable limitless possibilities, empowering
                          individuals and organizations to thrive in the digital
                          era. Through our relentless pursuit of innovation,
                          collaboration, and excellence, we aspire to shape a
                          future where technology enhances every aspect of human
                          life and propels society towards new frontiers of
                          growth and achievement.
                        </p>
                      </div>
                      <div className="w-2/12 xsm:w-auto sm:w-auto pt-20 xsm:pt-0 xsm:pl-5 xsm:pb-1 sm:pl-5 sm:pb-1">
                        <div className="">
                          <Image
                            src={Vision}
                            alt="Vision png"
                            className="w-20 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0  right-0 xsm:mt-5 sm:mt-5">
                      <Image
                        src={Bigimg}
                        alt="big image png"
                        className="w-44 h-auto "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 xsm:grid-cols-2 sm:grid-cols-2 gap-6">
                <div>
                  <div className="bg-ngl_white rounded-xl relative h-full">
                    <div className="flex justify-between xsm:flex-col sm:flex-col">
                      <div className="w-full p-5">
                        <p className="text-ngl_black text-2xl font-semibold">
                          05+
                        </p>
                        <p className="text-base font-regular text-ngl_gray_3">
                          Years of experience
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 ">
                      <Image
                        src={Smallimg}
                        alt="big image png"
                        className="w-28 h-auto "
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-ngl_white rounded-xl relative h-full">
                    <div className="flex justify-between xsm:flex-col sm:flex-col">
                      <div className="w-full p-5">
                        <p className="text-ngl_black text-2xl font-semibold">
                          50+
                        </p>
                        <p className="text-base font-regular text-ngl_gray_3">
                          Professionals
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 ">
                      <Image
                        src={Smallimg}
                        alt="big image png"
                        className="w-28 h-auto "
                      />
                    </div>
                  </div>
                </div>
                <div className=" xsm:col-span-2 sm:col-span-2">
                  <div className="bg-ngl_white rounded-xl relative h-full">
                    <div className="flex justify-between xsm:flex-col sm:flex-col">
                      <div className="w-full p-5">
                        <p className="text-ngl_black text-2xl font-semibold">
                          24/7
                        </p>
                        <p className="text-base font-regular text-ngl_gray_3">
                          Professional Support
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 ">
                      <Image
                        src={Smallimg}
                        alt="big image png"
                        className="w-28 h-auto "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pl-5">
              <button className="flex flex-row text-sm text-ngl_black font-semibold hover:underline">
                <p className="my-auto">Learn more</p>
                <BsFillArrowRightCircleFill
                  size={30}
                  className="text-ngl_black pl-2"
                />
              </button>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
