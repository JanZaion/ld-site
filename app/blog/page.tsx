import { ListItem } from '../components/listItem/ListItem';

import styles from './Blog.module.css';

import { getSortedPostsData } from '@/lib/blog';

const Blog = () => {
  const posts = getSortedPostsData();

  return (
    <main>
      <h1>Blog</h1>
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
