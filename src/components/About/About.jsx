import React from "react";

import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src="../../../assets/about/aboutImage.png"
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/cursorIcon.png" alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites iN Angular React and JavaScript
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/serverIcon.png" alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs in Java NodeJs and C#
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/cursorIcon.png" alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple webProjects systmes and landing pages
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;