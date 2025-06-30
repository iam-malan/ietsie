import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import layout components
import Header from '../components/layout/Header';

// Import page components
import LandingPage from '../pages/LandingPage';
import Browse from '../pages/Browse';
import Categories from '../pages/Categories';

// Import customer pages
import CustomerDashboard from '../pages/customer/CustomerDashboard';

// Import seller pages
import SellerLanding from '../pages/seller/SellerLanding';
import SellerDashboard from '../pages/seller/SellerDashboard';

// Import auth components
import ProtectedRoute from '../components/auth/ProtectedRoute';

const AppRouter: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Categories />} />
          
          {/* Seller routes */}
          <Route path="/sell" element={<SellerLanding />} />
          <Route 
            path="/sell/dashboard" 
            element={
              <ProtectedRoute>
                <SellerDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/sell/onboarding" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Shop Setup</h2>
                  <p>Coming soon - Complete your shop setup</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          {/* Customer protected routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/account" 
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Profile Settings</h2>
                  <p>Coming soon - Edit your profile information</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/orders" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Your Orders</h2>
                  <p>Coming soon - View and track your orders</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/favorites" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Your Favorites</h2>
                  <p>Coming soon - View your saved items</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/messages" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Messages</h2>
                  <p>Coming soon - Chat with sellers and buyers</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/shop/create" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Create Your Shop</h2>
                  <p>Coming soon - Set up your seller account</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/shop/manage" 
            element={
              <ProtectedRoute>
                <div className="page-placeholder">
                  <h2>Manage Your Shop</h2>
                  <p>Coming soon - Manage your products and shop settings</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRouter;