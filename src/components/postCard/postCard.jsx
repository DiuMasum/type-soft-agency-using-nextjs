import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/blog.jpg" alt="post image" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto earum repudiandae recusandae nam et facere vitae ducimus deserunt doloremque aperiam, beatae eum neque ratione, dolorem architecto quae impedit.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
