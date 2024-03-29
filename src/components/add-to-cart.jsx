"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import {FaPlus, FaMinus} from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';

const CartItem=({ product }) =>{
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="p-4 shadow-lg flex items-center justify-between">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image src={product.image} alt={product.name} width={100} height={100} className='object-fit' />
      </motion.div>
      <div className='flex flex-col items-center justify-center '>
        <Link href={`/product/${product.id}`} className=" font-bold text-sm md:text-lg">
          {product.name}
        </Link>
        <p className="text-bold rounded-md p-2  text-sm md:text-lg ">Quantity: {quantity}</p>
      </div>
      <div className='flex items-center justify-center gap-3'>
        <button onClick={handleIncrease}>
          <FaPlus size={30} className="h-6 w-6 bg-blue-800 p-2 text-white rounded-full flex items-center justify-center" />
        </button>
        <button onClick={handleDecrease}>
          <FaMinus size={30} className="h-6 w-6 bg-red-800 p-2 text-white rounded-full flex items-center justify-center" />
        </button>
      </div>
    </div>
  );
}
export default CartItem