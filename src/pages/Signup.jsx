import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' h-[98vh] flex items-center justify-center'>
      <div className='p-4 w-2/6 rounded bg-gray-800'>
        <div className='text-2xl font-semibold'>SignUp</div>
        <input type="username" placeholder='UserName' name='username' className='bg-gray-700 px-3 py-2 my-3 rounded w-full'/>
        <input type="email" placeholder='Email' name='xyz@example.com' className='bg-gray-700 px-3 py-2 my-3 rounded w-full' required/>
        <input type="password" placeholder='Password' name='password' className='bg-gray-700 px-3 py-2 my-3 rounded w-full'/>
        <div className='w-full flex items-center justify-between'>
        <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded my-3'>SignUp</button>
        <Link to='/login' className='text-gray-400 hover:text-gray-200'>Login here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
