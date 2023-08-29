import Link from 'next/link';
import { notFound } from 'next/navigation';

import styles from './Post.module.css';

import { getSortedPostsData, getPostData } from '@/lib/blog';
import { getFormattedDate } from '@/lib/getFormattedDate';

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.some((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className={styles.blogContainer}>
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <article>
        {/* eslint-disable-next-line react/no-danger */}
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      <div className={styles.bottomLink}>
        <Link href="/blog">← Back to articles</Link>
      </div>
    </main>
  );
}
