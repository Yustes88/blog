import Image from "next/image"

//TODO fix type
export default function PostPreview({post, type}: any) {
  return (
            <article key={post.id} className="flex flex-col items-start justify-between">
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
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categoryTitle}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image src={post.imageUrl} alt="" width={10} height={10} className="object-cover h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.authorHref}>
                        <span className="absolute inset-0" />
                        {post.authorName}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.auhtorRole}</p>
                  </div>
                </div>
              </div>
            </article>
          
  )
}