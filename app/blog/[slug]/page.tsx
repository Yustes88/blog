import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/GetPostsData";
import PostFull from "@/components/PostFull";
import { RelatedPosts } from "@/components/RelatedPosts";

export interface PostData {
  content: string;
  data: any;
  id: number;
  title: string;
  description: string;
  date: string;
  datetime: string;
  authorName: string;
  authorRole: string;
  authorHref: string;
  authorUrl: string;
  categoryTitle: string;
  categoryHref: string;
  imageUrl: string;
  rating?: string;
  size?: number;
  slug: string;
}

const getPostContent = (slug: string): PostData => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  const data = matterResult.data as Omit<PostData, "content">;
  const post: PostData = {
    ...data,
    content: matterResult.content,
    slug,
  };
  return post;
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