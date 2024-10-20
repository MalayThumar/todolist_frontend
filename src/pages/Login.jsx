import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' h-[98vh] flex items-center justify-center'>
      <div className='p-4 w-2/6 rounded bg-gray-800'>
        <div className='text-2xl font-semibold'>LogIn</div>
        <input type="username" placeholder='UserName' name='username' className='bg-gray-700 px-3 py-2 my-3 rounded w-full'/>
        <input type="password" placeholder='Password' name='password' className='bg-gray-700 px-3 py-2 my-3 rounded w-full'/>
        <div className='w-full flex items-center justify-between'>
        <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded my-3'>LogIn</button>
        <Link to='/signup' className='text-gray-400 hover:text-gray-200'>SignUp here</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Login
