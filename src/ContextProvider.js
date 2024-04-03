"use client"

import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {
// Retrieve items from localStorage
const storedItems = localStorage.getItem('items');
const parsedItems = storedItems ? JSON.parse(storedItems) : [];

// Set the retrieved items as initial state using useState
const [items, setItems] = useState(parsedItems);
  const addItem = (product, size) => {
setItems(product)

    // created a check point to avoid duplicating items in your items
// const existingItem=items.find(item=>item.name===product.name && item.size===size);

const existingItem=items.find((item)=>item.name===product.name && item.sizes===size)
console.log(existingItem);

// if here is an existing item already in our list we want to update it instead of recreating it from scratch

if(existingItem){
  // call the update function here
  updatedQuantity(existingItem.id, 1)
  // then stop the execution
  return
}

// if the items does not exist, create a new one  


    const newCartItem= {
      ...product,
      sizes:size
    };

    setItems([newCartItem, ...items]);
    // console.log(items);
  };

  // updated quantity functionality

  const updatedQuantity = (id, amount) => {
    // update updated quantity, if id matches
    const updateQuantity = items.map((item) =>
      item.id !== id ? item : { ...item, quantity: amount + item.quantity }
    );

    // do not show item if quantity is 0, w'll filter our item above

    const filteredItem = updateQuantity.filter((item) => item.quantity > 0);

    setItems(filteredItem);
  };
// calculate the total price according to  quantity selected by user

useEffect(() => {
  // Store the items in localStorage whenever it changes
  localStorage.setItem('items', JSON.stringify(items));
}, [items])


  const totalPrice=items.reduce((sum, item)=>(sum+=parseInt(item.price) * parseInt(item.quantity) ), 0);
  
 
  // console.log(totalPrice)

  return (
    <CartContext.Provider value={{ items, addItem, updatedQuantity, totalPrice,  }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
