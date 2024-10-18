import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Typesoft Software Company.</h1>
        <p className={styles.dsc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          aliquam. Inventore harum at ut asperiores, aliquam a non. Enim earum
          temporibus magni adipisci
        </p>
        <div className={styles.button}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brand image"
            fill
            className={styles.brandImg}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/hero.gif"
            alt="hero image"
            fill
            className={styles.heroImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
