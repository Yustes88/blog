
import AllPostsList from '@/components/AllPostsList'
import getPostMetadata from '@/components/GetPostsData';
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


//TODO fix types
export default function Home() {
  const postsData = getPostMetadata();
  console.log(postsData)

  return (
    <>
    <Header/>
    <AllPostsList posts = {postsData}/>
    </>
    )
}
