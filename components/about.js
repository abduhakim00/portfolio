import styles from "../styles/about.module.css";
function AboutContents(props) {
  return (
    <section id={props.id} className={styles.sec}>
      <div className={styles.imgdiv}>
        <img className={styles.img} src="/pres.jfif" />
      </div>
      <div className={styles.descr}>
        <p>
          I am a 22 year old fresh graduate, Abduhakim Abdusamatov. I studied my
          Software Engineering Bachelor&apos;s Degree at Eastern Mediterranean
          University located0 in (duh Mediterranean) Turkey/North Cyprus. Not to
          brag (bragging will come later), but I graduated with 3.99 CGPA. Now
          that I&apos;m equipped with not so useful knowledge, I want to get
          experience and continue learning as it is the path of engineers.
        </p>
        <p className={styles.brag}>
          Now onto the bragging part, this is me receiving my diploma and award
          for graduating as a top student in all faculty of engineering from the
          president of North Cyprus
        </p>
        <p>
          Aside from Software Engineering, I&apos;m trying to learn Video
          Editing (you guessed it, for my future Youtube Channel), Digital
          Marketing and of course Martial Arts
        </p>
      </div>
    </section>
  );
}
export default AboutContents;
