import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Mission from "../../public/assets/aboutus/mission.png";
import Vision from "../../public/assets/aboutus/vision.png";
import Bigimg from "../../public/assets/aboutus/big.png";
import Smallimg from "../../public/assets/aboutus/small.png";

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
            <div className="my-auto">
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
              <p className="text-text_51 leading-tight text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                We believe that Neocon Group can handle any Tech solution for
                <span className="text-ngl_orange"> your Business</span>.
              </p>
              <p className="text-base font-regular text-ngl_gray_3">
                Neocon Group is a dynamic and diverse business enterprise that
                encompasses a wide range of industries and sectors. As a
                multifaceted organization, we operate through a network of
                subsidiary companies, each specializing in different areas such
                as stock market, software development, internet services, data
                centers, and more. With our expansive portfolio, we offer a
                comprehensive suite of products and services tailored to meet
                the diverse needs of our clients.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div>
              <p className="text-text_51 leading-tight text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                Welcome to Neocon Group -
                <span className="text-ngl_orange">
                  {" "}
                  Where Innovation Meets Impact
                </span>
                .
              </p>
              <div className="text-base font-regular text-ngl_gray">
                <p>
                  Neocon Group is a prominent and diversified business
                  conglomerate comprising numerous sister concerns. With a rich
                  history and a strong presence in various sectors, Neocon Group
                  has emerged as a leader in the business landscape.We bring
                  together a diverse range of expertise in stock market
                  securities, internet services, and Software Company to create
                  a seamless ecosystem that shapes the future.
                </p>
                <p className="py-2">
                  Neocon Group is dedicated to delivering exceptional services
                  and solutions that meet the evolving needs of our clients.
                  Through our network of companies, we offer a comprehensive
                  suite of services, including state-of-the-art internet
                  connectivity, robust data center infrastructure, and
                  next-generation technologies.
                </p>
                <p className="py-2">
                  Our commitment to quality and customer satisfaction is
                  unwavering. We strive to meet and exceed the expectations of
                  our clients, providing them with tailor-made solutions that
                  address their unique needs. With a customer-centric approach,
                  Neocon Group has established long-lasting relationships with
                  clients from various sectors, earning their trust and loyalty.
                </p>
                <p>
                  The success of Neocon Group can be attributed to the
                  collective expertise, skills, and dedication of our talented
                  team. We have assembled a group of professionals who are
                  passionate about their work and consistently strive for
                  excellence. Our team's ability to adapt to changing market
                  trends and embrace innovation has been instrumental in driving
                  the growth and success of our sister concerns
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
                          Neocon Group's mission is to excel as a diversified
                          business conglomerate, encompassing various sectors
                          such as stock market, software development, internet
                          services, data centers, and more. Our primary
                          objective is to deliver outstanding products and
                          services while upholding the highest standards of
                          quality, innovation, and customer satisfaction.
                          Through our dynamic and forward-thinking approach, we
                          aim to create sustainable value for our customers,
                          employees, and stakeholders, thereby contributing to
                          the growth and development of the communities we
                          serve. We are driven by integrity, ethical business
                          practices, and a strong commitment to social
                          responsibility, striving to make a positive impact on
                          society as a whole.
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
                          The vision of Neocon Group is to establish itself as a
                          trusted and influential conglomerate, known for its
                          diverse business ventures and exceptional performance
                          in various industries. We envision Neocon Group as a
                          driving force in the global market, continuously
                          expanding our presence, diversifying our operations,
                          and embracing cutting-edge technologies and trends.
                          With a customer-centric mindset, we aim to exceed
                          expectations, forge long-lasting relationships, and
                          become the preferred choice for our customers and
                          partners. By nurturing talent, fostering a culture of
                          innovation, and adopting sustainable practices, we
                          seek to achieve long-term growth and create a
                          significant positive impact on the ever-evolving
                          business landscape.
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
        </div>
      </div>
    </>
  );
}

export default AboutUs;
