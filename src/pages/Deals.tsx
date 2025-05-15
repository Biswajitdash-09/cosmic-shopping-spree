
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Deals = () => {
  // Get products with discounts (those having originalPrice)
  const dealsProducts = products.filter(product => product.originalPrice);
  
  // Group deals by discount percentage
  const highDiscountDeals = dealsProducts.filter(p => 
    ((p.originalPrice! - p.price) / p.originalPrice!) >= 0.20
  );
  
  const mediumDiscountDeals = dealsProducts.filter(p => 
    ((p.originalPrice! - p.price) / p.originalPrice!) < 0.20 && 
    ((p.originalPrice! - p.price) / p.originalPrice!) >= 0.10
  );
  
  const lowDiscountDeals = dealsProducts.filter(p => 
    ((p.originalPrice! - p.price) / p.originalPrice!) < 0.10
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Today's Deals</h1>
        
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-sm mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Limited Time Offers</h2>
          <p className="text-gray-700 mb-4">
            Get amazing discounts on top products. These deals won't last long!
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Deals</TabsTrigger>
              <TabsTrigger value="high">Best Deals (20%+ Off)</TabsTrigger>
              <TabsTrigger value="medium">Good Deals (10-20% Off)</TabsTrigger>
              <TabsTrigger value="low">Small Deals (Under 10% Off)</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <ProductGrid products={dealsProducts} />
            </TabsContent>
            <TabsContent value="high" className="mt-4">
              <ProductGrid products={highDiscountDeals} title="Best Deals - 20% Off or More" />
            </TabsContent>
            <TabsContent value="medium" className="mt-4">
              <ProductGrid products={mediumDiscountDeals} title="Good Deals - 10-20% Off" />
            </TabsContent>
            <TabsContent value="low" className="mt-4">
              <ProductGrid products={lowDiscountDeals} title="Budget Deals - Under 10% Off" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deals;
