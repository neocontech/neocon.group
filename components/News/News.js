import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";

function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  const fetchData = async () => {
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
      if (response.ok) {
        const data = await response.json();
        setNewsData(data);
        const allTags = data.reduce((tags, news) => {
          const parsedTags = JSON.parse(news.tags);
          parsedTags.forEach((tagObj) => {
            const tagValue = tagObj.value;
            if (!tags.includes(tagValue)) {
              tags.push(tagValue);
            }
          });
          return tags;
        }, []);
        setAvailableTags(["All", ...allTags]);
        setActiveFilter("All");
      } else {
        console.error("Failed to fetch news data");
      }
    } catch (error) {
      console.error("Error while fetching news data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterNews();
  }, [activeFilter]);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredNews(newsData);
    }
  }, [newsData, activeFilter]);

  const filterNews = () => {
    if (activeFilter === "All") {
      setFilteredNews(newsData);
    } else {
      const filtered = newsData.filter((news) => {
        const parsedTags = JSON.parse(news.tags);
        const newsTags = parsedTags.map((tagObj) => tagObj.value);
        return newsTags.includes(activeFilter);
      });
      setFilteredNews(filtered);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  const handleReadMoreClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="flex flex-row pb-20 overflow-x-scroll scrollbar-hide">
          {availableTags.map((tag) => (
            <button
              key={tag}
              className={`flex flex-row text-2xl mx-2 font-semibold text-ngl_black min-w-max ${
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

        <div className="grid grid-cols-3 gap-6 xsm:grid-cols-1 sm:grid-cols-1">
          {filteredNews.map((news, index) => (
            <div
              key={index}
              className="bg-ngl_white rounded-3xl w-[391px] xsm:w-auto sm:w-auto xsm:mx-5 sm:mx-5 h-auto"
            >
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
                <p className="absolute w-1/2 leading-tight bottom-0 text-ngl_white text-2xl font-bold p-6 rounded-bl-3xl bg-gradient-to-r from-ngl_black to-ngl_white/5">
                  {news.name}
                </p>
                <p className="hidden">{news.tags}</p>
              </div>
              <div className="flex flex-col p-5">
                <div className="text-ngl_black text-2xl leading-tight font-semibold pb-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: news.title.split(" ").slice(0, 10).join(" "),
                    }}
                  ></div>
                </div>
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
          ))}
        </div>
      </div>
    </>
  );
}

export default News;

// const scrollToActiveTab = () => {
//   if (tabContainerRef.current) {
//     const containerWidth = tabContainerRef.current.clientWidth;
//     const activeTab = tabContainerRef.current.querySelector(".active");
//     const activeTabWidth = activeTab.clientWidth;
//     const activeTabOffset = activeTab.offsetLeft;
//     const scrollPosition =
//       activeTabOffset - containerWidth / 2 + activeTabWidth / 2;
//     tabContainerRef.current.scrollTo({
//       left: scrollPosition,
//       behavior: "smooth",
//     });
//   }
// };
