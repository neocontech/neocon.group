import React from "react";
import Image from "next/image";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Mission from "../../public/assets/aboutus/mission.png";
import Vision from "../../public/assets/aboutus/vision.png";
import Bigimg from "../../public/assets/aboutus/big.png";
import Smallimg from "../../public/assets/aboutus/small.png";

function Aboutus() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-20">
          <div className="flex flex-row">
            <div className="w-5 block xsm:hidden sm:hidden">
              <BiSquareRounded size={20} className="text-ngl_orange mt-7 " />
            </div>

            <div className="w-full">
              <div className="px-5">
                <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                  About Us
                </p>
                <div className="font-regular text-ngl_black text-base">
                  <p>
                    Neocon Group is a prominent and diversified business
                    conglomerate comprising numerous sister concerns. With a
                    rich history and a strong presence in various sectors,
                    Neocon Group has emerged as a leader in the business
                    landscape.We bring together a diverse range of expertise in
                    stock market securities, internet services, and Software
                    Company to create a seamless ecosystem that shapes the
                    future.
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
                    fosters a culture of innovation, collaboration, and
                    continuous growth. Our talented team of professionals is
                    driven by a shared passion for pushing boundaries and
                    embracing emerging trends, ensuring that we remain at the
                    forefront of industry advancements.
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
                          <p className="text-ngl_gray font-regular text-base">
                          Neocon Group's mission is to excel as a diversified business conglomerate, encompassing various sectors such as stock market, software development, internet services, data centers, and more. Our primary objective is to deliver outstanding products and services while upholding the highest standards of quality, innovation, and customer satisfaction. Through our dynamic and forward-thinking approach, we aim to create sustainable value for our customers, employees, and stakeholders, thereby contributing to the growth and development of the communities we serve. We are driven by integrity, ethical business practices, and a strong commitment to social responsibility, striving to make a positive impact on society as a whole.
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
                          <p className="text-ngl_gray font-regular text-base">
                          The vision of Neocon Group is to establish itself as a trusted and influential conglomerate, known for its diverse business ventures and exceptional performance in various industries. We envision Neocon Group as a driving force in the global market, continuously expanding our presence, diversifying our operations, and embracing cutting-edge technologies and trends. With a customer-centric mindset, we aim to exceed expectations, forge long-lasting relationships, and become the preferred choice for our customers and partners. By nurturing talent, fostering a culture of innovation, and adopting sustainable practices, we seek to achieve long-term growth and create a significant positive impact on the ever-evolving business landscape.
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
                          <p className="text-ngl_gray font-regular text-base">
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
                          <p className="text-ngl_gray font-regular text-base">
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
                          <p className="text-ngl_gray font-regular text-base">
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
      </div>
    </>
  );
}

export default Aboutus;
