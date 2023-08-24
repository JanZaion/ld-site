import { FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>© 2023 Lukas Dolnicek - lucas@dolnicek.whatever</span>

      <a
        className={styles.linkedinIcon}
        href="https://www.linkedin.com/in/lukasdolnicek/"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};
