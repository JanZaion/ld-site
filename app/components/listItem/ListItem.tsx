import Link from 'next/link';

import styles from './ListItem.module.css';

import { getFormattedDate } from '@/lib/getFormattedDate';

type PostProps = {
  post: BlogPost;
  linkClassName?: string;
  liClassName?: string;
  isArrow?: boolean;
  isPerex?: boolean;
  isReadMore?: boolean;
};

export const ListItem = ({
  post: { id, title, date, perex },
  linkClassName,
  liClassName,
  isArrow,
  isPerex,
  isReadMore,
}: PostProps) => {
  const formattedDate = getFormattedDate(date);

  return (
    <li className={liClassName}>
      <span className={styles.arrowSpan}>{isArrow && `→ `}</span>
      <Link className={linkClassName} href={`/blog/${id}`}>
        {title}
      </Link>
      <br />
      <p>{formattedDate}</p>
      {isPerex && <p>{perex}</p>}
      {isReadMore && <Link href={`/blog/${id}`}>Read more</Link>}
    </li>
  );
};
