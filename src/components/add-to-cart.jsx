"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import {FaPlus, FaMinus} from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/ContextProvider';

const CartItem=({ product }) =>{
  const {updatedQuantity, addItems} = useCart();
  const [quantity, setQuantity] = useState(product.quantity);
const {totalPrice}=useCart()
  
  return (
    <div className="p-4 shadow-lg flex items-center justify-between">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image src={product.imageUrl} alt={product.name} width={70} height={70} className='object-fit rounded-full' />
      </motion.div>
      <div className='flex flex-col items-center justify-center '>
        <Link href={`/product/${product.id}`} className=" font-bold text-sm md:text-lg">
          {product.name}
        </Link>
        <p className="text-bold bg-black text-white p-2  text-sm md:text-sm rounded-full w-6 h-6 flex items-center justify-center my-4">{product.quantity}</p>
        <div className="flex items-center justify-center gap-4">
        <p className="text-bold bg-yellow-700 text-white p-2  text-sm md:text-sm rounded-full w-6 h-6 flex items-center justify-center  ">{product.sizes}</p>
        <p className="text-bold  rounded-md p-2 text-white bg-red-700 text-sm md:text-sm ">{totalPrice}XAF</p>
        </div>
       
      </div>
      <div className='flex items-center justify-center gap-3'>
        <button onClick={()=>updatedQuantity(product.id, 1)}>
          <FaPlus size={30} className="h-6 w-6 bg-blue-800 p-2 text-white rounded-full flex items-center justify-center" />
        </button>
        <button onClick={()=>updatedQuantity(product.id, -1)}>
          <FaMinus size={30} className="h-6 w-6 bg-red-800 p-2 text-white rounded-full flex items-center justify-center" />
        </button>
       
      </div>
    </div>
  );
}
export default CartItem