"use client"
import CartItem from '@/components/add-to-cart'

import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const products=[
    
    {

        id: 1,
        name: "Vintage Camera",
        description: "A perfect camera for photography enthusiasts.",
        image:
          "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price:123,
          quantity:0},
          {

            id: 2,
            name: "Vintage Camera",
            description: "A perfect camera for photography enthusiasts.",
            image:
              "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              price:123,
              quantity:0},

              {

                id: 3,
                name: "Vintage Camera",
                description: "A perfect camera for photography enthusiasts.",
                image:
                  "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  price:123,
                  quantity:0},
                  {

                    id: 4,
                    name: "Vintage Camera",
                    description: "A perfect camera for photography enthusiasts.",
                    image:
                      "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                      price:123,
                      quantity:0},
            
    

          
]

   



const CartPage = () => {

    const router=useRouter()

    const handleCheckedOut=()=>{
        toast.success("Item checked out successfully");
        router.push('/');
      }
  return (
    <>
    {products.map(product=>(

        <CartItem product={product} key={product.id}/>

    ))}
    <div className="flex items-center justify-center w-[40%] mx-auto mt-4">
 <button onClick={handleCheckedOut}  className="outline-none border-none text-sm p-2 lg:p-4 rounded-lg ring-1 text-white bg-blue-700 w-full text-center hover:bg-blue-500">Checkout</button>
 </div>
    </>
  )
}

export default CartPage
