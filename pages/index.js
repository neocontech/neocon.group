import Head from "next/head";
import Main from "./main";
import PageHead from "./pageHead";

export default function Home() {
  const pageTitle = "Neocon Group Limited";
  return (
    <>
      <PageHead title={pageTitle} />
      <Main />
    </>
  );
}
