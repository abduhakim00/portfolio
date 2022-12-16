import styles from "../styles/about.module.css";
function AboutContents(props) {
  return (
    <section id={props.id}>
      <div className={styles.imgdiv}>
        <img className={styles.img} src="/pres.jfif" />
      </div>
    </section>
  );
}
export default AboutContents;
