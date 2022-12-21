import "../styles/globals.css";
import Navbar from "../components/navbar";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

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
      <footer className={styles.footer}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/abduhakim-abdusamatov-805b14206/"
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialLinkedin />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/abduhakim00"
        >
          <VscGithubAlt />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/hakim.abdusamadov/"
        >
          <AiOutlineFacebook />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/haky.michi/"
        >
          <AiOutlineInstagram />
        </a>
      </footer>
    </React.Fragment>
  );
}

export default MyApp;
