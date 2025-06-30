import React from 'react';
import { Link } from 'react-router-dom';
import FloatingElements from '../components/ui/FloatingElements';
import InteractiveSearch from '../components/ui/InteractiveSearch';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/landing-page.css';

const LandingPage: React.FC = () => {
  const { elementRef: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation();
  const { elementRef: productsRef, isVisible: productsVisible } = useScrollAnimation();
  const { elementRef: popularRef, isVisible: popularVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="marketplace-home">
      <FloatingElements />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover authentic South African craftsmanship</h1>
          <p>Connect with local artisans and find unique, handmade treasures that tell a story</p>
          <InteractiveSearch 
            placeholder="Search for handmade treasures..."
            buttonText="Explore"
            onSearch={(query) => {
              // Navigate to search results
              window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }}
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section 
        ref={categoriesRef}
        className={`featured-categories ${categoriesVisible ? 'animate-in' : ''}`}
      >
        <div className="container">
          <h2>Explore authentic South African crafts</h2>
          <div className="category-grid">
            <Link to="/categories/jewelry" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">💎</div>
              </div>
              <h3>Traditional Jewelry</h3>
            </Link>
            <Link to="/categories/home-decor" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">🏡</div>
              </div>
              <h3>Home & Decor</h3>
            </Link>
            <Link to="/categories/art-collectibles" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">🎨</div>
              </div>
              <h3>Art & Collectibles</h3>
            </Link>
            <Link to="/categories/clothing" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">👗</div>
              </div>
              <h3>Handmade Clothing</h3>
            </Link>
            <Link to="/categories/bags" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">👜</div>
              </div>
              <h3>Bags & Accessories</h3>
            </Link>
            <Link to="/categories/pottery" className="category-card">
              <div className="category-image">
                <div className="image-placeholder">🏺</div>
              </div>
              <h3>Pottery & Ceramics</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section 
        ref={productsRef}
        className={`featured-products ${productsVisible ? 'animate-in' : ''}`}
      >
        <div className="container">
          <h2>Featured treasures from local artisans</h2>
          <div className="products-grid">
            <div className="product-placeholder">
              <div className="product-image-placeholder"></div>
              <p>Exquisite beadwork celebrating Ndebele traditions and contemporary South African design</p>
            </div>
            <div className="product-placeholder">
              <div className="product-image-placeholder"></div>
              <p>Hand-thrown ceramics inspired by the landscapes of the Western Cape</p>
            </div>
            <div className="product-placeholder">
              <div className="product-image-placeholder"></div>
              <p>Sustainable fashion pieces crafted with love by local designers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Right Now */}
      <section 
        ref={popularRef}
        className={`popular-section ${popularVisible ? 'animate-in' : ''}`}
      >
        <div className="container">
          <h2>Trending in South African crafts</h2>
          <div className="popular-tags">
            <Link to="/search?q=ndebele-beadwork" className="tag">Ndebele Beadwork</Link>
            <Link to="/search?q=rooibos-ceramics" className="tag">Rooibos Ceramics</Link>
            <Link to="/search?q=zulu-jewelry" className="tag">Zulu Jewelry</Link>
            <Link to="/search?q=cape-malay-textiles" className="tag">Cape Malay Textiles</Link>
            <Link to="/search?q=ubuntu-art" className="tag">Ubuntu Art</Link>
            <Link to="/search?q=protea-designs" className="tag">Protea Designs</Link>
          </div>
        </div>
      </section>

      {/* For Sellers CTA */}
      <section 
        ref={ctaRef}
        className={`seller-cta ${ctaVisible ? 'animate-in' : ''}`}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Share your craft with South Africa</h2>
            <p>Join a community of passionate artisans showcasing authentic South African creativity to the world</p>
            <Link to="/sell" className="btn btn-primary btn-large">
              Start your journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;