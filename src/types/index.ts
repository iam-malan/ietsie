// src/types/index.ts
import { Timestamp } from 'firebase/firestore';

// User types
export interface User {
  id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isEmailVerified: boolean;
  role: 'buyer' | 'seller' | 'admin';
  preferences: UserPreferences;
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  language: string;
  currency: string;
}

// Shop types
export interface Shop {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  logo?: string;
  bannerImage?: string;
  location: {
    city: string;
    province: string;
    country: string;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isActive: boolean;
  policies: ShopPolicies;
  stats: ShopStats;
}

export interface ShopPolicies {
  shipping: string;
  returns: string;
  privacy: string;
}

export interface ShopStats {
  totalSales: number;
  totalOrders: number;
  averageRating: number;
  totalReviews: number;
}

// Product types
export interface Product {
  id: string;
  shopId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: ProductImage[];
  category: string;
  subcategory?: string;
  tags: string[];
  inventory: ProductInventory;
  variants?: ProductVariant[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  status: 'draft' | 'active' | 'inactive' | 'sold_out';
  stats: ProductStats;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface ProductInventory {
  quantity: number;
  trackQuantity: boolean;
  allowBackorders: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: ProductVariantOption[];
  price?: number;
  inventory?: ProductInventory;
}

export interface ProductVariantOption {
  name: string;
  value: string;
}

export interface ProductStats {
  views: number;
  favorites: number;
  totalSales: number;
  averageRating: number;
  totalReviews: number;
}

// Order types
export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  shopId: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  tracking?: TrackingInfo;
}

export interface OrderItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  variant?: ProductVariant;
  image: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export interface Address {
  firstName: string;
  lastName: string;
  company?: string;
  street1: string;
  street2?: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export interface PaymentMethod {
  type: 'card' | 'bank_transfer' | 'cash_on_delivery';
  last4?: string;
  brand?: string;
}

export interface TrackingInfo {
  carrier: string;
  trackingNumber: string;
  url?: string;
  status: string;
  estimatedDelivery?: Timestamp;
}

// Message types
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  attachments?: MessageAttachment[];
  createdAt: Timestamp;
  isRead: boolean;
  isDeleted: boolean;
}

export interface MessageAttachment {
  id: string;
  type: 'image' | 'file';
  url: string;
  name: string;
  size: number;
}

export interface Conversation {
  id: string;
  participantIds: string[];
  lastMessage?: Message;
  updatedAt: Timestamp;
  isArchived: boolean;
  orderId?: string;
  productId?: string;
}

// Review types
export interface Review {
  id: string;
  productId: string;
  shopId: string;
  buyerId: string;
  orderId: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  createdAt: Timestamp;
  isVerified: boolean;
  response?: ReviewResponse;
}

export interface ReviewResponse {
  content: string;
  createdAt: Timestamp;
}

// Cart types
export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  variant?: ProductVariant;
  image: string;
  shopId: string;
  shopName: string;
  maxQuantity: number;
}