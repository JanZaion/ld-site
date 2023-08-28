import React from 'react';

import { Dot } from '../dot/Dot';
import GetInTouchButton from '../getInTouchButton/GetInTouchButton';

import styles from './Heading.module.css';

export const Heading = () => (
  <section className={styles.headingBox} id="home">
    <h1>
      Hi, I&apos;m Lukas
      <br />I create profitable content for B2B tech
      <Dot />
    </h1>
    <GetInTouchButton />
  </section>
);
