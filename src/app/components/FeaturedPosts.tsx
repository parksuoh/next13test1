import React from 'react'
import { getGearturedPosts } from '../service/posts'
import PostsGrid from './PostsGrid'

export default async function FeaturedPosts() {

    const posts = await getGearturedPosts();



  return (
    <section className='my-2'>
        <h2 className='text-2xl font-bold my-2'>Featured Post</h2>
        <PostsGrid posts={posts} />
    </section>
  )
}
