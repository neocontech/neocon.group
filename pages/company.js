import CompanyMainsection from "@/components/Company/CompanyMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function company() {
  const pageTitle = "Neocon Group Limited / Company";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <CompanyMainsection />
      </Applayout>
    </>
  );
}

export default company;
