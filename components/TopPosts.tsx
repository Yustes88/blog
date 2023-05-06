import { Post } from "@/types/types"
import PostPreview from "./PostPreview"


type TopPostsProps = {
  posts: Post[]
}

export default function TopPosts({posts}: TopPostsProps) {

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">

      <div className="mx-auto text-left pb-20">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top posts</h2>
        </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 z-10">
        <div>
        {posts.map((post) => {
              return post.data.rating === 'top' ? <PostPreview post={post.data} key={post.data.id} slug={post.slug}/> : null
            })}
        </div>
        <div className="flex flex-col	justify-between	">
        {posts.map((post) => {
              return post.data.rating === 'sub' ? <PostPreview post={post.data} key={post.data.id} slug={post.slug} type={'sub'}/> : null
})}
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:right-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#adb5bd] to-[#868e96] opacity-30 sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    </div>
  )
}
