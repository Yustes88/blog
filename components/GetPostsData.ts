import { Post, PostData } from '@/types/types';
import fs from 'fs';
import matter from 'gray-matter';



export const getPostMetadata = (): Post[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(`posts/${fileName}`, 'utf-8');

    const slug = fileName.replace('.md', '');
    const { data } = matter(markdownWithMeta);

    const postData: PostData = {
      id: data.id,
      title: data.title,
      description: data.description,
      date: data.date,
      datetime: data.datetime,
      authorName: data.authorName,
      authorRole: data.authorRole,
      authorHref: data.authorHref,
      authorUrl: data.authorUrl,
      categoryTitle: data.categoryTitle,
      categoryHref: data.categoryHref,
      imageUrl: data.imageUrl,
      rating: data.rating,
      size: data.size,
      content: '',
      data: undefined
    };

    return {
      slug,
      data: postData,
    };
  });

  return posts;
};

export default getPostMetadata;
