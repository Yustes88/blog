import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(`posts/${fileName}`,
    'utf-8')

    const slug = fileName.replace('.md', '')
    const {data} = matter(markdownWithMeta)

    return {
      slug,
      data,
    };

  });

  return posts
};

export default getPostMetadata;