'use client'

import { ArrowLongLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import Link from 'next/link'

export default function PostFull({post}) {
  console.log(post)
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">

        <div className="relative mt-8 mb-6 flex items-center gap-x-4">
          <span className='link-underline link-underline-gray'>
            <Link href='/' className="flex">
                <ArrowLongLeftIcon className="mt-0.5 h-5 w-5 flex-none text-gray-500" aria-hidden="true"/>
                  <h2 className="px-2">Read more</h2>
            </Link>
          </span>
         </div>

        <a
                  href={post.data.categoryHref}
                    className="relative z-10 rounded-full border-solid border border-gray-200 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.data.categoryTitle}
                  </a>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.data.title}</h1>
        <figure className="mt-10 border-l border-gray-600 pl-9">
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
