
import AllPostsList from '@/components/AllPostsList'
import getPostMetadata from '@/components/GetPostsData';
import Header from '@/components/Header'
import TopPosts from '@/components/TopPosts';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


//TODO fix types
export default function Home() {
  const postsData = getPostMetadata();

  return (
    <>
    <Header/>
    <TopPosts posts={postsData}/>
    <AllPostsList posts = {postsData}/>
    </>
    )
}
