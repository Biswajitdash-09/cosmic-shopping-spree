
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Package, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { getProductById } from '@/data/products';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  
  const product = getProductById(Number(productId));
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
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
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center items-center bg-white p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-96 object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              
              <div className="flex items-center mb-2">
                {renderStars(product.rating)}
                <Link to="#reviews" className="ml-2 text-blue-600 hover:underline">
                  {product.reviews} ratings
                </Link>
              </div>
              
              <div className="border-t border-b py-2 my-4">
                <div className="flex items-baseline">
                  {product.originalPrice && (
                    <span className="text-red-600 mr-2">
                      Save <IndianRupee className="h-3 w-3 inline" />{(product.originalPrice - product.price).toLocaleString('en-IN')} ({Math.round((1 - product.price / product.originalPrice) * 100)}%)
                    </span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  <span className="text-3xl font-bold">{product.price.toLocaleString('en-IN')}</span>
                </div>
                
                {product.originalPrice && (
                  <div className="text-gray-500 flex items-center">
                    <span className="text-sm">List Price: </span>
                    <span className="line-through ml-1 flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      {product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">About this item:</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                {product.features && product.features.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              {product.prime && (
                <div className="flex items-center text-blue-700 mb-4">
                  <Package className="h-5 w-5 mr-2" />
                  <span>
                    <span className="font-bold">Prime</span> FREE Delivery
                  </span>
                </div>
              )}
              
              <div className="space-y-3">
                <Button 
                  onClick={() => addToCart(product)} 
                  className="w-full bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button 
                  asChild
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  <Link to="/payment">Buy Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
