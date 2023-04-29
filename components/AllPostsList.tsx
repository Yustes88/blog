import PostPreview from "./PostPreview"

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      '',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        '',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut. Mi sit amet mauris commodo quis imperdiet. Ut placerat orci nulla pellentesque dignissim enim sit. Ut morbi tincidunt augue interdum velit euismod. Ultrices dui sapien eget mi proin sed libero enim. Iaculis eu non diam phasellus vestibulum. Pretium fusce id velit ut tortor pretium viverra. Viverra mauris in aliquam sem fringilla ut. Nulla aliquet porttitor lacus luctus. Amet tellus cras adipiscing enim eu. Tempus egestas sed sed risus pretium. Sed cras ornare arcu dui vivamus arcu felis bibendum. Tortor pretium viverra suspendisse potenti nullam ac tortor. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Fusce id velit ut tortor. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Lobortis feugiat vivamus at augue eget arcu. Duis at tellus at urna condimentum mattis pellentesque id. Sagittis orci a scelerisque purus semper. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. '
  },
  // More posts...
]

export default function AllPostsList() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-left">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">All posts</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostPreview post={post} key={post.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}
