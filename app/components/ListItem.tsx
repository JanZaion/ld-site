import Link from 'next/link';

import { getFormattedDate } from '@/lib/getFormattedDate';

type PostProps = {
  post: BlogPost;
};

const ListItem = ({ post: { id, title, date } }: PostProps) => {
  const formattedDate = getFormattedDate(date);

  return (
    <li>
      <Link
        href={`/posts/${id}`}
        style={{
          color: 'red',
          textDecoration: 'underline',
        }}
      >
        {title}
      </Link>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
};

export default ListItem;
