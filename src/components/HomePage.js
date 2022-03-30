import React from 'react'

const style = {
  main: 'w-screen h-screen flex justify-center items-center bg-gradient-to-b from-indigo-400 to-purple-700',
  card: 'max-w-lg h-auto px-4 py-4 flex flex-col bg-gray-200 border-2 border-black rounded-xl shadow-lg',
  title: 'font-bold mb-1',
  text: 'text-xs md:text-md lg:text-lg mb-4',
}

export default function HomePage() {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>👛 Wallet Address</p>
        <p className={style.text}>0x00000000000000000000000000000000000000</p>
        <p className={style.title}>⛓️ {''} ChainId</p>
        <p className={style.text}>0x4</p>
      </div>
    </div>
  )
}
