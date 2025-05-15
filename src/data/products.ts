
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 13 Pro Max - 128GB - Sierra Blue",
    description: "Apple iPhone 13 Pro Max. Super Retina XDR display with ProMotion. Ceramic Shield, tougher than any smartphone glass. A15 Bionic chip. Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras.",
    price: 109999,
    image: "https://images.unsplash.com/photo-1632661674596-618e80f66b5b?auto=format&fit=crop&w=800&q=80",
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
    price: 119999,
    originalPrice: 129999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
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
    price: 24999,
    originalPrice: 29999,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
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
    price: 199999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
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
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230",
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
    price: 18999,
    image: "https://images.unsplash.com/photo-1592813593981-219d5ddf25b5?auto=format&fit=crop&w=800&q=80",
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
    price: 24999,
    originalPrice: 27999,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
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
    price: 129999,
    originalPrice: 149999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
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
  },
  {
    id: 9,
    title: "Men's Classic Fit Cotton T-Shirt - Pack of 3",
    description: "Comfortable cotton t-shirts perfect for everyday wear. Breathable fabric with a classic fit that suits all body types.",
    price: 1499,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    category: "Clothing",
    rating: 4.3,
    reviews: 3256,
    prime: true,
    features: [
      "100% pure cotton",
      "Breathable fabric",
      "Classic fit",
      "Machine washable"
    ]
  },
  {
    id: 10,
    title: "Women's Slim Fit Denim Jeans",
    description: "Stylish slim fit denim jeans with stretch fabric for maximum comfort. Perfect for casual outings or daily wear.",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    category: "Clothing",
    rating: 4.5,
    reviews: 1865,
    prime: true,
    features: [
      "Premium denim with stretch",
      "Slim fit design",
      "Multiple pockets",
      "Available in various washes"
    ]
  },
  {
    id: 11,
    title: "Running Shoes with Mesh Upper and Cushioned Sole",
    description: "Lightweight running shoes with breathable mesh upper and cushioned sole for maximum comfort during runs or workouts.",
    price: 3499,
    originalPrice: 4299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Clothing",
    rating: 4.7,
    reviews: 2987,
    prime: true,
    features: [
      "Breathable mesh upper",
      "Cushioned sole",
      "Lightweight design",
      "Anti-slip rubber outsole"
    ]
  },
  {
    id: 12,
    title: "Formal Men's Business Suit - Navy Blue",
    description: "Classic navy blue business suit for men. Perfect for formal occasions, interviews, or office wear. Tailored fit with premium fabric.",
    price: 7999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
    category: "Clothing",
    rating: 4.6,
    reviews: 845,
    prime: true,
    features: [
      "Premium polyester blend",
      "Tailored fit",
      "Includes jacket and pants",
      "Inner lining for comfort"
    ]
  }
];

export const featuredProducts = [products[0], products[1], products[8], products[10]];
export const recommendedProducts = [products[4], products[5], products[9], products[11]];
export const newArrivals = [products[2], products[6], products[7], products[3]];

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};
