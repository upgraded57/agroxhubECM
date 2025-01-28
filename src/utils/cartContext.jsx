import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    return;
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item) => {
    // Check if item exists in the cart already
    const itemExists = cart.some((c) => c.slug === item.slug);

    if (itemExists) {
      // Remove previous item and add the new one
      const newCart = cart.filter((c) => c.slug !== item.slug);
      setCart([...newCart, item]);
    } else {
      // Add new item if it doesn't exist
      setCart((prevCart) => [...prevCart, item]);
    }

    toast.success("Product added to cart", { id: "cartToast" });
  };

  const removeFromCart = (slug) => {
    setCart((prevCart) => prevCart.filter((c) => c.slug !== slug));
    toast.success("Product removed from cart", { id: "cartToast" });
  };

  const clearCart = () => {
    console.log("Cart will clear", cart);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
