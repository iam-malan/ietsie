import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Welcome back, {user?.firstName}!</h1>
        <p>Your Ietsie Dashboard</p>
      </header>
      
      <main className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Your Orders</h3>
            <p>Track your recent purchases</p>
            <Link to="/orders" className="btn btn-primary">View Orders</Link>
          </div>
          
          <div className="dashboard-card">
            <h3>Favorites</h3>
            <p>Items you've saved for later</p>
            <Link to="/favorites" className="btn btn-primary">View Favorites</Link>
          </div>
          
          <div className="dashboard-card">
            <h3>Messages</h3>
            <p>Chat with sellers</p>
            <Link to="/messages" className="btn btn-primary">View Messages</Link>
          </div>
          
          <div className="dashboard-card">
            <h3>Your Shop</h3>
            <p>Manage your seller account</p>
            <Link to="/shop/manage" className="btn btn-primary">Manage Shop</Link>
          </div>

          <div className="dashboard-card">
            <h3>Profile Settings</h3>
            <p>Update your account information</p>
            <Link to="/profile" className="btn btn-primary">Edit Profile</Link>
          </div>
          
          <div className="dashboard-card">
            <h3>Create Shop</h3>
            <p>Start selling your products</p>
            <Link to="/shop/create" className="btn btn-secondary">Create Shop</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;