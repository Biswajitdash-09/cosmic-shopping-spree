
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Package, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/useCart';

const Orders = () => {
  const { cart } = useCart();
  const hasOrders = cart.length > 0;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-xl font-bold mb-2 md:mb-0">
              {hasOrders ? 'Recent Orders' : 'No orders yet'}
            </h2>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search orders" />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
          
          {hasOrders ? (
            <div className="border rounded-md">
              {cart.map((item) => (
                <div key={item.product.id} className="border-b p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-16 h-16 flex-shrink-0 mr-4">
                      <img 
                        src={item.product.image} 
                        alt={item.product.title}
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.product.title}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-500">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-auto">
                    <p className="text-sm mb-2">Order Placed: {new Date().toLocaleDateString()}</p>
                    <Button variant="outline" size="sm" className="mb-2">Track Package</Button>
                    <Button variant="outline" size="sm">Buy Again</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
              <Button asChild>
                <a href="/">Discover Products</a>
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
