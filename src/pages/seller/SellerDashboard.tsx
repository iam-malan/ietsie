import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const SellerDashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="seller-dashboard">
      <header className="seller-header">
        <div className="header-content">
          <h1>Your shop</h1>
          <p>Welcome to your seller dashboard, {user?.firstName}!</p>
        </div>
        <div className="header-actions">
          <Link to="/sell/shop/edit" className="btn btn-outline">
            Edit shop
          </Link>
          <Link to="/sell/listings/new" className="btn btn-primary">
            Add listing
          </Link>
        </div>
      </header>
      
      <main className="seller-content">
        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>0</h3>
            <p>Total views</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Orders</p>
          </div>
          <div className="stat-card">
            <h3>R0</h3>
            <p>Revenue</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Active listings</p>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Shop Setup */}
          <div className="dashboard-card">
            <h3>Complete your shop setup</h3>
            <div className="setup-checklist">
              <div className="checklist-item">
                <input type="checkbox" /> Add shop banner
              </div>
              <div className="checklist-item">
                <input type="checkbox" /> Write shop description
              </div>
              <div className="checklist-item">
                <input type="checkbox" /> Add your first listing
              </div>
              <div className="checklist-item">
                <input type="checkbox" /> Set up shop policies
              </div>
            </div>
            <Link to="/sell/onboarding" className="btn btn-primary">
              Continue setup
            </Link>
          </div>
          
          {/* Recent Orders */}
          <div className="dashboard-card">
            <h3>Recent orders</h3>
            <p>Manage and track your customer orders</p>
            <div className="card-preview">
              <p className="no-items">No orders yet</p>
              <p className="sub-text">Orders will appear here when customers buy your items</p>
            </div>
            <Link to="/sell/orders" className="btn btn-primary">View all orders</Link>
          </div>
          
          {/* Listings */}
          <div className="dashboard-card">
            <h3>Your listings</h3>
            <p>Manage your products and inventory</p>
            <div className="card-preview">
              <p className="no-items">No listings yet</p>
              <p className="sub-text">Create your first listing to start selling</p>
            </div>
            <Link to="/sell/listings" className="btn btn-primary">Manage listings</Link>
          </div>

          {/* Messages */}
          <div className="dashboard-card">
            <h3>Customer messages</h3>
            <p>Respond to customer inquiries</p>
            <div className="card-preview">
              <p className="no-items">No messages</p>
              <p className="sub-text">Customer messages will appear here</p>
            </div>
            <Link to="/sell/messages" className="btn btn-primary">View messages</Link>
          </div>

          {/* Analytics */}
          <div className="dashboard-card">
            <h3>Shop analytics</h3>
            <p>Track your shop's performance</p>
            <div className="analytics-preview">
              <p>Views this month: 0</p>
              <p>Favorites this month: 0</p>
              <p>Conversion rate: 0%</p>
            </div>
            <Link to="/sell/analytics" className="btn btn-primary">View analytics</Link>
          </div>
          
          {/* Help & Resources */}
          <div className="dashboard-card">
            <h3>Seller resources</h3>
            <p>Tips and guides to help you succeed</p>
            <div className="resources-list">
              <Link to="/sell/help/photography" className="resource-link">
                Photography tips
              </Link>
              <Link to="/sell/help/seo" className="resource-link">
                SEO best practices
              </Link>
              <Link to="/sell/help/policies" className="resource-link">
                Shop policies guide
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;