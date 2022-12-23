import React from 'react'
import { useGetUsersQuery } from '../reduxsetup/dataApi'

const Users = () => {
    const {data,isLoading}=useGetUsersQuery()
  return (
    <>
    {data?.map((user,i)=>(
      <div className='flex flex-col items-center'>
        <span className='text-xl font-extrabold'>
          {user.name}
        </span>
        <span>{user.email}</span>
      </div>
    ))}
    </>
  )
}

export default Users