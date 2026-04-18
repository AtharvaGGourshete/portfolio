import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='p-3'>
        <div className='flex justify-between mx-40 items-center'>
            <div className='text-2xl'>AG<span className='text-yellow-500 text-5xl'>.</span></div>
            <div className='flex text-md gap-3'>
            <span className='hover:underline cursor-pointer'>Home</span>
            <span className='hover:underline cursor-pointer'>About</span>
            <span className='hover:underline cursor-pointer'>Projects</span>
            <span className='hover:underline cursor-pointer'>Certifications</span>
            <span className='hover:underline cursor-pointer'>Experience</span>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar