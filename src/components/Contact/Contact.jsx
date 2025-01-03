import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:ignaciofdce92@gmail.com.com">ignaciofdce92@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/ignaciofdce/">linkedin.com/ignaciofdce</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/Arashi-Crow">github.com/Arashi-Crow</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/codePen.png")} alt="CodePen icon" />
                    <a href="https://codepen.io/arashi_crow">codepen/arashi_crow</a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;