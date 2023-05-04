import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/GetPostsData";
import PostFull from "@/components/PostFull";
import { Nav } from "@/components/Nav";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};


const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
    <Nav/>
    <PostFull post = {post}/>
    </>
  );
};

export default PostPage;