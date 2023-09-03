import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import externalLinks from 'remark-external-links';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: String(matterResult.data.title),
      date: String(matterResult.data.date),
      perex: String(matterResult.data.perex),
      description: String(matterResult.data.description),
    };

    // Combine the data with the id
    return blogPost;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: String(matterResult.data.title),
    date: String(matterResult.data.date),
    perex: String(matterResult.data.perex),
    description: String(matterResult.data.description),
    contentHtml,
  };

  // Combine the data with the id
  return blogPostWithHTML;
}
