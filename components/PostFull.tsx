'use client'

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'

export default function PostFull({post}) {
  console.log(post)
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      
        <p className="text-base font-semibold leading-7 text-indigo-600">{post.data.categoryTitle}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.data.title}</h1>
        <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="text-gray-900">
              <p>
                {post.data.description}
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <Image
              width={100}
              height={100}
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src={post.data.authorUrl}
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">{post.data.authorName}</strong> – {post.data.authorRole}
              </div>
            </figcaption>
          </figure>
        <figure className="mt-16">
          <Image
          width={1000}
          height={1000}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={post.data.imageUrl}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            {post.data.title}
          </figcaption>
        </figure>
        <div className="mt-10 max-w-2xl">
        <Markdown>{post.content}</Markdown>
        </div>

      </div>
    </div>
  )
}
