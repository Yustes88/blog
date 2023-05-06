'use client'
import { useState } from "react"
import FilterPosts from "./FilterPosts"
import PostPreview from "./PostPreview"
import SortPosts from "./SortPosts"
import { Post } from "@/types/types"

type AllPostsListProps = {
  posts: Post[]
}

export default function AllPostsList({posts}: AllPostsListProps) {
  const [blogPosts, setBlogPosts] = useState(posts)

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#adb5bd] to-[#868e96] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
        <div className="mx-auto text-left">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">All posts</h2>
        </div>

        <div className="flex justify-between	">
          <div className="pt-4">
        <span className="pr-4">Filter:</span><FilterPosts posts = {posts} setBlogPosts={setBlogPosts}/>
          </div>
          <div>
            <SortPosts posts={blogPosts} setBlogPosts = {setBlogPosts}/>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <PostPreview post={post.data} key={post.data.id} slug={post.slug}/>
          ))}
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:right-[calc(100%-30rem)]"
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
  )
}

