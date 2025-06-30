import React from 'react';

const Browse: React.FC = () => {
  return (
    <div className="browse-page">
      <header className="page-header">
        <h1>Browse Products</h1>
        <p>Discover amazing handmade items from South African artisans</p>
      </header>
      
      <main className="browse-content">
        <div className="filters-sidebar">
          <h3>Filter by</h3>
          <div className="filter-section">
            <h4>Category</h4>
            <label>
              <input type="checkbox" /> Jewelry
            </label>
            <label>
              <input type="checkbox" /> Home & Decor
            </label>
            <label>
              <input type="checkbox" /> Art & Collectibles
            </label>
            <label>
              <input type="checkbox" /> Clothing
            </label>
          </div>
          
          <div className="filter-section">
            <h4>Price Range</h4>
            <label>
              <input type="checkbox" /> Under R100
            </label>
            <label>
              <input type="checkbox" /> R100 - R500
            </label>
            <label>
              <input type="checkbox" /> R500 - R1000
            </label>
            <label>
              <input type="checkbox" /> Over R1000
            </label>
          </div>
        </div>
        
        <div className="products-grid">
          <div className="placeholder-message">
            <h3>Coming Soon!</h3>
            <p>Products will be displayed here once sellers start listing their items.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Browse;