import React from "react";
import styles from "../styles/contact.module.css";

function Contacts() {
  return (
    <React.Fragment>
      <main className={styles.main}>
        <div className={styles.contact}>
          <h1 className={styles.h1}>Come by and say hello!</h1>
          <p className={styles.p}>
            I'll be happy to answer your questions. Just send me a message in
            the form below!
          </p>
          <div className={styles.formdiv}>
            <form className={styles.form}>
              <label for="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="lastname"
                placeholder="Your email"
              />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Your Message"
              ></textarea>

              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
        <div className={styles.contactLinks}>
          <div className={styles.email}>
            <h3 className={styles.h3}>Email</h3>
            <h4>
              <a href="mailto: abduhakim_00@mail.ru">abduhakim_00@mail.ru</a>
            </h4>
          </div>
          <div className={styles.email}>
            <h3 className={styles.h3}>Phone</h3>
            <h4>
              <a href="tell: 992-904-00-77-66">+992 (904) 007766</a>
            </h4>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
export default Contacts;
