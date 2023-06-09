import { PostData } from "@/types/types";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image"
import Link from "next/link"

type PostPreviewProps = {
  post: PostData,
  type?: string,
  slug: string,
}

export default function PostPreview({post, type, slug }: PostPreviewProps) {
  const postSlug = slug;

  return (
            <article key={post.id} className="flex flex-col items-start justify-between sm:p-10 shadow rounded">
                {post.size && type === 'sub' ? null
                  :
                <>
                <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  width={500}
                  height={500}
                  className="object-cover aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  priority
                  />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  </> 
                }
                
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                  href={post.categoryHref}
                    className="relative z-10 rounded-full border-solid border border-gray-200 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categoryTitle}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <div>
                      <span className="absolute inset-0" />
                      {post.title}
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image src={post.authorUrl} alt="" width={100} height={100} className="object-cover h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.authorHref}>
                        <span className="absolute inset-0" />
                        {post.authorName}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.authorRole}</p>
                  </div>
                </div>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <span className="link-underline link-underline-gray">
                <Link href={`/blog/${postSlug}`} className="flex">
                  <h2 className="px-2 mb-2">Read more</h2>
                  <ArrowLongRightIcon className="mt-0.5 h-5 w-5 flex-none text-gray-500" aria-hidden="true"/>
                </Link>
                </span>
              </div>
            </article>
          
  )
}