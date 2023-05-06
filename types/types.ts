export interface PostData {
  content: string;
  data: any;
  id: number;
  title: string;
  description: string;
  date: string;
  datetime: string;
  authorName: string;
  authorRole: string;
  authorHref: string;
  authorUrl: string;
  categoryTitle: string;
  categoryHref: string;
  imageUrl: string;
  rating?: string;
  size?: number;
}

export interface Post {
  slug: string;
  data: PostData;
}
