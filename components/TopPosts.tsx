import PostPreview from "./PostPreview"


export default function TopPosts({posts}) {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <div className="mx-auto text-left pb-20">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top posts</h2>
        </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
        <div>
        {posts.map((post) => {
              return post.data.rating === 'top' ? <PostPreview post={post.data} key={post.data.id} /> : null
            })}
        </div>
        <div className="flex flex-col	justify-between	">
        {posts.map((post) => {
              return post.data.rating === 'sub' ? <PostPreview post={post.data} key={post.data.id} type={'sub'}/> : null
})}
        </div>
      </div>
    </div>
    </div>
  )
}
