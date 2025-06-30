// src/context/SellerAuthTypes.ts
import { createContext } from 'react';
import type { User } from '../types/index';

export interface SellerAuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  refreshUser: () => Promise<void>;
  isSeller: boolean;
  upgradeToSeller: () => Promise<void>;
}

export const SellerAuthContext = createContext<SellerAuthContextType | undefined>(undefined);