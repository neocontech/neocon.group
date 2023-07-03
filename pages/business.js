import BusinessMainsection from "@/components/Business/BusinessMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function business() {
  const pageTitle = "Neocon Group Limited / Business";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <BusinessMainsection />
      </Applayout>
    </>
  );
}

export default business;
