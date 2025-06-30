import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';
import FloatingElements from '../../components/ui/FloatingElements';
import '../../styles/seller-landing.css';

const SellerLanding: React.FC = () => {
  return (
    <div className="seller-landing">
      <FloatingElements />
      {/* Hero Section */}
      <section className="seller-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Turn your creative passion into profit</h1>
            <p>Join thousands of South African artisans building thriving businesses on Ietsie</p>
            
            <div className="stats">
              <div className="stat">
                <h3>60M+</h3>
                <p>Active buyers</p>
              </div>
              <div className="stat">
                <h3>R2.1B+</h3>
                <p>In sales in 2023</p>
              </div>
              <div className="stat">
                <h3>5.4M+</h3>
                <p>Active sellers</p>
              </div>
            </div>

            <SignedOut>
              <div className="cta-buttons">
                <SignUpButton mode="modal" forceRedirectUrl="/sell/onboarding">
                  <button className="btn btn-primary btn-large">
                    Get started
                  </button>
                </SignUpButton>
                <SignInButton mode="modal" forceRedirectUrl="/sell/dashboard">
                  <button className="btn btn-outline btn-large">
                    Sign in
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="signed-in-actions">
                <Link to="/sell/dashboard" className="btn btn-primary btn-large">
                  Go to your shop
                </Link>
                <Link to="/sell/onboarding" className="btn btn-outline btn-large">
                  Set up your shop
                </Link>
              </div>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How selling works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create your Ietsie shop</h3>
              <p>Set your shop name, create a compelling story, and add a beautiful banner.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Stock your shop</h3>
              <p>Add your products with stunning photos and detailed descriptions that sell.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>You're ready to sell!</h3>
              <p>Once you publish, your listings can be found by millions of buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div className="container">
          <h2>Why choose Ietsie?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🇿🇦</div>
              <h3>Proudly South African</h3>
              <p>Connect with local buyers who celebrate South African creativity and craftsmanship</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💎</div>
              <h3>Premium positioning</h3>
              <p>Showcase your unique handmade items to customers seeking authentic, quality products</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📈</div>
              <h3>Grow your business</h3>
              <p>Access powerful analytics and marketing tools to scale your creative business</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤝</div>
              <h3>Community support</h3>
              <p>Join a vibrant community of makers with resources, workshops, and peer support</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🚀</div>
              <h3>Marketing boost</h3>
              <p>Get featured in our campaigns, newsletters, and social media to reach new customers</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>Competitive fees</h3>
              <p>Keep more of what you earn with transparent, fair pricing that grows with you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="success-stories">
        <div className="container">
          <h2>Real success stories from our makers</h2>
          <div className="stories-grid">
            <div className="story">
              <div className="story-image"></div>
              <h3>Nomsa's Traditional Beadwork</h3>
              <p>"I started with just R500 from my grandmother's beadwork patterns. Now I employ three local women and make R25,000 a month celebrating our Zulu heritage!"</p>
            </div>
            <div className="story">
              <div className="story-image"></div>
              <h3>Cape Town Ceramics Co.</h3>
              <p>"What began as a weekend hobby turned into my full-time passion. Ietsie connected me with customers worldwide who love South African design. My revenue grew 400% in one year!"</p>
            </div>
            <div className="story">
              <div className="story-image"></div>
              <h3>Karoo Leather Works</h3>
              <p>"From a small farm in the Karoo to customers in Joburg and Cape Town. The seller community taught me everything about online business. Now I'm expanding internationally!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Your creative journey starts here</h2>
          <p>Join the Ietsie family and turn your passion into a thriving South African business</p>
          <SignedOut>
            <div className="cta-buttons">
              <SignUpButton mode="modal" forceRedirectUrl="/sell/onboarding">
                <button className="btn btn-primary btn-large">
                  Start your shop journey
                </button>
              </SignUpButton>
              <SignInButton mode="modal" forceRedirectUrl="/sell/dashboard">
                <button className="btn btn-outline btn-large">
                  I'm already a seller
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="signed-in-actions">
              <Link to="/sell/onboarding" className="btn btn-primary btn-large">
                Complete shop setup
              </Link>
              <Link to="/sell/dashboard" className="btn btn-outline btn-large">
                Go to dashboard
              </Link>
            </div>
          </SignedIn>
        </div>
      </section>
    </div>
  );
};

export default SellerLanding;