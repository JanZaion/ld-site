import Image from 'next/image';

import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about">
      <h2>O mně</h2>
      <div className={styles.aboutContent}>
        <div>
          <p>
            Vítejte na mé stránce! Jmenuji se Lukáš a už více než 10 let pomáhám
            technologickým B2B firmám růst pomocí organického obsahu.
            Specializuji se na strategie, plánování a tvorbu obsahu. Obsahu,
            který generuje poptávku, obchodní příležitosti a buduje viditelnost
            značky.
          </p>
          <p>
            Je pro mě přirozené tvořit v angličtině a češtině, a to v různých
            formátech dle konkrétních potřeb. Typicky se jedná o webové stránky,
            blogy, landing pages, nejrůznější produktové materiály (solution
            briefs), tiskové zprávy, případové studie, reklamní copy nebo white
            papery.
          </p>
          <p>
            Pracujete na něčem skvělém a chcete, aby o tom věděli ti správní
            lidé? Pojďme to probrat.
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
