import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsMailbox } from 'react-icons/bs';

import { Dot } from '../dot/Dot';

import styles from './Contact.module.css';

export const Contact = () => (
  <section className={styles.headingBox} id="contact">
    <h2>
      Contact
      <Dot />
    </h2>
    <p>
      Creating something special and want to chat? I would love to listen! Send
      me a quick email or a DM on linkedind and we can schedule a time to talk.
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
