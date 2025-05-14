
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amazon-dark text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:underline">About Us</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Press Releases</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Science</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:underline">Sell on Amazon</Link></li>
              <li><Link to="#" className="hover:underline">Sell Under Amazon Accelerator</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Associates</Link></li>
              <li><Link to="#" className="hover:underline">Advertise Your Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account" className="hover:underline">Your Account</Link></li>
              <li><Link to="/orders" className="hover:underline">Your Orders</Link></li>
              <li><Link to="#" className="hover:underline">Shipping Rates & Policies</Link></li>
              <li><Link to="#" className="hover:underline">Returns & Replacements</Link></li>
              <li><Link to="#" className="hover:underline">Help</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Amazon Payment Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:underline">Amazon Visa Card</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Store Card</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Secured Card</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Business Card</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col items-center">
          <Link to="/" className="flex items-center mb-4">
            <span className="text-amazon-orange text-2xl font-bold">amazon</span>
            <span className="text-white text-lg">.clone</span>
          </Link>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
