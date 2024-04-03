"use client"
import { useCart } from '@/ContextProvider'
import CartItem from '@/components/add-to-cart'
import { products } from '@/lib/products'
import {FaPlus} from "react-icons/fa"
import Link from "next/link"

import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

// const products=[
    
//     {

//         id: 1,
//         name: "Vintage Camera",
//         description: "A perfect camera for photography enthusiasts.",
//         image:
//           "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//           price:123,
//           quantity:0},
//           {

//             id: 2,
//             name: "Vintage Camera",
//             description: "A perfect camera for photography enthusiasts.",
//             image:
//               "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//               price:123,
//               quantity:0},

//               {

//                 id: 3,
//                 name: "Vintage Camera",
//                 description: "A perfect camera for photography enthusiasts.",
//                 image:
//                   "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   price:123,
//                   quantity:0},
//                   {

//                     id: 4,
//                     name: "Vintage Camera",
//                     description: "A perfect camera for photography enthusiasts.",
//                     image:
//                       "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                       price:123,
//                       quantity:0},
            
    

          
// ]

   



const CartPage = () => {
  const {items, totalPrice}=useCart()

    const router=useRouter()

    const handleCheckedOut=()=>{
        toast.success("Item checked out successfully");
        router.push('/');
      }
  return (
    <>
    {items.map(product=>(

        <CartItem product={product} key={product.id}/>

    ))}
    <div className="flex items-center justify-center w-[30%] mx-auto mt-4 gap-6">
    <Link href="/gallery"   className="outline-none border-none text-sm p-2 lg:p-4  ring-1 text-white bg-blue-700 w-full text-center hover:bg-blue-500 flex items-center justify-center gap-3 rounded-full md:rounded-lg"> <span className="hidden md:flex">Add More</span>  <FaPlus/></Link>
 <button onClick={handleCheckedOut}  className="outline-none border-none text-sm p-2 lg:p-4 rounded-lg ring-1 text-white bg-red-800 w-full text-center hover:bg-red-500">Checkout</button>
 </div>
    </>
  )
}

export default CartPage
