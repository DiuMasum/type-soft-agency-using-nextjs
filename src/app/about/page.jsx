import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digtital ideas that are biggerm bolder, braver and better.</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dolorum reiciendis deserunt nisi voluptas numquam ipsa excepturi vero officia, itaque tempore, delectus, in dolore dolores.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt='about image' fill className={styles.img}/>
      </div>
    </div>
  )
}

export default AboutPage
