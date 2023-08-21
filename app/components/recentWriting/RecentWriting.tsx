import Link from 'next/link';

import { Dot } from '../dot/Dot';
import { ListItem } from '../listItem/ListItem';

import styles from './RecentWriting.module.css';

import { getSortedPostsData } from '@/lib/posts';

export const RecentWriting = () => {
  const posts = getSortedPostsData();

  return (
    <section>
      <h2>
        Recent Writing
        <Dot />
      </h2>
      <ul className={styles.postList}>
        {posts.slice(0, 4).map((post) => (
          <ListItem
            key={post.id}
            isArrow
            linkClassName={styles.listLink}
            post={post}
          />
        ))}
      </ul>
      → <Link href="/posts">See all posts</Link>
    </section>
  );
};
