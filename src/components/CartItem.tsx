
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash, IndianRupee } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import type { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="border-b py-4 flex flex-col sm:flex-row">
      <div className="sm:w-28 h-28 mb-4 sm:mb-0">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex-1 sm:ml-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-green-600 text-sm mb-2">In Stock</p>
            
            {product.prime && (
              <p className="text-xs text-blue-700 mb-2">✓ Eligible for FREE Prime Delivery</p>
            )}
            
            <div className="flex items-center space-x-4">
              <select 
                value={quantity} 
                onChange={handleQuantityChange}
                className="border rounded px-2 py-1 bg-gray-50"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0"
                onClick={() => removeFromCart(product.id)}
              >
                <Trash className="h-4 w-4 mr-1" />
                <span>Delete</span>
              </Button>
            </div>
          </div>
          
          <div className="font-bold text-lg mt-2 sm:mt-0 flex items-center">
            <IndianRupee className="h-4 w-4 mr-1" />
            {(product.price * quantity).toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
