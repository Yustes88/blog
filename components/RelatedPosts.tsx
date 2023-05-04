import PostPreview from "./PostPreview"

export function RelatedPosts({posts, post}) {
  return(
    <div className="bg-white px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <div className="mx-auto text-left py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Related posts</h2>
        </div>

        <div>
        {posts.map((item) => {
          return item.data.categoryTitle === post.data.categoryTitle && item.data.id !== post.data.id ? <PostPreview post={item.data} key={item.data.id} slug={item.slug}/> : null
        })}
        </div>

      </div>
    </div>
  )
}