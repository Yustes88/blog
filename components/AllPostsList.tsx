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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut. Mi sit amet mauris commodo quis imperdiet. Ut placerat orci nulla pellentesque dignissim enim sit. Ut morbi tincidunt augue interdum velit euismod. Ultrices dui sapien eget mi proin sed libero enim. Iaculis eu non diam phasellus vestibulum. Pretium fusce id velit ut tortor pretium viverra. Viverra mauris in aliquam sem fringilla ut. Nulla aliquet porttitor lacus luctus. Amet tellus cras adipiscing enim eu. Tempus egestas sed sed risus pretium. Sed cras ornare arcu dui vivamus arcu felis bibendum. Tortor pretium viverra suspendisse potenti nullam ac tortor. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Fusce id velit ut tortor. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Lobortis feugiat vivamus at augue eget arcu. Duis at tellus at urna condimentum mattis pellentesque id. Sagittis orci a scelerisque purus semper. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Nec nam aliquam sem et tortor consequat id porta. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Id ornare arcu odio ut sem. Duis ut diam quam nulla porttitor massa id neque. Eget duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare arcu odio ut. Aliquet eget sit amet tellus cras adipiscing. Vel quam elementum pulvinar etiam. Sit amet luctus venenatis lectus magna fringilla urna. Bibendum enim facilisis gravida neque. Tellus mauris a diam maecenas sed enim ut sem. Molestie nunc non blandit massa enim nec dui. Tortor at auctor urna nunc id. Consectetur adipiscing elit ut aliquam. Amet justo donec enim diam. Ultrices gravida dictum fusce ut placerat orci nulla. Sit amet est placerat in egestas erat imperdiet. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Massa placerat duis ultricies lacus. Felis bibendum ut tristique et egestas quis. Morbi tristique senectus et netus et malesuada fames ac. Pharetra magna ac placerat vestibulum lectus mauris. Ullamcorper a lacus vestibulum sed arcu non odio euismod. At consectetur lorem donec massa sapien faucibus et. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ipsum nunc aliquet bibendum enim facilisis. Mauris augue neque gravida in fermentum et sollicitudin. Donec pretium vulputate sapien nec. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Tortor id aliquet lectus proin nibh nisl. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Est ante in nibh mauris cursus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Amet nisl purus in mollis. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mauris cursus mattis molestie a iaculis at erat pellentesque. Urna nec tincidunt praesent semper. Vel pretium lectus quam id leo in vitae turpis massa. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Sit amet venenatis urna cursus eget nunc scelerisque. Libero justo laoreet sit amet. Nam at lectus urna duis convallis convallis tellus id. Id diam vel quam elementum. Faucibus nisl tincidunt eget nullam non.'
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
