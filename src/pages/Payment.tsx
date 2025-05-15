
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, IndianRupee, BadgeIndianRupee } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

const Payment = () => {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  
  // Calculate shipping fee (free if subtotal > 3500)
  const shippingFee = subtotal > 3500 ? 0 : 199;
  
  // Calculate tax (18% GST)
  const estimatedTax = subtotal * 0.18;
  
  // Calculate order total
  const orderTotal = subtotal + shippingFee + estimatedTax;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment Successful",
        description: "Your order has been placed successfully!"
      });
      clearCart();
      navigate('/payment-success');
    }, 2000);
  };
  
  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-6">Please add some items to your cart before proceeding to payment.</p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <BadgeIndianRupee className="mr-2 h-8 w-8" /> 
          Payment
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className={`flex items-center space-x-2 border p-4 rounded-md ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : ''}`}>
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center cursor-pointer">
                        <CreditCard className="mr-2 h-5 w-5" /> Credit/Debit Card
                      </Label>
                    </div>
                    
                    <div className={`flex items-center space-x-2 border p-4 rounded-md ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : ''}`}>
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex items-center cursor-pointer">
                        UPI Payment
                      </Label>
                    </div>
                    
                    <div className={`flex items-center space-x-2 border p-4 rounded-md ${paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : ''}`}>
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="cursor-pointer">
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {paymentMethod === 'card' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input 
                        id="card-number"
                        type="text" 
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input 
                          id="expiry"
                          type="text" 
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv"
                          type="text" 
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="name">Name on Card</Label>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="John Smith"
                        required
                      />
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'upi' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="upi-id">UPI ID</Label>
                      <Input 
                        id="upi-id"
                        type="text" 
                        placeholder="yourname@bank"
                        required
                      />
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark"
                  disabled={loading}
                >
                  {loading ? "Processing..." : `Pay ${<IndianRupee className="h-4 w-4 inline" />} ${orderTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-4">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-start">
                      <img 
                        src={item.product.image} 
                        alt={item.product.title} 
                        className="w-12 h-12 object-contain mr-2"
                      />
                      <div>
                        <p className="text-sm line-clamp-1">{item.product.title}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      <span>{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span>Items ({cart.length}):</span>
                  <span className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Shipping:</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      <span className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        {shippingFee.toLocaleString('en-IN')}
                      </span>
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>GST (18%):</span>
                  <span className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {estimatedTax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between font-bold text-lg items-center">
                  <span>Order total:</span>
                  <span className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {orderTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                By placing your order, you agree to Amazon's privacy notice and conditions of use.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
