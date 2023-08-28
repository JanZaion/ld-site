import Link from 'next/link';

import styles from './GetInTouchButton.module.css';

const GetInTouchButton = () => {
  return (
    <Link className={styles.button} href="/#contact">
      Get In Touch
    </Link>
  );
};

export default GetInTouchButton;
