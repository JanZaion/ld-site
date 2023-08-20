import React from 'react';

import { Dot } from '../dot/Dot';

import styles from './Heading.module.css';

export const Heading = () => (
  <section className={styles.headingBox}>
    <h1>
      Hi, I&apos;m Lukas
      <br />I create profitable content for B2B tech
      <Dot />
    </h1>
    <button type="button">Get in touch</button>
  </section>
);
