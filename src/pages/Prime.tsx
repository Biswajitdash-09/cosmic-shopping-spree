
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Package, Clock, Truck } from 'lucide-react';

const Prime = () => {
  const primeProducts = products.filter(product => product.prime);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-bold mb-4">Prime Membership</h1>
          <p className="text-lg mb-6">
            Get unlimited free delivery, exclusive deals, and access to Prime Video, Music, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
              Try Prime Free for 30 Days
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Package className="mx-auto h-12 w-12 text-amazon-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Free Fast Delivery</h2>
            <p className="text-gray-600">
              Unlimited free same-day and one-day delivery on eligible items
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Clock className="mx-auto h-12 w-12 text-amazon-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Prime Video</h2>
            <p className="text-gray-600">
              Stream thousands of popular movies and TV shows
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Truck className="mx-auto h-12 w-12 text-amazon-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Prime Day</h2>
            <p className="text-gray-600">
              Exclusive access to Prime Day deals and events
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Prime Eligible Products</h2>
        <ProductGrid products={primeProducts} />
      </div>
      <Footer />
    </>
  );
};

export default Prime;
