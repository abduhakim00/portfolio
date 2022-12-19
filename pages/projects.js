import React, { useState } from "react";
import styles from "../styles/projects.module.css";
function Projects() {
  let [anime, setanime] = useState(false);
  let projects = [1, 2, 3];
  const animate = () => {
    setanime((prev) => {
      return !prev;
    });
  };
  return (
    <React.Fragment>
      <h1 className={styles.h1}>Some of the recent projects</h1>
      <main className={styles.main}>
        {projects.map((el) => {
          return (
            <div onClick={animate}>
              <img
                src="/notfound.png"
                alt="Project Image"
                className={`${styles.img} ${anime ? styles.imgShift : ""}`}
              />
              <h2 className={`${styles.h2} ${anime ? styles.opac : ""}`}>
                Title{" "}
              </h2>
              <p className={`${styles.p} ${anime ? styles.opac : ""}`}>
                Description{" "}
              </p>
            </div>
          );
        })}
      </main>
    </React.Fragment>
  );
}
export default Projects;
