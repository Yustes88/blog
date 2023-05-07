import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/GetPostsData";
import PostFull from "@/components/PostFull";
import { RelatedPosts } from "@/components/RelatedPosts";

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
  console.log(post)
  const postsData = getPostMetadata();
  return (
    <>
    
  <div className="col-span-12 md:col-span-8">
    <PostFull post = {post}/>
  </div>

  <div className="col-span-12 md:col-span-4">
    <RelatedPosts post = {post} posts = {postsData}/>
    </div>
    </>
  );
};

export default PostPage;