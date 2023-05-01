export const filteredPostsByCategory = ((currentCategory, posts) => {
  if(currentCategory === 'All') {
    return posts
  }
    return posts.filter((post) => post.data.categoryTitle === currentCategory);
  })