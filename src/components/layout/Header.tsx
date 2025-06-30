import { Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const isSellerArea = location.pathname.startsWith('/sell');

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <h1>Ietsie</h1>
          </Link>
          
          {!isSellerArea && (
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search for anything" 
                className="header-search"
              />
              <button className="search-btn">🔍</button>
            </div>
          )}
        </div>

        <div className="header-center">
          {!isSellerArea && (
            <nav className="main-nav">
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
              <Link to="/browse" className="nav-link">
                Browse
              </Link>
            </nav>
          )}
        </div>

        <div className="header-right">
          <Link to="/sell" className="sell-link">
            Sell on Ietsie
          </Link>

          <SignedOut>
            <div className="auth-buttons">
              <SignInButton mode="modal">
                <button className="btn btn-outline">Sign in</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-outline">Register</button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <nav className="user-nav">
              <Link to="/favorites" className="nav-link" title="Favorites">
                ♡
              </Link>
              <Link to="/messages" className="nav-link" title="Messages">
                💬
              </Link>
              <Link to="/cart" className="nav-link" title="Cart">
                🛒
              </Link>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </nav>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;