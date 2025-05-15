
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-amazon-dark to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop the Best Deals
          </h1>
          <p className="text-lg mb-6">
            Discover amazing products at unbeatable prices. From electronics to household essentials,
            we've got you covered.
          </p>
          <div className="flex space-x-4">
            <Button asChild className="bg-amazon-orange hover:bg-amazon-yellow text-white">
              <Link to="/deals">Shop Deals</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/category/electronics">Explore Electronics</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661" 
                alt="Electronics" 
                className="w-full h-40 object-cover rounded-md" 
              />
              <h3 className="text-amazon-dark font-bold mt-2">Electronics</h3>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8" 
                alt="Home & Kitchen" 
                className="w-full h-40 object-cover rounded-md" 
              />
              <h3 className="text-amazon-dark font-bold mt-2">Home & Kitchen</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
