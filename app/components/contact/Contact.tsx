import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsMailbox } from 'react-icons/bs';

import styles from './Contact.module.css';

export const Contact = () => (
  <section id="contact">
    <h2>Kontakt</h2>
    <p>
      Pracujete na něčem skvělém a chcete, aby o tom věděli ti správní lidé?
      Pojďme to probrat.
    </p>
    <ul className={styles.contactList}>
      <li>
        <a
          href="mailto:lucas@dolnicke.whatever"
          rel="noreferrer"
          target="_blank"
        >
          <BsMailbox className={styles.contactIcon} />
          lucas@dolnicek.whatever
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lukasdolnicek/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin className={styles.contactIcon} />
          in/lukasdolnicek
        </a>
      </li>
    </ul>
  </section>
);
