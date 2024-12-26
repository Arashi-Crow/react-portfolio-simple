import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ignacio</h1>
        <p className={styles.description}>
          I'm a Front-End developer with a demonstrated history of working in the industry. Strong engineering professional skilled in C#, .NET framework , Angular, Typescript, SASS, HTML
        </p>
        <a href="mailto:ignaciofdce92@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;