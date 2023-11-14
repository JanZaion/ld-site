import Link from 'next/link';

import { ListItem } from '../listItem/ListItem';

import styles from './RecentWriting.module.css';

import { getSortedPostsData } from '@/lib/blog';

export const RecentWriting = () => {
  const posts = getSortedPostsData();

  return (
    <section>
      <h2>Recent Writing</h2>
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
      → <Link href="/blog">See all posts</Link>
    </section>
  );
};
