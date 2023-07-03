import Applayout from "@/components/Layout/Applayout";
import NewsMainSection from "@/components/News/NewsMainSection";
import React from "react";
import PageHead from "./pageHead";

function news() {
  const pageTitle = "Neocon Group Limited / News Room";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <NewsMainSection />
      </Applayout>
    </>
  );
}

export default news;
