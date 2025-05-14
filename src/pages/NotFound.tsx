
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-md">
          <h1 className="text-amazon-orange text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            We're sorry, but the page you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
