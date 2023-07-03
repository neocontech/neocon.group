import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import news1 from "../../public/assets/news/news.png";
const newsData = [
  {
    id: 1,
    tag: "Tech",
    header: "Tech News Header",
    content: "Tech news content",
    name: "The Daily Star",
    image: news1,
  },
  {
    id: 2,
    tag: "New",
    header: "New News Header",
    content: "New news content",
    name: "The Daily Star",
    image: news1,
  },
  {
    id: 3,
    tag: "New2",
    header: "New News Header",
    content: "New news content",
    name: "The Daily Star",
    image: news1,
  },
  {
    id: 4,
    tag: "New3",
    header: "New News Header",
    content: "New news content",
    name: "The Daily Star",
    image: news1,
  },
  {
    id: 5,
    tag: "New4",
    header: "New News Header",
    content: "New news content",
    name: "The Daily Star",
    image: news1,
  },

];

function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const tabContainerRef = useRef(null);

  useEffect(() => {
    const containerWidth = tabContainerRef.current.clientWidth;
    const activeTab = tabContainerRef.current.querySelector(".active");
    const activeTabWidth = activeTab.clientWidth;
    const activeTabOffset = activeTab.offsetLeft;
    const scrollPosition =
      activeTabOffset - containerWidth / 2 + activeTabWidth / 2;
    tabContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const availableTags = ["All", ...new Set(newsData.map((news) => news.tag))];
  const filteredNews =
    activeFilter === "All"
      ? newsData
      : newsData.filter((news) => news.tag === activeFilter);

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div
          className="flex flex-row pb-20  overflow-x-scroll scrollbar-hide"
          ref={tabContainerRef}
        >
          {availableTags.map((tag) => (
            <button
              key={tag}
              className={`flex flex-row text-2xl mx-2 font-semibold text-ngl_black ${
                activeFilter === tag ? "active text-ngl_orange" : ""
              }`}
              onClick={() => handleFilterClick(tag)}
            >
              <p>{tag}</p>
              {activeFilter === tag ? (
                <BsFillArrowDownRightCircleFill className="mx-2 my-auto" />
              ) : (
                <BsFillArrowRightCircleFill className="mx-2 my-auto" />
              )}
            </button>
          ))}
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6 xsm:grid-cols-1 sm:grid-cols-1">
            {filteredNews.map((news, index) => (
              <div
                key={index}
                className="bg-ngl_white rounded-3xl w-[391px] xsm:w-auto sm:w-auto xsm:mx-5 sm:mx-5 h-auto"
              >
                <div className="relative">
                  <Image
                    src={news.image}
                    alt="news img png"
                    className="w-[391px] h-[191px]"
                  />
                  <p className="absolute w-1/2 leading-tight bottom-0 text-ngl_white text-2xl font-bold p-6 rounded-bl-3xl bg-gradient-to-r from-ngl_black to-ngl_white/5">
                    {news.name}
                  </p>
                  <p className="hidden">{news.tag}</p>
                </div>
                <div className="flex flex-col p-5">
                  <p className="text-ngl_black text-2xl leading-tight font-semibold pb-3">
                    {news.header}
                  </p>
                  <p className="text-base font-regular text-ngl_black">
                    {news.content}
                  </p>
                  <div className="flex justify-end pt-3">
                    <div className="flex flex-row">
                      <p className="px-5">Read more</p>
                      <BsFillArrowRightCircleFill className="my-auto" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
