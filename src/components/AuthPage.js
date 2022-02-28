import React from 'react'

export default function AuthPage() {
  return(
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-b from-indigo-400 to-purple-700'>
      <div className='max-w-sm h-auto p-20 bg-gradient-to-r from-indigo-600 to-purple-900 border-2 border-black rounded-xl shadow-lg'>
        <button className='bg-orange-500 text-white font-bold px-4 py-2 rounded-md shadow-md hover:bg-orange-600 hover:shadow-2xl transition duration-300'>
          Auth with Metamask
        </button>
      </div>
    </div>
  )
}
