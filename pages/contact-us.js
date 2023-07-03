import ContactMainsection from "@/components/Contactus/ContactMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function ContactUs() {
  const pageTitle = "Neocon Group Limited / Contact Us";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <ContactMainsection />
      </Applayout>
    </>
  );
}

export default ContactUs;
