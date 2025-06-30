// src/components/auth/Login.tsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome back to Ietsie</h1>
        <p>Sign in to your account to continue shopping</p>
      </div>
      <SignIn 
        routing="path"
        path="/login"
        signUpUrl="/signup"
        afterSignInUrl="/"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
};

export default Login;