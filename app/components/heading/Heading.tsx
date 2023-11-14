import React from 'react';

import GetInTouchButton from '../getInTouchButton/GetInTouchButton';

import styles from './Heading.module.css';

export const Heading = () => (
  <section className={styles.headingBox} id="home">
    <h1>
      <span className={styles.lucas}>Lukáš Dolníček</span>
      <br />
      Obsahová strategie a copywriting pro technologické firmy
    </h1>
    <GetInTouchButton />
  </section>
);
