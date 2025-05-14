
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 13 Pro Max - 128GB - Sierra Blue",
    description: "Apple iPhone 13 Pro Max. Super Retina XDR display with ProMotion. Ceramic Shield, tougher than any smartphone glass. A15 Bionic chip. Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras.",
    price: 1099.99,
    image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Electronics",
    rating: 4.8,
    reviews: 2458,
    prime: true,
    features: [
      "6.7-inch Super Retina XDR display with ProMotion",
      "Cinematic mode in 1080p at 30 fps",
      "Pro camera system: Telephoto, Wide, Ultra Wide",
      "A15 Bionic chip"
    ]
  },
  {
    id: 2,
    title: "Samsung Galaxy S22 Ultra - 256GB - Phantom Black",
    description: "The Samsung Galaxy S22 Ultra is a high-end Android smartphone featuring a 6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 1 processor, and a versatile quad camera system.",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://source.unsplash.com/photo-1518770660439-4636190af475",
    category: "Electronics",
    rating: 4.7,
    reviews: 1832,
    prime: true,
    features: [
      "6.8-inch Dynamic AMOLED 2X",
      "108MP main camera",
      "5000mAh battery",
      "S Pen included"
    ]
  },
  {
    id: 3,
    title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation with Dual Noise Sensor technology, Premium sound quality with Edge-AI and DSEE Extreme, Up to 30-hour battery life with quick charging",
    price: 348.99,
    originalPrice: 399.99,
    image: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Electronics",
    rating: 4.9,
    reviews: 9743,
    prime: true,
    features: [
      "Industry-leading noise cancellation",
      "Speak-to-chat technology",
      "30-hour battery life",
      "Touch controls"
    ]
  },
  {
    id: 4,
    title: "Apple MacBook Pro 14-inch M2 Pro Chip",
    description: "The 14-inch MacBook Pro with M2 Pro delivers exceptional performance and battery life. Featuring a stunning Liquid Retina XDR display, 1080p FaceTime HD camera, and a six-speaker sound system.",
    price: 1999.99,
    image: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Electronics",
    rating: 4.8,
    reviews: 1256,
    prime: true,
    features: [
      "M2 Pro chip with 10-core CPU",
      "14-inch Liquid Retina XDR display",
      "Up to 18 hours of battery life",
      "16GB unified memory"
    ]
  },
  {
    id: 5,
    title: "Amazon Echo Dot (5th Gen) Smart Speaker",
    description: "Our best sounding Echo Dot yet. Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://source.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Smart Home",
    rating: 4.5,
    reviews: 12543,
    prime: true,
    features: [
      "Improved audio experience",
      "Voice control your music",
      "Control smart home devices",
      "Built-in temperature sensor"
    ]
  },
  {
    id: 6,
    title: "Kindle Paperwhite Signature Edition",
    description: "The Kindle Paperwhite Signature Edition features wireless charging, auto-adjusting front light, 32GB storage, and a 6.8-inch display with smaller bezels.",
    price: 189.99,
    image: "https://source.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Electronics",
    rating: 4.7,
    reviews: 8964,
    prime: true,
    features: [
      "6.8-inch display with smaller bezels",
      "Adjustable warm light",
      "Wireless charging",
      "Waterproof"
    ]
  },
  {
    id: 7,
    title: "Apple AirPods Pro (2nd Generation)",
    description: "AirPods Pro feature Active Noise Cancellation, Transparency mode, Personalized Spatial Audio, and improved battery life.",
    price: 249.99,
    originalPrice: 279.99,
    image: "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Electronics",
    rating: 4.6,
    reviews: 14567,
    prime: true,
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Personalized Spatial Audio",
      "Up to 6 hours of listening time"
    ]
  },
  {
    id: 8,
    title: "Samsung 65-Inch QLED 4K Q80B Series Smart TV",
    description: "Experience the power of Quantum Matrix Technology, delivering our most precise LED control for incredible color and contrast.",
    price: 1297.99,
    originalPrice: 1497.99,
    image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "Electronics",
    rating: 4.5,
    reviews: 587,
    prime: true,
    features: [
      "Quantum Matrix Technology",
      "Quantum Processor 4K",
      "100% Color Volume with Quantum Dot",
      "Motion Xcelerator Turbo+"
    ]
  }
];

export const featuredProducts = products.slice(0, 4);
export const recommendedProducts = [products[4], products[5], products[6], products[7]];
export const newArrivals = [products[2], products[0], products[7], products[1]];

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};
