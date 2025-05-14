
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useCart();
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would redirect to search results
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Upper navbar */}
      <div className="bg-amazon-dark text-white">
        <div className="container flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-amazon-orange text-2xl font-bold">amazon</span>
            <span className="text-white text-lg">.clone</span>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-l-md rounded-r-none border-none h-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button 
                type="submit" 
                className="h-10 px-4 rounded-l-none bg-amazon-yellow hover:bg-amazon-orange"
              >
                <Search className="h-5 w-5 text-amazon-dark"/>
              </Button>
            </div>
          </form>

          {/* Account and Cart */}
          <div className="flex items-center space-x-6">
            <Link to="/account" className="flex flex-col text-sm">
              <span className="text-gray-300">Hello, Sign in</span>
              <span className="font-bold">Account & Lists</span>
            </Link>

            <Link to="/orders" className="flex flex-col text-sm">
              <span className="text-gray-300">Returns</span>
              <span className="font-bold">& Orders</span>
            </Link>

            <Link to="/cart" className="flex items-end relative">
              <ShoppingCart className="h-8 w-8" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-amazon-orange text-amazon-dark">
                  {itemCount}
                </Badge>
              )}
              <span className="font-bold ml-1">Cart</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Lower navbar */}
      <div className="bg-amazon-light text-white py-2">
        <div className="container flex items-center space-x-6 px-4 text-sm">
          <div className="flex items-center">
            <button className="flex items-center hover:text-amazon-orange">
              All
            </button>
          </div>
          <Link to="/category/electronics" className="hover:text-amazon-orange">Electronics</Link>
          <Link to="/category/clothing" className="hover:text-amazon-orange">Clothing</Link>
          <Link to="/category/books" className="hover:text-amazon-orange">Books</Link>
          <Link to="/category/home" className="hover:text-amazon-orange">Home & Kitchen</Link>
          <Link to="/category/toys" className="hover:text-amazon-orange">Toys</Link>
          <Link to="/deals" className="hover:text-amazon-orange">Today's Deals</Link>
          <Link to="/prime" className="hover:text-amazon-orange">Prime</Link>
          <Link to="/customer-service" className="hover:text-amazon-orange">Customer Service</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
