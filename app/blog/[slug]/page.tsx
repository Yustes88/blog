import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/GetPostsData";
import PostFull from "@/components/PostFull";
import { Nav } from "@/components/Nav";
import PostPreview from "@/components/PostPreview";

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
  const postsData = getPostMetadata();
  return (
    <>
    <Nav/>
    <div className="grid grid-cols-12 gap-8">
  <div className="col-span-8">
    <PostFull post = {post}/>
  </div>
  <div className="col-span-4">
    <div className="grid grid-cols-1 gap-4">
    <div>
        {postsData.map((item) => {
              return item.data.categoryTitle === post.data.categoryTitle ? <PostPreview post={item.data} key={item.data.id} slug={item.slug}/> : null
            })}
        </div>
    </div>
  </div>
</div>
    </>
  );
};

export default PostPage;