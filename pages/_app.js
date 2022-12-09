import "../styles/globals.css";
import Navbar from "../components/navbar";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>HakyCodes!</title>
        <meta
          name="description"
          content="Software Engineer and Freelancer, Portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dosis"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Pacifico"
        />
      </Head>
      <Navbar active={router.pathname}></Navbar>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
