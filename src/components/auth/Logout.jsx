import React from 'react'
import { useState } from 'react'

const Logout = () => {
    const handleLogout = () =>{
        localStorage.removeItem("userlogin")
        window.location = "/"
    }
  return (
    <div className='absolute top-2 right-3'>
      <button type="button" onClick={handleLogout} class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  Button
</button>
    </div>
  )
}

export default Logout
