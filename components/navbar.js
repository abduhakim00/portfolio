import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { FiDownload } from "react-icons/fi";
function Navbar(props) {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.logopad} href="/#">
            HakyCodes
          </Link>
        </li>
        <li className={props.active == "/about" ? styles.active : ""}>
          <Link className={styles.link} href="/about">
            About
          </Link>
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
            download
          >
            <FiDownload /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
