import React, { useRef } from "react";
import styles from "../styles/contact.module.css";
import { useRouter } from "next/router";

function Contacts() {
  const router = useRouter();
  const refN = useRef();
  const refE = useRef();
  const refT = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(refE);
    let data = {
      firstname: refN.current.value,
      lastname: refE.current.value,
      subject: refT.current.value,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      window.alert("The Message Has Been Sent");
      console.log(data);
    });
    refE.current.value = "";
    refT.current.value = "";
    refN.current.value = "";
  };

  return (
    <React.Fragment>
      {(() => {
        if (router.query.ok) {
          window.alert("The Message Has Been Sent!");
          router.query = {};
        }
      })()}
      <main className={styles.main}>
        <div className={styles.contact}>
          <h1 className={styles.h1}>Come by and say hello!</h1>
          <p className={styles.p}>
            I&apos;ll be happy to answer your questions. Just send me a message
            in the form below!
          </p>
          <div className={styles.formdiv}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <section className={styles.sec}>
                <div>
                  <label className={styles.label} htmlFor="fname">
                    Full Name
                  </label>
                  <input
                    ref={refN}
                    className={styles.nameI}
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    required
                    minLength="3"
                  />
                </div>
                <div className={styles.meh}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    ref={refE}
                    className={styles.emailI}
                    type="email"
                    id="email"
                    name="lastname"
                    placeholder="Your email"
                    required
                  />
                </div>
              </section>
              <label className={styles.label} htmlFor="subject">
                Subject
              </label>
              <textarea
                ref={refT}
                className={styles.textI}
                id="subject"
                name="subject"
                placeholder="Your Message"
                required
                minLength={5}
              ></textarea>

              <input
                className={styles.buttonI}
                type="submit"
                value="Submit"
              ></input>
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
