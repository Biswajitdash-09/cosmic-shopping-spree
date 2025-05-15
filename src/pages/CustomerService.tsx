
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CustomerService = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Customer Service</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">How Can We Help You?</h2>
          <div className="flex gap-4 mb-6">
            <Input
              placeholder="Search for help topics..."
              className="flex-1"
            />
            <Button className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
              Search
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Orders', 'Returns & Refunds', 'Prime', 'Shipping', 'Payments', 'Account'].map((topic) => (
              <Button
                key={topic}
                variant="outline"
                className="justify-start h-auto py-3 px-4 border border-gray-200"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Where is my order?</AccordionTrigger>
              <AccordionContent>
                You can track your order by going to Your Orders in your account. 
                If you're having trouble locating your order, please contact customer service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I return an item?</AccordionTrigger>
              <AccordionContent>
                You can return most items sold on Amazon within 30 days of delivery for a full refund. 
                Go to Your Orders in your account, select the item you want to return, and follow the instructions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the Prime membership benefits?</AccordionTrigger>
              <AccordionContent>
                Amazon Prime benefits include free fast delivery, exclusive deals, 
                access to Prime Video, Prime Music, and more. You can learn more on our Prime page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I manage my payment methods?</AccordionTrigger>
              <AccordionContent>
                You can add, edit, or remove payment methods in the Payment options section 
                of Your Account. We accept credit and debit cards, UPI, and Amazon Pay balance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            Need more help? Our customer service team is available 24/7 to assist you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark">
              Call Us
            </Button>
            <Button variant="outline">
              Email Support
            </Button>
            <Button variant="outline">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerService;
