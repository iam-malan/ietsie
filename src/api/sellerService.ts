// src/api/sellerService.ts
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  getDocs,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import type { Shop, User } from '../types/index';

export class SellerService {
  // Create a new shop for a seller
  static async createShop(sellerId: string, shopData: Omit<Shop, 'id' | 'ownerId' | 'createdAt' | 'updatedAt' | 'stats'>): Promise<Shop> {
    const shopRef = doc(collection(db, 'shops'));
    
    const newShop: Omit<Shop, 'id'> = {
      ...shopData,
      ownerId: sellerId,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
      isActive: true,
      stats: {
        totalSales: 0,
        totalOrders: 0,
        averageRating: 0,
        totalReviews: 0,
      },
    };

    await setDoc(shopRef, newShop);

    return {
      id: shopRef.id,
      ...newShop,
    } as Shop;
  }

  // Get shop by seller ID
  static async getShopBySellerId(sellerId: string): Promise<Shop | null> {
    const shopsQuery = query(
      collection(db, 'shops'),
      where('ownerId', '==', sellerId)
    );
    
    const querySnapshot = await getDocs(shopsQuery);
    
    if (querySnapshot.empty) {
      return null;
    }

    const shopDoc = querySnapshot.docs[0];
    return {
      id: shopDoc.id,
      ...shopDoc.data(),
    } as Shop;
  }

  // Update shop information
  static async updateShop(shopId: string, updates: Partial<Omit<Shop, 'id' | 'ownerId' | 'createdAt'>>): Promise<void> {
    const shopRef = doc(db, 'shops', shopId);
    
    await updateDoc(shopRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  }

  // Check if user has a shop
  static async hasShop(sellerId: string): Promise<boolean> {
    const shop = await this.getShopBySellerId(sellerId);
    return shop !== null;
  }

  // Upgrade user to seller role
  static async upgradeUserToSeller(userId: string): Promise<void> {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      role: 'seller',
      updatedAt: serverTimestamp(),
    });
  }

  // Get seller profile with shop information
  static async getSellerProfile(sellerId: string): Promise<{ user: User; shop: Shop | null }> {
    const userRef = doc(db, 'users', sellerId);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      throw new Error('Seller not found');
    }

    const user = {
      id: userSnap.id,
      ...userSnap.data(),
    } as User;

    const shop = await this.getShopBySellerId(sellerId);

    return { user, shop };
  }
}