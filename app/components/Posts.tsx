import ListItem from './ListItem';

import { getSortedPostsData } from '@/lib/posts';

export const Posts = () => {
  const posts = getSortedPostsData();

  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
