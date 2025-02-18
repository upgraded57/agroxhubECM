import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  useAddItemToCart,
  useGetCartItems,
  useRemoveItemFromCart,
} from "../api/cart";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {
    isLoading: isLoadingCart,
    data: cartItems,
    refetch,
  } = useGetCartItems();
  const { mutateAsync: addItemToCart, isLoading: isAddingItemToCart } =
    useAddItemToCart();

  const { mutateAsync: removeItemFromCart, isLoading: isRemovingItem } =
    useRemoveItemFromCart();

  const userId = localStorage.getItem("userId") || null;

  // Refetch cart data
  useEffect(() => {
    if (userId) {
      refetch();
    }
  }, []);

  // Sync cart
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setCart(cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }
  }, [cartItems]);

  // Save to localStorage whenever cart updates
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (item) => {
    if (userId) {
      addItemToCart(item).then((res) => {
        setCart(res.data.cart);
      });
    } else {
      const itemExists = cart.some((c) => c.slug === item.slug);
      if (itemExists) {
        setCart((prevCart) =>
          prevCart.map((c) => (c.slug === item.slug ? item : c))
        );
      } else {
        setCart((prevCart) => [...prevCart, item]);
      }
      toast.success("Product added to cart", { id: "cartToast" });
    }
  };

  // Remove item from cart
  const removeFromCart = (slug) => {
    if (userId) {
      removeItemFromCart(slug).then((res) => {
        setCart(res.data.cart);
      });
    } else {
      setCart((prevCart) => prevCart.filter((c) => c.slug !== slug));
      toast.success("Product removed from cart", { id: "cartToast" });
    }
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isAddingItemToCart,
        isLoadingCart,
        refetch,
        isRemovingItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
