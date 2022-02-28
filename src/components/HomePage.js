import React from 'react'

export default function HomePage({currentAccount}) {
  return(
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-b from-indigo-400 to-purple-700'>
      <div className='max-w-md h-auto px-4 py-4 flex flex-col bg-gray-200 border-2 border-black rounded-xl shadow-lg'>
        <p className="font-bold mb-1">👛 {' '} Wallet Address</p>
        <p className="text-xs md:text-md lg:text-lg mb-4">{currentAccount}</p>
        <p className="font-bold mb-1">⛓️  {''} ChainId</p>
        <p className='text-xs md:text-md lg:text-lg mb-4'>0x4</p>
      </div>
    </div>
 )
}
