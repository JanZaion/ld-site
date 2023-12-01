/* eslint-disable import/no-duplicates */
import type { IconType } from 'react-icons';
import { BsFillClipboardDataFill } from 'react-icons/bs';
import { BsSearchHeart } from 'react-icons/bs';
import { GiWoodenCrate } from 'react-icons/gi';
import { PiTelevisionBold, PiStrategyBold } from 'react-icons/pi';
import { SiWritedotas } from 'react-icons/si';

import styles from './Services.module.css';

type ServicesArray = {
  heading: string;
  service: string;
  icon: IconType;
}[];

const services: ServicesArray = [
  {
    heading: 'Obsahová strategie',
    service:
      'Navrhnu obsahovou strategii dle vize a cílů vaší firmy. Získáte srozumitelný dlouhodobý plán a jasno v tom, proč, pro koho a jaký obsah tvořit.',
    icon: PiStrategyBold as unknown as IconType,
  },
  {
    heading: 'SEO Copywriting',
    service:
      'Napíšu autentické, přesné a poutavé copy, díky kterému budete těžit z obsahu, který dlouhodobě přináší organickou návštěvnost, generuje poptávku a konverze.',
    icon: BsSearchHeart as unknown as IconType,
  },
  {
    heading: 'Copywriting',
    service:
      'Vytvořím copy pro solution briefy, firemní profily, tiskové zprávy, reklamy a další offline i online materiály, které zesílí povědomí o vaší značce a budou budovat její autoritu.',
    icon: SiWritedotas as unknown as IconType,
  },
  {
    heading: 'Produktový marketing',
    service:
      'Pomohu definovat hodnotu, benefity, a unique selling points produktu, správně popsat jeho funkce a use cases. Budete tak mít jistotu správného messagingu směrem k zákazníkům.',
    icon: GiWoodenCrate as unknown as IconType,
  },
  {
    heading: 'Media relations',
    service:
      'Navážu vztahy s médii prostřednictvím pravidelné komunikace vašich témat a příběhů. Ve finále budete těžit z lepší viditelnosti značky a autority jejích představitelů.',
    icon: PiTelevisionBold as unknown as IconType,
  },
  {
    heading: 'Analytika',
    service:
      'Identifikuji klíčové metriky a nastavím reporting tak, abyste měli správná data pro svá rozhodnutí. Ať už se bude týkat volby témat, kanálů, plánování, či zlepšování efektivity obsahu.',
    icon: BsFillClipboardDataFill as unknown as IconType,
  },
];

export const Services = () => (
  <section id="services">
    <h2>S čím mohu pomoci</h2>
    <div>
      <div className={styles.serviceBox}>
        {services.map((service) => (
          <div key={service.heading}>
            <service.icon className={styles.serviceIcon} />
            <h3>{service.heading}</h3>
            <p>{service.service}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
