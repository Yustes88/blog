import PostPreview from "./PostPreview"


export default function TopPosts({posts}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
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
  )
}
