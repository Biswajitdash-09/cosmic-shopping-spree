
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { User, Package, Heart, CreditCard } from 'lucide-react';

const Account = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <User className="h-8 w-8 text-amazon-orange mr-3" />
              <h2 className="text-xl font-bold">Your Profile</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage your personal information, addresses, and preferences</p>
            <Button variant="outline" className="w-full">Edit Profile</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Package className="h-8 w-8 text-amazon-orange mr-3" />
              <h2 className="text-xl font-bold">Your Orders</h2>
            </div>
            <p className="text-gray-600 mb-4">Track, return, or buy things again</p>
            <Button variant="outline" className="w-full">View Orders</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-amazon-orange mr-3" />
              <h2 className="text-xl font-bold">Payment Options</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage payment methods and settings, view balances</p>
            <Button variant="outline" className="w-full">Manage Payments</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-amazon-orange mr-3" />
              <h2 className="text-xl font-bold">Your Lists</h2>
            </div>
            <p className="text-gray-600 mb-4">View, create, and manage your wish lists</p>
            <Button variant="outline" className="w-full">View Lists</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
