
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCategory } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const products = getProductsByCategory(categoryName || '');
  const categoryDisplayName = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : '';

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{categoryDisplayName}</h1>
        
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
              <TabsTrigger value="newreleases">New Releases</TabsTrigger>
              <TabsTrigger value="deals">Today's Deals</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <ProductGrid products={products} />
            </TabsContent>
            <TabsContent value="bestsellers" className="mt-4">
              <ProductGrid products={products.slice(0, 3)} title="Best Sellers" />
            </TabsContent>
            <TabsContent value="newreleases" className="mt-4">
              <ProductGrid products={products.slice(2, 5)} title="New Releases" />
            </TabsContent>
            <TabsContent value="deals" className="mt-4">
              <ProductGrid products={products.filter(p => p.originalPrice)} title="Today's Deals" />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">About {categoryDisplayName}</h2>
          <p className="text-gray-700 mb-4">
            Explore our wide range of {categoryDisplayName.toLowerCase()} products. We offer the latest technology, 
            high-quality items, and competitive prices to ensure you find exactly what you're looking for.
          </p>
          <Button className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
            View All {categoryDisplayName}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
