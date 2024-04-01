"use client"

import { createContext, useContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {
  const [items, setItems] = useState([]);
  const addItem = (product, size) => {


    // create a check point to avoid duplicating items in your items
const existingItem=items.find(item=>item.product===product && item.size===size);

// if here is an existing item already in our list we want to update it instead of recreating it from scratch

if(existingItem){
  // call the update function here
  updatedQuantity(existingItem.id, 1)
  // then stop the execution
  return
}

// if the item does not exist, create a new one  


    const newCartItem= {
      ...product,
    };

    setItems([newCartItem, ...items]);
    console.log(items);
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
  const totalPrice=items.reduce((sum, item)=>(sum+=item.price * item.quantity ), 0);

  return (
    <CartContext.Provider value={{ items, addItem, updatedQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
