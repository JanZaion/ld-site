'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './Burger.module.css';

export const Burger = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerOpen = () => setIsBurgerOpen((prev) => !prev);
  const burgerClose = () => setIsBurgerOpen(false);

  return (
    <>
      <GiHamburgerMenu
        className={styles.burgerIcon}
        onClick={toggleBurgerOpen}
      />
      <dialog className={styles.burgerMenu} open={isBurgerOpen}>
        <p>Greetings, one and all!</p>
      </dialog>
    </>
  );
};
