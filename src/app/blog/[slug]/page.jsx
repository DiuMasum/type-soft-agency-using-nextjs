import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/blog.jpg"
          alt="sing post image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/blog.jpg"
            alt="author image"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.datailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.datailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          temporibus porro dolor, voluptatum, repudiandae, impedit sed voluptas
          deleniti qui odit veritatis voluptatem tenetur. Id perferendis dicta
          iusto libero dolor commodi.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
