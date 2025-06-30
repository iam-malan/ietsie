import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="marketplace-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find unique, handmade treasures from South Africa</h1>
          <p>Support local artisans and discover one-of-a-kind items you won't find anywhere else</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for anything..." 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <h2>Explore categories</h2>
          <div className="category-grid">
            <Link to="/categories/jewelry" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">J</div>
              </div>
              <h3>Jewelry</h3>
            </Link>
            <Link to="/categories/home-decor" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">H</div>
              </div>
              <h3>Home & Decor</h3>
            </Link>
            <Link to="/categories/art-collectibles" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">A</div>
              </div>
              <h3>Art & Collectibles</h3>
            </Link>
            <Link to="/categories/clothing" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">C</div>
              </div>
              <h3>Clothing</h3>
            </Link>
            <Link to="/categories/bags" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">B</div>
              </div>
              <h3>Bags & Purses</h3>
            </Link>
            <Link to="/categories/pottery" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">P</div>
              </div>
              <h3>Pottery & Ceramics</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured items</h2>
          <div className="products-grid">
            <div className="product-placeholder">
              <div className="product-image-placeholder"></div>
              <p>Beautiful handmade products coming soon!</p>
            </div>
            <div className="product-placeholder">
              <div className="product-image-placeholder"></div>
              <p>Support local South African artisans</p>
            </div>
            <div className="product-placeholder">
              <div className="product-image-placeholder"></div>
              <p>Unique items you won't find elsewhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Right Now */}
      <section className="popular-section">
        <div className="container">
          <h2>Popular right now</h2>
          <div className="popular-tags">
            <Link to="/search?q=beadwork" className="tag">Beadwork</Link>
            <Link to="/search?q=pottery" className="tag">Pottery</Link>
            <Link to="/search?q=traditional-jewelry" className="tag">Traditional Jewelry</Link>
            <Link to="/search?q=wall-art" className="tag">Wall Art</Link>
            <Link to="/search?q=handbags" className="tag">Handbags</Link>
            <Link to="/search?q=home-decor" className="tag">Home Decor</Link>
          </div>
        </div>
      </section>

      {/* For Sellers CTA */}
      <section className="seller-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start your own Ietsie shop</h2>
            <p>Turn your creative passion into a thriving business. Join thousands of sellers already earning on Ietsie.</p>
            <Link to="/sell" className="btn btn-primary btn-large">
              Start selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;