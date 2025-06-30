// src/context/SellerAuthContext.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useAuth as useClerkAuth, useUser } from '@clerk/clerk-react';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../api/firebase';
import type { User } from '../types/index';
import { SellerAuthContext, type SellerAuthContextType } from './SellerAuthTypes';

interface SellerAuthProviderProps {
  children: React.ReactNode;
}

export const SellerAuthProvider: React.FC<SellerAuthProviderProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useClerkAuth();
  const { user: clerkUser } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createOrUpdateUser = async (clerkUserData: NonNullable<typeof clerkUser>, role: 'buyer' | 'seller' = 'buyer'): Promise<User> => {
    const userRef = doc(db, 'users', clerkUserData.id);
    const userSnap = await getDoc(userRef);

    const userData: Omit<User, 'id'> = {
      clerkId: clerkUserData.id,
      email: clerkUserData.emailAddresses[0]?.emailAddress || '',
      firstName: clerkUserData.firstName || '',
      lastName: clerkUserData.lastName || '',
      profileImage: clerkUserData.imageUrl,
      createdAt: userSnap.exists() ? userSnap.data().createdAt : serverTimestamp() as any,
      updatedAt: serverTimestamp() as any,
      isEmailVerified: clerkUserData.emailAddresses[0]?.verification?.status === 'verified',
      role: userSnap.exists() ? userSnap.data().role : role,
      preferences: userSnap.exists() ? userSnap.data().preferences : {
        notifications: {
          email: true,
          push: true,
          marketing: false,
        },
        language: 'en',
        currency: 'ZAR',
      },
    };

    await setDoc(userRef, userData, { merge: true });

    return {
      id: clerkUserData.id,
      ...userData,
    } as User;
  };

  const upgradeToSeller = async () => {
    if (!clerkUser || !isSignedIn) {
      throw new Error('User must be signed in to upgrade to seller');
    }

    try {
      setIsLoading(true);
      setError(null);
      const userData = await createOrUpdateUser(clerkUser, 'seller');
      setUser(userData);
    } catch (err) {
      console.error('Error upgrading to seller:', err);
      setError('Failed to upgrade to seller account');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = useCallback(async () => {
    if (!clerkUser || !isSignedIn) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const userData = await createOrUpdateUser(clerkUser);
      setUser(userData);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to load user data');
    } finally {
      setIsLoading(false);
    }
  }, [clerkUser, isSignedIn]);

  useEffect(() => {
    if (isLoaded) {
      refreshUser();
    }
  }, [clerkUser, isSignedIn, isLoaded, refreshUser]);

  const isSeller = user?.role === 'seller';

  const value: SellerAuthContextType = {
    user,
    isLoading: !isLoaded || isLoading,
    error,
    refreshUser,
    isSeller,
    upgradeToSeller,
  };

  return (
    <SellerAuthContext.Provider value={value}>
      {children}
    </SellerAuthContext.Provider>
  );
};