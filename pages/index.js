import styles from "../styles/index.module.css";
import Link from "next/link";
import { FaDirections } from "react-icons/fa";
import AboutContents from "../components/about";
import "animate.css/animate.min.css";

import React, { useEffect, useState } from "react";
export default function Home() {
  let [bounce, setBounce] = useState("");
  useEffect(() => {
    setTimeout(() => {
      bounce == "" ? setBounce("bounce") : setBounce("");
    }, 1000);
  }, [setTimeout, bounce, setBounce]);
  return (
    <React.Fragment>
      <main className={styles.parent}>
        <div className={styles.text} key={Math.random()}>
          <div className={styles.box}>
            <h2 className={`${styles.h2} ${styles.bounce}`}>
              Ladies and gentlemen, welcome to the main event.
            </h2>
            <h2 className={styles.h3}>
              In this corner, weighing in at 170 pounds, undefeated in 0 fights,
              <br />
              the contender to the title,{" "}
              <span className={styles.name}>Hakymichi</span>
            </h2>
            <p className={styles.p}>
              That would be a proper intro, however I chose to box coding
              algorithms instead. <br /> That's why:
            </p>
          </div>
          <div className={styles.notbox}>
            <h2> Hi, I'm a Software Engineer and Tech Enthusiast Hakymichi</h2>
            <p>
              My services include Mobile App Development, Web Development, and
              soon Digital Marketing
            </p>
            <Link className={styles.contact} href="/contact">
              {" "}
              Bring Your Project into Life, Contact Me <FaDirections />
            </Link>
          </div>
        </div>
        <div className={styles.pic}>
          <img className={styles.img} src="homepage.jpg" />
        </div>
      </main>

      <AboutContents id="about"></AboutContents>
    </React.Fragment>
  );
}
