import Link from 'next/link';

import styles from './ListItem.module.css';

import { getFormattedDate } from '@/lib/getFormattedDate';

type PostProps = {
  post: BlogPost;
};

export const ListItem = ({ post: { id, title, date } }: PostProps) => {
  const formattedDate = getFormattedDate(date);

  return (
    <li>
      →{' '}
      <Link className={styles.listLink} href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
};
