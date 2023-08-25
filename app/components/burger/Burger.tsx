'use client';

import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './Burger.module.css';

export const Burger = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const toggleBurgerOpen = () => setIsBurgerOpen((prev) => !prev);

  const burgerClose = () => setIsBurgerOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      burgerClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={iconRef}>
        <GiHamburgerMenu
          className={styles.burgerIcon}
          onClick={toggleBurgerOpen}
        />
      </div>
      <dialog ref={menuRef} className={styles.burgerMenu} open={isBurgerOpen}>
        <p>Greetings, one and all!</p>
      </dialog>
    </>
  );
};
