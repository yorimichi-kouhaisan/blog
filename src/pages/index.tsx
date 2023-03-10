import fs from'fs'
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import Layout from "@/components/Layout"
import Post from '@/components/Post';
import { PostProps, PostsProps, sortByDate } from '../utils/post'


export default function Home( {posts} : PostsProps) {

  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          return (
          <Post key={post.frontmatter.title} slug={post.slug} frontmatter={post.frontmatter} />
          )
        })}
      </div>

      <Link href={'/blog'} className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5
                                      transition duration-500 ease select-none hover:text-white hover:bg-gray-900
                                      focus:outline-none focus:shadow-outline w-full">
        More Posts
      </Link>
    </Layout>

  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"))
  const posts = files.map( (filename) => {
      const slug = filename.replace('.md', '')
      const markdownWithMeta = fs.readFileSync(path.join('src/posts', filename), 'utf-8')
      const {data: frontmatter} = matter(markdownWithMeta)
      return {
          slug,
          frontmatter,
      }
  })

  return {
      props: {
          posts: posts.sort(sortByDate)
      },
  }
}
