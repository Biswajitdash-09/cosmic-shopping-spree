
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PaymentSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
            You will receive an email confirmation with your order details.
          </p>
          
          <div className="space-y-4">
            <Button 
              asChild
              className="w-full bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark"
            >
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
