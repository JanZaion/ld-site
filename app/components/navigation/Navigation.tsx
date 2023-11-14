import Link from 'next/link';

import styles from './Navigation.module.css';

export const Navigation = () => (
  <nav>
    <ul className={styles.nav}>
      <li>
        <Link href="/#home">Domů</Link>
      </li>
      <li>
        <Link href="/#about">O mně</Link>
      </li>
      <li>
        <Link href="/#services">Služby</Link>
      </li>
      <li>
        <Link href="/#work">Práce</Link>
      </li>
      {/* <li>
        <Link href="/blog">Blog</Link>
      </li> */}
      <li>
        <Link href="/#contact">Kontakt</Link>
      </li>
    </ul>
  </nav>
);
