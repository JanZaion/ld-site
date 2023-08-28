import Image from 'next/image';

import { Dot } from '../dot/Dot';

import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about">
      <h2>
        About
        <Dot />
      </h2>
      <div className={styles.aboutContent}>
        <div>
          <p>
            Hello and welcome! I&apos;m Lukas, a content marketing expert who
            helps tech companies to create organic revenue streams. Throughout
            my 10+ years career in the tech industry, I&apos;ve been designing
            and executing comprehensive content that drives demand / lead
            generation, and boosts brand visibility.
          </p>
          <p>
            Do you have a tech you want to get in front of your prospects? I can
            help you out.
          </p>
        </div>
        <div>
          <Image
            alt="handsome genious"
            height={390}
            src="/lukas-dolnicek-profile-pic.webp"
            width={260}
          />
        </div>
      </div>
    </section>
  );
};
