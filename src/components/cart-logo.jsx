import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdToCart = () => {
  return (
    <Link className='  rounded-full ml-8 border-red-3 flex justify-center items-center' href="/cart">
      <Image src="/cart.png" width={24} height={24} className='cover flex items-center justify-center bg-blue-950 mb-3 rounded-full' alt='cart'/>
    </Link>
  )
}

export default AdToCart
