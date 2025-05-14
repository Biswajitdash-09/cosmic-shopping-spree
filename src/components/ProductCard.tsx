
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-amazon-yellow text-amazon-yellow" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="relative">
          <Star className="h-4 w-4 text-amazon-yellow" />
          <Star className="absolute top-0 left-0 h-4 w-4 fill-amazon-yellow text-amazon-yellow overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </span>
      );
    }
    
    while (stars.length < 5) {
      stars.push(<Star key={`empty-star-${stars.length}`} className="h-4 w-4 text-amazon-yellow" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow border">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square relative mb-4">
          <img 
            src={product.image} 
            alt={product.title} 
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        <h3 className="text-sm line-clamp-2 h-10 mb-1 hover:text-amazon-orange">
          {product.title}
        </h3>
      </Link>
      
      <div className="flex items-center mb-1">
        {renderStars(product.rating)}
        <span className="text-xs ml-1">({product.reviews})</span>
      </div>
      
      <div className="mb-2">
        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-xs text-gray-400 line-through ml-2">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      
      {product.prime && (
        <div className="text-xs mb-2 text-blue-700">
          ✓ Prime - FREE Delivery
        </div>
      )}
      
      <Button 
        onClick={() => addToCart(product)} 
        className="w-full mt-2 bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
