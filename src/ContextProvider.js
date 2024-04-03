"use client"
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product, size) => {
    const existingItem = items.find(
      (item) => item.name === product.name && item.sizes === size
    );

    if (existingItem) {
      updatedQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem = {
      ...product,
      sizes: size,
    };

    setItems([newCartItem, ...items]);
  };

  const updatedQuantity = (id, amount) => {
    const updatedItems = items.map((item) =>
      item.id !== id ? item : { ...item, quantity: amount + item.quantity }
    );

    const filteredItems = updatedItems.filter((item) => item.quantity > 0);

    setItems(filteredItems);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("items");
      const parsedItems = storedItems ? JSON.parse(storedItems) : [];
      setItems(parsedItems);
      
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("items", JSON.stringify(items));
      // console.log(items);
    }
  }, [items]);

  const totalPrice = items.reduce(
    (sum, item) =>
      (sum += parseInt(item.price) * parseInt(item.quantity)),
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, updatedQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);