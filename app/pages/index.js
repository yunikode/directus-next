import Head from 'next/head'

import {useQuery} from 'react-query'
import {getHomepagePosts} from '../queries/queries'

import PostCard from '../components/PostCard'

export default function Home() {

  const {status, data: posts, error, isFetching, isSuccess} = useQuery('posts', async () => await getHomepagePosts())

  return (
    <div className="flex flex-col items-center min-h-screen py-2 max-w-2xl mx-auto">
      <Head>
        <title>Directus Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess && posts.map(post => <PostCard key={post.id} title={post.title} body={post.body} image={post.featured_image.id}/> )}

    </div>
  )
}
