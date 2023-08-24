import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
