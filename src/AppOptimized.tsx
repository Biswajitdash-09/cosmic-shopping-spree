
import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";

// Lazy load components
const Index = lazy(() => import('./pages/Index'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Payment = lazy(() => import('./pages/Payment'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Category = lazy(() => import('./pages/Category'));
const Deals = lazy(() => import('./pages/Deals'));
const Prime = lazy(() => import('./pages/Prime'));
const CustomerService = lazy(() => import('./pages/CustomerService'));
const Account = lazy(() => import('./pages/Account'));
const Orders = lazy(() => import('./pages/Orders'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-screen">
    <div className="w-16 h-16 border-4 border-amazon-orange border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const AppOptimized = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/category/:categoryName" element={<Category />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/prime" element={<Prime />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppOptimized;
