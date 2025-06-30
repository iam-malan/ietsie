import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const CustomerDashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="customer-dashboard">
      <header className="dashboard-header">
        <h1>Your account</h1>
        <p>Welcome back, {user?.firstName}!</p>
      </header>
      
      <main className="dashboard-content">
        <div className="dashboard-grid">
          {/* Recent Orders */}
          <div className="dashboard-card">
            <h3>Your orders</h3>
            <p>Track packages and view your order history</p>
            <div className="card-preview">
              <p className="no-items">No orders yet</p>
              <p className="sub-text">When you make a purchase, it will appear here</p>
            </div>
            <Link to="/orders" className="btn btn-primary">View all orders</Link>
          </div>
          
          {/* Favorites */}
          <div className="dashboard-card">
            <h3>Your favorites</h3>
            <p>Items you've saved for later</p>
            <div className="card-preview">
              <p className="no-items">No favorites yet</p>
              <p className="sub-text">Heart items you love to save them here</p>
            </div>
            <Link to="/favorites" className="btn btn-primary">View favorites</Link>
          </div>
          
          {/* Messages */}
          <div className="dashboard-card">
            <h3>Messages</h3>
            <p>Chat with sellers about items you're interested in</p>
            <div className="card-preview">
              <p className="no-items">No messages</p>
              <p className="sub-text">Messages with shops will appear here</p>
            </div>
            <Link to="/messages" className="btn btn-primary">View messages</Link>
          </div>

          {/* Recently Viewed */}
          <div className="dashboard-card">
            <h3>Recently viewed</h3>
            <p>Items you've looked at recently</p>
            <div className="card-preview">
              <p className="no-items">No recent views</p>
              <p className="sub-text">Items you view will appear here</p>
            </div>
            <Link to="/browse" className="btn btn-secondary">Start browsing</Link>
          </div>

          {/* Account Settings */}
          <div className="dashboard-card">
            <h3>Account settings</h3>
            <p>Manage your personal information and preferences</p>
            <div className="settings-list">
              <Link to="/profile/edit" className="setting-link">
                Edit profile
              </Link>
              <Link to="/profile/addresses" className="setting-link">
                Manage addresses
              </Link>
              <Link to="/profile/privacy" className="setting-link">
                Privacy settings
              </Link>
            </div>
          </div>
          
          {/* Sell on Ietsie */}
          <div className="dashboard-card seller-promotion">
            <h3>Start selling on Ietsie</h3>
            <p>Turn your creative passion into profit</p>
            <div className="promotion-content">
              <p>Join thousands of South African artisans already earning on Ietsie</p>
            </div>
            <Link to="/sell" className="btn btn-secondary">Learn more</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;