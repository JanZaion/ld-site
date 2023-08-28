import Link from 'next/link';

import styles from './Navigation.module.css';

export const Navigation = () => (
  <nav>
    <ul className={styles.nav}>
      <li>
        <Link href="/#home">Home</Link>
      </li>
      <li>
        <Link href="/#about">About</Link>
      </li>
      <li>
        <Link href="/#services">Services</Link>
      </li>
      <li>
        <Link href="/#work">Work</Link>
      </li>
      <li>
        <Link href="/posts">Blog</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
    </ul>
  </nav>
);