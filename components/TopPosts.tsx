import Image from "next/image"
import PostPreview from "./PostPreview"


export default function TopPosts({posts}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        {posts.map((post) => {
              return post.data.rating === 'top' ? <PostPreview post={post.data} key={post.data.id} /> : null
})}
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post) => {
              return post.data.rating === 'sub' ? <PostPreview post={post.data} key={post.data.id} /> : null
})}
          </div>
        </div>
      </div>
    </div>
  )
}
