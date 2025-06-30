import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';

const SellerLanding: React.FC = () => {
  return (
    <div className="seller-landing">
      {/* Hero Section */}
      <section className="seller-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Turn your creative passion into profit</h1>
            <p>Join thousands of South African artisans already selling on Ietsie</p>
            
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
              <h3>Support local</h3>
              <p>Connect with South African buyers who value local craftsmanship</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>Low fees</h3>
              <p>Keep more of what you earn with our competitive fee structure</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📱</div>
              <h3>Easy to use</h3>
              <p>User-friendly tools make it simple to manage your shop</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🚀</div>
              <h3>Marketing support</h3>
              <p>Get featured in our marketing campaigns and social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="success-stories">
        <div className="container">
          <h2>Success stories</h2>
          <div className="stories-grid">
            <div className="story">
              <div className="story-image"></div>
              <h3>Nomsa's Beadwork</h3>
              <p>"I started with just R500 and now make R15,000 a month selling my traditional beadwork!"</p>
            </div>
            <div className="story">
              <div className="story-image"></div>
              <h3>Cape Town Pottery</h3>
              <p>"Ietsie helped me reach customers across South Africa. My pottery business has grown 300%!"</p>
            </div>
            <div className="story">
              <div className="story-image"></div>
              <h3>Johannesburg Jewelry</h3>
              <p>"The support and community on Ietsie is amazing. I've learned so much from other sellers."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to start your Ietsie shop?</h2>
          <p>Join thousands of successful South African sellers</p>
          <SignedOut>
            <SignUpButton mode="modal" forceRedirectUrl="/sell/onboarding">
              <button className="btn btn-primary btn-large">
                Start selling today
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link to="/sell/onboarding" className="btn btn-primary btn-large">
              Set up your shop now
            </Link>
          </SignedIn>
        </div>
      </section>
    </div>
  );
};

export default SellerLanding;