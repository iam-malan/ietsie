// src/components/auth/SellerProtectedRoute.tsx
import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSellerAuth } from '../../hooks/useSellerAuth';

interface SellerProtectedRouteProps {
  children: React.ReactNode;
  requireSeller?: boolean;
}

const SellerProtectedRoute: React.FC<SellerProtectedRouteProps> = ({ 
  children, 
  requireSeller = true 
}) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { isLoading, isSeller } = useSellerAuth();
  const location = useLocation();

  // Show loading while Clerk is initializing or user data is loading
  if (!isLoaded || isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If user is not signed in, redirect to seller landing with sign-in
  if (!isSignedIn) {
    return <Navigate to="/sell" state={{ from: location, requireAuth: true }} replace />;
  }

  // If seller access is required but user is not a seller, redirect to seller onboarding
  if (requireSeller && !isSeller) {
    return <Navigate to="/sell/onboarding" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default SellerProtectedRoute;