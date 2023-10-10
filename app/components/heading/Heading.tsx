import React from 'react';

import { Dot } from '../dot/Dot';
import GetInTouchButton from '../getInTouchButton/GetInTouchButton';

import styles from './Heading.module.css';

export const Heading = () => (
  <section className={styles.headingBox} id="home">
    <h1>
      Lukáš Dolníček
      <br />
      Obsahová strategie a copywriting pro technologické firmy
      <Dot />
    </h1>
    <GetInTouchButton />
  </section>
);
