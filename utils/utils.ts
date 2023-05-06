// TODO fix types
export const filteredPostsByCategory = ((currentCategory, posts) => {
  if(currentCategory === 'All') {
    return posts
  }
    return posts.filter((post) => post.data.categoryTitle === currentCategory);
  })

  export const sortByDateDescending = (a, b) => {
    const dateA = new Date(a.data.date);
  const dateB = new Date(b.data.date);
  return dateB - dateA;
  }

  export const sortByDateAscending = (a, b) => {
    const dateA = new Date(a.data.date);
  const dateB = new Date(b.data.date);
    return dateA - dateB;
  }

  export const getSortedPosts = (currentSorting, filteredPosts) => {
      switch (currentSorting) {
        case 'Newest first':
          console.log('sorted!')
          return filteredPosts.sort(sortByDateDescending);
        case 'Oldest first':
          console.log('sorted oldest!')
          return filteredPosts.sort(sortByDateAscending);
          default:
            return filteredPosts;
      }
    }

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }