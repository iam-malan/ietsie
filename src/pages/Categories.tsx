import React from 'react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 'jewelry',
      name: 'Jewelry',
      description: 'Handcrafted necklaces, bracelets, earrings, and more',
      image: '/images/jewelry.jpg',
      productCount: 0
    },
    {
      id: 'home-decor',
      name: 'Home & Decor',
      description: 'Beautiful items to make your house a home',
      image: '/images/home-decor.jpg',
      productCount: 0
    },
    {
      id: 'art-collectibles',
      name: 'Art & Collectibles',
      description: 'Unique South African art and collectible items',
      image: '/images/art.jpg',
      productCount: 0
    },
    {
      id: 'clothing',
      name: 'Clothing',
      description: 'Handmade fashion and traditional wear',
      image: '/images/clothing.jpg',
      productCount: 0
    },
    {
      id: 'bags-purses',
      name: 'Bags & Purses',
      description: 'Handcrafted bags, purses, and accessories',
      image: '/images/bags.jpg',
      productCount: 0
    },
    {
      id: 'pottery-ceramics',
      name: 'Pottery & Ceramics',
      description: 'Beautiful ceramic and pottery pieces',
      image: '/images/pottery.jpg',
      productCount: 0
    }
  ];

  return (
    <div className="categories-page">
      <header className="page-header">
        <h1>Shop by Category</h1>
        <p>Explore our diverse range of handmade South African products</p>
      </header>
      
      <main className="categories-content">
        <div className="categories-grid">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`}
              className="category-card large"
            >
              <div className="category-image">
                <div className="image-placeholder">
                  {category.name.charAt(0)}
                </div>
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="product-count">
                  {category.productCount} products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;