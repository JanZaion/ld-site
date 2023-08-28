import { Navigation } from '../navigation/Navigation';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>
    </div>
  );
};
