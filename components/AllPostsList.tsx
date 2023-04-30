import PostPreview from "./PostPreview"

//TODO fix types
export default function AllPostsList({posts}: any) {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-left">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">All posts</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: any) => (
            <PostPreview post={post.data} key={post.data.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

