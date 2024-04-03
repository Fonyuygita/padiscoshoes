import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdToCart = ({quantity}) => {
  // const itemCount=0;
  return (
    <Link className=' relative rounded-full ml-8 border-red-3 flex justify-center items-center  ' href="/cart">
      <Image src="/cart.png" width={24} height={24} className='p-1 cover flex items-center justify-center mb-3 rounded-full bg-blue-950 ' alt='cart'/>
      <sup className=" absolute h-4 w-4 bg-red-600 rounded-full text-white font-bold top-[-8px] flex items-center justify-center left-4">{quantity}</sup>
    </Link>
  )
}

export default AdToCart
