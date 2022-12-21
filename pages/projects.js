import React, { useState } from "react";
import styles from "../styles/projects.module.css";
function Projects() {
  let [anime1, setanime1] = useState(false);
  let [anime2, setanime2] = useState(false);
  let [anime3, setanime3] = useState(false);
  let anime = [anime1, anime2, anime3];
  let projects = [0, 1, 2];
  let project_info = [
    {
      title: "SafeCircle - Covid 19 Tracking System",
      description:
        " A mobile application designed to keep track of covid cases within your surroundings. It works by connecting phones together using BLE and Bluetooth. After connecting the mobile devices together, the app adds those devices to the database (Cloud Firestore) and keeps them saved for 14 days, during this time period if any of the users is tested positive for covid and confirmed it on the application, then all people who were in close contact with that patient will be notified that they have been in contact with a Covid-19 positive person, and they should either do a PCR/Antigen test. Additional features for this application are BMI calculator as well as a Diabetes Risk test. This project was developed using Flutter SDK and Firebase BAAS.",
      img: "/covid.jpg",
    },
    {
      title: "Secure Class Notebook System",
      description:
        " A Command line program that implements ' Secure Class Notebook', which provides every student a place to take notes and collaborate with the class and teachers. Used Python, SQLlite3, OS modules. For encryption, made use of RSA, SHA256 and Caesar Cipher",
      img: "/notfound.png",
    },
    {
      title: "Portfolio Website",
      description: "The Website You are using :) Developed Via NextJS",
      img: "/screen.png",
    },
  ];
  const animate = (el) => {
    if (el == 0) {
      setanime1((prev) => {
        return !prev;
      });
    } else if (el == 1) {
      setanime2((prev) => {
        return !prev;
      });
    } else {
      setanime3((prev) => {
        return !prev;
      });
    }
  };
  return (
    <React.Fragment>
      <h1 className={styles.h1}>Some of the recent projects</h1>
      <main className={styles.main}>
        {projects.map((el) => {
          return (
            <div key={Math.random()} onClick={() => animate(el)}>
              <img
                src={project_info[el].img}
                alt="Project Image"
                className={`${styles.img} ${anime[el] ? styles.imgShift : ""}`}
              />
              <h2 className={`${styles.h2} ${anime[el] ? styles.opac : ""}`}>
                {project_info[el].title}{" "}
              </h2>
              <p className={`${styles.p} ${anime[el] ? styles.opac : ""}`}>
                {project_info[el].description}{" "}
              </p>
            </div>
          );
        })}
      </main>
    </React.Fragment>
  );
}
export default Projects;
