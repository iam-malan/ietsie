# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository for the Ietsie project.

Project Overview

Ietsie is a South African online marketplace inspired by Etsy, designed to connect local artisans and crafters with buyers seeking unique, handmade, and vintage goods. The platform aims to foster a community of South African creators, offering tools for sellers to manage shops and buyers to discover and purchase products. It will reflect South African culture through its design, product categories, and local integrations.

Development Commands





npm run dev - Start development server with Vite and hot module replacement



npm run build - Build for production (runs TypeScript compiler then Vite build)



npm run lint - Run ESLint to check code quality



npm run preview - Preview production build locally



npm run test - Run unit tests with Jest (to be implemented)



npm run deploy - Deploy to Firebase Hosting (to be configured)

Architecture Overview

This is a React + TypeScript + Vite application with the following key integrations:

Tech Stack





Frontend: React 19.1.0 with TypeScript



Build Tool: Vite 7.0.0 with HMR



Authentication: Clerk React for user management



Backend Services: Firebase (Firestore, Storage, Functions)



Linting: ESLint with TypeScript support



Styling: CSS Modules with Sass support



State Management: React Context API with optional Redux for complex state



Routing: React Router v6



Testing: Jest with React Testing Library

Project Structure

src/
├── api/           # Firebase configuration, service initializations, and API call functions
├── components/    # Reusable React components (e.g., Button, Form, ProductCard)
│   ├── auth/      # Authentication-related components (e.g., Login, Signup)
│   ├── shop/      # Shop management components (e.g., ShopCard, ShopForm)
│   ├── product/   # Product listing and management components (e.g., ProductCard, ProductForm)
│   ├── search/    # Search and filtering components (e.g., SearchBar, FilterDropdown)
│   ├── cart/      # Shopping cart components (e.g., CartItem, CartSummary)
│   ├── order/     # Order management components (e.g., OrderList, OrderDetails)
│   └── message/   # Messaging components (e.g., MessageThread, MessageInput)
├── context/       # React Context providers for global state (e.g., AuthContext, CartContext)
├── hooks/         # Custom React hooks (e.g., useAuth, useFirestore)
├── pages/         # Page components (e.g., Home, Shop, Product, Checkout)
├── routes/        # Routing configuration with React Router
├── types/         # TypeScript type definitions (e.g., User, Product, Shop)
├── utils/         # Utility functions (e.g., formatCurrency, validateEmail)
└── App.tsx        # Main application component

Key Configuration Notes





Firebase: Replace placeholders in src/api/firebase.ts with actual project credentials. Use environment variables (e.g., VITE_FIREBASE_API_KEY) for sensitive information.



Clerk: Set the publishable key in src/main.tsx for authentication to work. Use environment variables (e.g., VITE_CLERK_PUBLISHABLE_KEY) for the key.



TypeScript: Uses separate configs for app (tsconfig.app.json) and Node (tsconfig.node.json)



Environment Variables: Create .env.development and .env.production files based on .env.example. Do not commit these files to version control.

Current State

The project is freshly scaffolded with placeholder Firebase and Clerk configurations. The main folders are created but empty, ready for feature development. The next steps involve setting up authentication, creating the database schema in Firestore, and building out the core features.

Development Guidelines





Coding Standards:





Follow the Airbnb JavaScript Style Guide.



Use camelCase for variable and function names.



Use PascalCase for component names.



Write clean, readable code with proper comments.



Git Workflow:





Use feature branches (e.g., feature/shop-creation) for new features or bug fixes.



Write descriptive commit messages (e.g., "Add shop creation form component").



Rebase and squash commits before merging to main.



Pull Request Process:





Create a pull request for each feature or fix.



Include a description of the changes and any relevant issue numbers.



Request reviews from at least one team member.



Issue Tracking:





Use GitHub Issues to track bugs, features, and tasks.



Assign issues to team members and use labels (e.g., bug, enhancement).

Design and UX





Cultural Elements: Incorporate South African colors (e.g., vibrant greens, yellows, reds inspired by the flag) and patterns (e.g., N державної or Zulu designs).



Responsive Design: Ensure compatibility across mobile and desktop devices.



Branding: Use a clean, modern design with a focus on showcasing products.



Guides and Wizards: Implement a shop setup wizard and listing guide for sellers.

Deployment





Firebase Hosting: Use firebase deploy after configuring Firebase project settings.



Vercel/Netlify: Configure the project for deployment on these platforms as alternatives.



CI/CD: Set up GitHub Actions for automated testing and deployment.