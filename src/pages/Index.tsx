
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { featuredProducts, recommendedProducts, newArrivals } from '@/data/products';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-8">
          <ProductGrid products={featuredProducts} title="Featured Products" />
          <div className="my-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
            <p className="mb-4">Save big on top brands. Limited time offers!</p>
            <ProductGrid products={recommendedProducts} />
          </div>
          <ProductGrid products={newArrivals} title="New Arrivals" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
