import React, { useState, useRef, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import Contact from "./Contact";

function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const tabContainerRef = useRef(null);
  useEffect(() => {
    const containerWidth = tabContainerRef.current.clientWidth;
    const tabWidth = tabContainerRef.current.children[openTab - 1].clientWidth;
    const tabOffset = tabContainerRef.current.children[openTab - 1].offsetLeft;
    const scrollPosition = tabOffset - containerWidth / 2 + tabWidth / 2;
    tabContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [openTab]);
  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div>
          <ul
            className=" flex flex-row text-2xl font-semibold xsm:overflow-x-scroll sm:overflow-x-scroll scrollbar-hide"
            ref={tabContainerRef}
          >
            <li className="xsm:min-w-max sm:min-w-max ">
              <a
                className={`flex flex-row" ${
                  openTab === 1
                    ? "text-ngl_orange"
                    : "text-ngl_black hover:text-ngl_orange duration-700"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(1);
                }}
                href="#link1"
                role="tablist"
              >
                <p>Contact us</p>
                {openTab === 1 ? (
                  <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                ) : (
                  <BsFillArrowRightCircleFill className="my-auto mx-2" />
                )}
              </a>
            </li>
          </ul>
          <div>
            <div>
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
