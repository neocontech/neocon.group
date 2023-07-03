import React from "react";
import Image from "next/image";
import Contact from "../HomePage/Contact";
import Alamgir from "../../public/assets/director/Alamgir-Kabir.png";
import Rowshan from "../../public/assets/director/Rowshan-Ara.png";
import Shadman from "../../public/assets/director/Shadman-Kabir.png";
import Sabbria from "../../public/assets/director/Sabbria-Kabir.png";
const DirectorList = [
  {
    id: 0,
    name: "Sabid Hasan",
    designation: "CD of Duoneos",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sed elementum sollicitudin egestas libero magna diam. Purus duis leo egestas nisl purus. Convallis tortor vitae turpis eget quam in in dignissim.",
    header:
      "“We manage too many people to    constantly be searching for stuff",
    subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Alamgir,
  },
  {
    id: 1,
    name: "Sabid Hasan",
    designation: "CD of Duoneos",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sed elementum sollicitudin egestas libero magna diam. Purus duis leo egestas nisl purus. Convallis tortor vitae turpis eget quam in in dignissim.",
    header:
      "“We manage too many people to    constantly be searching for stuff",
    subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Rowshan,
  },
  {
    id: 2,
    name: "Sabid Hasan",
    designation: "CD of Duoneos",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sed elementum sollicitudin egestas libero magna diam. Purus duis leo egestas nisl purus. Convallis tortor vitae turpis eget quam in in dignissim.",
    header:
      "“We manage too many people to    constantly be searching for stuff",
    subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Shadman,
  },
  {
    id: 3,
    name: "Sabid Hasan",
    designation: "CD of Duoneos",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sed elementum sollicitudin egestas libero magna diam. Purus duis leo egestas nisl purus. Convallis tortor vitae turpis eget quam in in dignissim.",
    header:
      "“We manage too many people to    constantly be searching for stuff",
    subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Sabbria,
  },
];

function Director() {
  return (
    <>
      <div>
        <div className="pt-20">
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <p className="text-41xl xsm:text-3xl sm:text-3xl font-semibold text-ngl_black">
                “Board of <span className="text-ngl_orange"> Director</span>
              </p>
              <p className="text-base font-regular text-ngl_gray_3">
                Lorem ipsum dolor sit amet consectetur. Nunc sit tincidunt
                tellus sit maecenas phasellus integer tortor ultricies. Semper
                justo morbi amet egestas nisi eu vitae orci malesuada. Feugiat
                quis sit viverra aliquam.
              </p>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
              {DirectorList.map((director, index) => (
                <div
                  key={index}
                  className={`w-full flex  mb-10 ${
                    director.id % 2 === 0
                      ? "flex-row xsm:flex-col sm:flex-col "
                      : "flex-row-reverse xsm:flex-col sm:flex-col"
                  }`}
                >
                  <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                    <div
                      className={` flex ${
                        director.id % 2 === 0
                          ? " justify-start xsm:pb-5 sm:pb-5"
                          : "justify-end xsm:pb-5 sm:pb-5"
                      }`}
                    >
                      <div>
                        <p className="text-sm text-ngl_orange font-semibold">
                          {director.subheader}
                        </p>
                        <p className="text-32xl xsm:text-xl sm:text-xl text-ngl_black font-semibold leading-tight">
                          {director.header}
                        </p>
                        <div className="border-l-2 border-ngl_orange">
                          <p className="text-base font-regular text-ngl_gray_3 p-2 mb-3">
                            {director.comment}
                          </p>
                        </div>
                        <div className="flex flex-row xsm:flex-col sm:flex-col">
                          <p className="text-base text-ngl_orange font-semibold">
                            {director.name}
                          </p>
                          <p className="text-sm font-regular text-ngl_gray_3 my-auto mx-5 xsm:mx-0 sm:mx-0  mb-0">
                            {director.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto w-2/5 xsm:w-full sm:w-full">
                    <Image
                      src={director.image}
                      alt="director image"
                      className="my-auto mx-auto rounded-lg w-auto h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Contact/> */}
      </div>
    </>
  );
}

export default Director;
