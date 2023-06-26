import React from "react";
import Image from "next/image";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Mission from "../../public/assets/aboutus/mission.png";
import Vision from "../../public/assets/aboutus/vision.png";
import Bigimg from "../../public/assets/aboutus/big.png";
import Smallimg from "../../public/assets/aboutus/small.png";
import Small from "../../public/assets/aboutus/small.png";

function Aboutus() {
  return (
    <>
      <div className="px-10 xsm:px-5 sm:px-5">
        <div className="pb-20">
          <div className="flex flex-row">
            <div className="w-5 block xsm:hidden sm:hidden">
              <BiSquareRounded
                size={20}
                className="text-ngl_orange mt-7 "
              />
            </div>

            <div className="w-full">
              <div className="px-5">
                <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                  About Us
                </p>
                <p className="font-regular text-ngl_black text-base">
                  Lorem ipsum dolor sit amet consectetur. Consequat tellus nisi
                  justo morbi. Facilisi at facilisis orci mattis tellus. Aliquam
                  condimentum aenean ipsum nunc libero libero. Suspendisse
                  mauris enim pulvinar gravida urna imperdiet praesent semper.
                  Elementum enim est arcu pharetra convallis arcu malesuada.
                  Cursus dolor massa sit arcu pretium. Fringilla ut egestas nec
                  morbi pretium a in blandit potenti. Morbi at amet blandit nunc
                  hac. Arcu laoreet libero vitae lorem odio massa cursus ornare.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1  gap-6 py-5">
                  <div>
                    <div className="bg-ngl_white rounded-xl relative">
                      <div className="flex justify-between xsm:flex-col sm:flex-col">
                        <div className="w-full p-5">
                          <p className="text-ngl_black text-2xl font-semibold">
                            Mission
                          </p>
                          <p className="text-ngl_gray font-regular text-base">
                            Lorem ipsum dolor sit amet consectetur. Eros mattis
                            nibh habitasse ultricies mi volutpat. Volutpat
                            tristique in nec lectus orci lobortis congue.
                            Curabitur facilisis. Lorem ipsum dolor sit amet
                            consectetur.
                          </p>
                        </div>
                        <div className="w-2/12 xsm:w-auto sm:w-auto pt-12 xsm:pt-0 xsm:pl-5 xsm:pb-1 sm:pl-5 sm:pb-1">
                          <div className="">
                            <Image
                              src={Mission}
                              alt="mission png"
                              className="w-20 h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 xsm:top-28 sm:top-28 right-0 xsm:mt-2 sm:mt-2">
                        <Image
                          src={Bigimg}
                          alt="big image png"
                          className="w-44 h-auto "
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-ngl_white rounded-xl relative">
                      <div className="flex justify-between xsm:flex-col sm:flex-col">
                        <div className="w-full p-5">
                          <p className="text-ngl_black text-2xl font-semibold">
                            Vision
                          </p>
                          <p className="text-ngl_gray font-regular text-base">
                            Lorem ipsum dolor sit amet consectetur. Eros mattis
                            nibh habitasse ultricies mi volutpat. Volutpat
                            tristique in nec lectus orci lobortis congue.
                            Curabitur facilisis. Lorem ipsum dolor sit amet
                            consectetur.
                          </p>
                        </div>
                        <div className="w-2/12 xsm:w-auto sm:w-auto pt-12 xsm:pt-0 xsm:pl-5 xsm:pb-1 sm:pl-5 sm:pb-1">
                          <div className="">
                            <Image
                              src={Vision}
                              alt="Vision png"
                              className="w-20 h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 xsm:top-28 sm:top-28 right-0 xsm:mt-5 sm:mt-5">
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
                    <div className="bg-ngl_white rounded-xl relative">
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
                      <div className="absolute top-1 xsm:top-0 sm:top-0 right-0 ">
                        <Image
                          src={Smallimg}
                          alt="big image png"
                          className="w-28 h-auto "
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-ngl_white rounded-xl relative">
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
                      <div className="absolute top-1 xsm:top-0 sm:top-0 right-0 ">
                        <Image
                          src={Smallimg}
                          alt="big image png"
                          className="w-28 h-auto "
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" xsm:col-span-2 sm:col-span-2">
                    <div className="bg-ngl_white rounded-xl relative">
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
                      <div className="absolute top-1 xsm:top-0 sm:top-0 right-0 ">
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
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Aboutus;
