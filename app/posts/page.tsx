import { Dot } from '../components/dot/Dot';
import { ListItem } from '../components/listItem/ListItem';

import styles from './Blog.module.css';

import { getSortedPostsData } from '@/lib/posts';

const Blog = () => {
  const posts = getSortedPostsData();

  return (
    <main>
      <h1>
        Blog
        <Dot />
      </h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            isPerex
            isReadMore
            liClassName={styles.postLi}
            linkClassName={styles.listLink}
            post={post}
          />
        ))}
      </ul>
    </main>
  );
};

export default Blog;
