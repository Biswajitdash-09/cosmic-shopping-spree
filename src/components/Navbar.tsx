
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import SearchBar from './SearchBar';

const Navbar = () => {
  const { cart } = useCart();
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

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
          <SearchBar />

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
        <div className="container flex items-center space-x-6 px-4 text-sm overflow-x-auto">
          <div className="flex items-center">
            <button className="flex items-center hover:text-amazon-orange">
              All
            </button>
          </div>
          <Link to="/category/electronics" className="hover:text-amazon-orange whitespace-nowrap">Electronics</Link>
          <Link to="/category/clothing" className="hover:text-amazon-orange whitespace-nowrap">Clothing</Link>
          <Link to="/category/books" className="hover:text-amazon-orange whitespace-nowrap">Books</Link>
          <Link to="/category/home" className="hover:text-amazon-orange whitespace-nowrap">Home & Kitchen</Link>
          <Link to="/category/toys" className="hover:text-amazon-orange whitespace-nowrap">Toys</Link>
          <Link to="/deals" className="hover:text-amazon-orange whitespace-nowrap">Today's Deals</Link>
          <Link to="/prime" className="hover:text-amazon-orange whitespace-nowrap">Prime</Link>
          <Link to="/customer-service" className="hover:text-amazon-orange whitespace-nowrap">Customer Service</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
