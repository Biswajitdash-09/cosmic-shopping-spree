
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const { cart, subtotal, totalItems } = useCart();
  
  // Calculate shipping fee (free if subtotal > 35)
  const shippingFee = subtotal > 35 ? 0 : 5.99;
  
  // Calculate tax (8.25%)
  const estimatedTax = subtotal * 0.0825;
  
  // Calculate order total
  const orderTotal = subtotal + shippingFee + estimatedTax;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-sm text-center py-16">
            <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-bold">Cart Items ({totalItems})</h2>
                  <span className="text-sm text-gray-600">Price</span>
                </div>
                
                <div className="divide-y">
                  {cart.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
                
                <div className="text-right mt-4 text-lg font-bold">
                  Subtotal ({totalItems} items): ${subtotal.toFixed(2)}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Items ({totalItems}):</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shippingFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Estimated tax:</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Order total:</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
                  Proceed to Checkout
                </Button>
                
                {shippingFee === 0 && (
                  <div className="mt-4 text-sm text-green-600 text-center">
                    Your order qualifies for FREE Shipping!
                  </div>
                )}
                
                {shippingFee > 0 && (
                  <div className="mt-4 text-sm text-center">
                    Add more items worth ${(35 - subtotal).toFixed(2)} to qualify for FREE Shipping
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
