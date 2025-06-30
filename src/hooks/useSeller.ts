// src/hooks/useSeller.ts
import { useState, useEffect } from 'react';
import { useSellerAuth } from './useSellerAuth';
import { SellerService } from '../api/sellerService';
import type { Shop } from '../types/index';

export const useSeller = () => {
  const { user, isSeller, upgradeToSeller } = useSellerAuth();
  const [shop, setShop] = useState<Shop | null>(null);
  const [hasShop, setHasShop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load shop data when user becomes a seller
  useEffect(() => {
    const loadShopData = async () => {
      if (!user || !isSeller) {
        setShop(null);
        setHasShop(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        const userShop = await SellerService.getShopBySellerId(user.id);
        setShop(userShop);
        setHasShop(userShop !== null);
      } catch (err) {
        console.error('Error loading shop data:', err);
        setError('Failed to load shop information');
      } finally {
        setIsLoading(false);
      }
    };

    loadShopData();
  }, [user, isSeller]);

  const createShop = async (shopData: Omit<Shop, 'id' | 'ownerId' | 'createdAt' | 'updatedAt' | 'stats'>) => {
    if (!user || !isSeller) {
      throw new Error('User must be a seller to create a shop');
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const newShop = await SellerService.createShop(user.id, shopData);
      setShop(newShop);
      setHasShop(true);
      
      return newShop;
    } catch (err) {
      console.error('Error creating shop:', err);
      setError('Failed to create shop');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateShop = async (updates: Partial<Omit<Shop, 'id' | 'ownerId' | 'createdAt'>>) => {
    if (!shop) {
      throw new Error('No shop to update');
    }

    try {
      setIsLoading(true);
      setError(null);
      
      await SellerService.updateShop(shop.id, updates);
      
      // Refresh shop data
      const updatedShop = await SellerService.getShopBySellerId(user!.id);
      setShop(updatedShop);
    } catch (err) {
      console.error('Error updating shop:', err);
      setError('Failed to update shop');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const becomeSeller = async () => {
    if (!user) {
      throw new Error('User must be signed in to become a seller');
    }

    try {
      setIsLoading(true);
      setError(null);
      
      await upgradeToSeller();
    } catch (err) {
      console.error('Error becoming seller:', err);
      setError('Failed to upgrade to seller account');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    shop,
    hasShop,
    isSeller,
    isLoading,
    error,
    createShop,
    updateShop,
    becomeSeller,
  };
};