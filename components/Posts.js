import React from 'react'
import { useGetPostsQuery } from '../reduxsetup/dataApi'

const Posts = () => {
  const {data}=useGetPostsQuery()
  return (
    <>
    {data?.map((post,i)=>(
      <div key={`${post.title+i}`} className={'flex items-center flex-col container mx-auto'}>
      <h1 className='text-2xl'>{post.title}</h1>
      <p className=''>{post.body}</p>
      </div>
    ))}
    </>
  )
}

export default Posts