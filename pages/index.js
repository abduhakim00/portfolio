import styles from "../styles/index.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.text}>
        <h2>
          Well aren't You lucky to find{" "}
          <span className={styles.name}>Hakymichi?</span>
        </h2>
        <p>
          Yeah, thank me later. <br /> Hi, I'm a Software Engineer, Tech
          enthusiast and of course an anime watcher, Hakymichi
        </p>
        <Link href="/contact"> Ready to serve your needs!</Link>
      </div>
      <div className={styles.pic}>
        <img className={styles.img} src="homepage.jpg" />
      </div>
    </div>
  );
}
