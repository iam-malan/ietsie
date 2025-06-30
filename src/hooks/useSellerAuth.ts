// src/hooks/useSellerAuth.ts
import { useContext } from 'react';
import { SellerAuthContext } from '../context/SellerAuthTypes';

export const useSellerAuth = () => {
  const context = useContext(SellerAuthContext);
  if (context === undefined) {
    throw new Error('useSellerAuth must be used within a SellerAuthProvider');
  }
  return context;
};