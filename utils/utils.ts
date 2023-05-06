import { Post } from "@/types/types";

// TODO fix types
export const filteredPostsByCategory = ((currentCategory: string, posts: Post[]) => {
  if(currentCategory === 'All') {
    return posts
  }
    return posts.filter((post) => post.data.categoryTitle === currentCategory);
  })


  export const sortByDateDescending = (
    a: Post,
    b: Post
  ): number => {
    const dateA = parseDate(a.data.date);
    const dateB = parseDate(b.data.date);
    return dateB.getTime() - dateA.getTime();
  };
  
  function parseDate(date: string | number | Date): Date {
    if (typeof date === 'string' || typeof date === 'number') {
      return new Date(date);
    }
    return date;
  }

  export const sortByDateAscending = (a: Post, b: Post): number => {
    const dateA = parseDate(a.data.date);
  const dateB = parseDate(b.data.date);
    return dateA.getTime() - dateB.getTime();
  }

  export const getSortedPosts = (currentSorting: string, filteredPosts: Post[]) => {
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