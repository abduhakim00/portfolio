import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { FiDownload } from "react-icons/fi";
import React from "react";
function Navbar(props) {
  return (
    <React.Fragment>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link className={styles.logopad} href="/#">
              HakyCodes
            </Link>
          </li>

          <li className={props.active == "/about" ? styles.active : ""}>
            {props.active == "/" && (
              <div
                onClick={() =>
                  window.scroll({ top: 1000, left: 0, behavior: "smooth" })
                }
                className={styles.div}
              >
                About
              </div>
            )}
            {props.active != "/" && (
              <Link className={styles.link} href="/#about">
                About
              </Link>
            )}
          </li>
          <li className={props.active == "/projects" ? styles.active : ""}>
            <Link className={styles.link} href="/projects">
              Projects
            </Link>
          </li>
          <li className={props.active == "/contact" ? styles.active : ""}>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              href="/files/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              CV <FiDownload />
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
