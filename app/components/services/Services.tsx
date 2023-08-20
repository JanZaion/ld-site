/* eslint-disable import/no-duplicates */
import type { IconType } from 'react-icons';
import { BsFillClipboardDataFill } from 'react-icons/bs';
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
    heading: 'Content strategy',
    service:
      'Developing and executing content strategy, setting up plans, creating content hubs, managing content calendars and workflows attracting and engaging prospects, building trust and authority.',
    icon: PiStrategyBold as unknown as IconType,
  },
  {
    heading: 'Copywriting',
    service:
      'Creating high-quality, spot-on and engaging copy for various channels including blogs, websites, data sheets, solution briefs, email marketing etc. SEO optimized if needed.',
    icon: SiWritedotas as unknown as IconType,
  },
  {
    heading: 'Product marketing',
    service:
      'Developing a compelling product positioning and messaging that resonates with target audiences and establishes a competitive edge.',
    icon: GiWoodenCrate as unknown as IconType,
  },
  {
    heading: 'Media relations',
    service:
      'Building relationships with key media outlets, media tiering, pitching stories to journalists and other activities to increase brand visibility and thought leadership.',
    icon: PiTelevisionBold as unknown as IconType,
  },
  {
    heading: 'Data analytics',
    service:
      'Using analytics tools to make data-driven decisions, measuring the effectiveness of content and PR campaigns.',
    icon: BsFillClipboardDataFill as unknown as IconType,
  },
];

export const Services = () => {
  return (
    <section>
      <h2>Services</h2>
      <div>
        {services.map((service) => (
          <div key={service.heading}>
            <service.icon className={styles.serviceIcon} />
            <h3>{service.heading}</h3>
            <p>{service.service}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
