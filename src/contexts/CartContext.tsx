
import React, { createContext, useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import type { Product, CartItem } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  subtotal: 0
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from localStorage on initial render
    const savedCart = localStorage.getItem('amazonCloneCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('amazonCloneCart', JSON.stringify(cart));
    
    // Calculate totals
    const items = cart.reduce((total, item) => total + item.quantity, 0);
    const price = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    
    setTotalItems(items);
    setSubtotal(price);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      // Check if product is already in cart
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // If already in cart, increase quantity
        const updatedCart = prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast({
          title: "Added to Cart",
          description: `${product.title} quantity increased to ${existingItem.quantity + 1}`
        });
        return updatedCart;
      } else {
        // If not in cart, add it with quantity 1
        toast({
          title: "Added to Cart",
          description: `${product.title} has been added to your cart`
        });
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const removedItem = prevCart.find(item => item.product.id === productId);
      if (removedItem) {
        toast({
          title: "Removed from Cart",
          description: `${removedItem.product.title} has been removed from your cart`
        });
      }
      return prevCart.filter(item => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => 
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );
      
      const updatedItem = updatedCart.find(item => item.product.id === productId);
      if (updatedItem) {
        toast({
          title: "Cart Updated",
          description: `${updatedItem.product.title} quantity updated to ${quantity}`
        });
      }
      
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart"
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
