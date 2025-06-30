// src/components/auth/Signup.tsx
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Join Ietsie</h1>
        <p>Create your account and start discovering amazing South African crafts</p>
      </div>
      <SignUp 
        routing="path"
        path="/signup"
        signInUrl="/login"
        afterSignUpUrl="/"
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

export default Signup;