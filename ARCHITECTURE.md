# Ietsie Marketplace - Architecture Documentation

## Overview
Ietsie is a South African marketplace platform built with modern web technologies, focusing on simplicity, scalability, and local market needs.

## Tech Stack Decisions

### Frontend: Next.js 14+ with TypeScript
**Why Next.js:**
- Server-side rendering for SEO (crucial for marketplace discovery)
- API routes for backend logic and webhook handling
- Built-in optimization (images, fonts, code splitting)
- Excellent TypeScript support
- Easy deployment on Vercel
- App Router for modern React patterns

**Key Features:**
- App Router with TypeScript
- Tailwind CSS for styling
- React Hook Form for form handling
- Zustand for client state management
- Next-i18next for localization

### Backend: Supabase (Exclusive)
**Why Supabase:**
- Postgres database with full SQL capabilities
- Built-in authentication with row-level security
- Real-time subscriptions for live updates
- File storage for product images
- Edge functions for custom logic
- Automatic API generation
- Built-in security features

**Supabase Services Used:**
- Database: Core data storage
- Auth: User authentication and authorization
- Storage: Product images and documents
- Edge Functions: Payment processing, email notifications
- Realtime: Order updates, messaging

## Database Architecture

### Core Entities
```
Users (profiles)
├── Shops (seller stores)
│   ├── Products (listings)
│   │   ├── ProductImages
│   │   ├── ProductVariations
│   │   └── ProductReviews
│   ├── Orders
│   │   ├── OrderItems
│   │   └── OrderPayments
│   └── ShopPolicies
├── Categories
├── Tags
└── Messages (buyer-seller communication)
```

### Row Level Security (RLS) Strategy
- Users can only access their own data
- Sellers can manage their shops and products
- Buyers can view public data and their orders
- Admins have elevated permissions for moderation

### Data Relationships
- One-to-Many: User → Shops, Shop → Products
- Many-to-Many: Products ↔ Categories, Products ↔ Tags
- Complex: Orders with multiple products from different shops

## Authentication & Authorization

### Authentication Flow
1. Email/password or social login (Google, Apple)
2. User role assignment (buyer/seller/admin)
3. Profile completion with SA-specific fields
4. Shop creation for sellers

### Role-Based Access Control
```typescript
type UserRole = 'buyer' | 'seller' | 'admin';

interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  first_name: string;
  last_name: string;
  phone?: string;
  province?: SAProvince;
  created_at: string;
}
```

### Security Measures
- RLS policies for data isolation
- API rate limiting
- Input validation and sanitization
- Secure payment token handling

## Payment Architecture

### Primary Integration: PayFast
**Why PayFast:**
- South African payment gateway
- Supports ZAR currency
- EFT, credit cards, instant payments
- Well-documented API
- Reasonable fees for marketplace

### Payment Flow
1. User completes checkout
2. Generate PayFast payment URL
3. Redirect to PayFast for payment
4. Webhook confirms payment
5. Update order status
6. Trigger fulfillment process

### Webhook Security
- Verify PayFast signatures
- Use Supabase Edge Functions
- Idempotent payment processing
- Audit trail for all transactions

## File Storage Strategy

### Supabase Storage Structure
```
bucket: product-images/
├── {shop_id}/
│   ├── {product_id}/
│   │   ├── main.jpg
│   │   ├── gallery/
│   │   │   ├── img1.jpg
│   │   │   └── img2.jpg
│   │   └── thumbnails/
│   │       ├── thumb_main.jpg
│   │       └── thumb_img1.jpg
└── {user_id}/
    └── avatar.jpg
```

### Image Optimization
- Next.js Image component for automatic optimization
- Multiple sizes for responsive images
- WebP format support
- Lazy loading for performance

## Real-time Features

### Supabase Realtime Subscriptions
- Order status updates
- New message notifications
- Inventory changes
- Live chat between buyers and sellers

### Implementation
```typescript
// Order status updates
supabase
  .channel('orders')
  .on('postgres_changes', {
    event: 'UPDATE',
    schema: 'public',
    table: 'orders',
    filter: `buyer_id=eq.${userId}`
  }, handleOrderUpdate)
  .subscribe();
```

## Search & Discovery

### Search Strategy
- Basic: Postgres full-text search
- Advanced: Supabase pgvector for semantic search
- Faceted search by category, price, location
- Elasticsearch integration (future enhancement)

### SEO Considerations
- Server-side rendering for product pages
- Dynamic sitemaps
- Structured data markup
- Open Graph tags for social sharing

## South African Specific Architecture

### Currency & Localization
- ZAR as base currency
- Decimal precision for accurate pricing
- Multi-language support (English/Afrikaans)
- Local date/time formatting

### Regional Features
- Province-based shipping calculations
- Local courier integrations
- SA-specific payment methods
- Heritage day promotions system

## Performance Considerations

### Frontend Optimization
- Code splitting by route
- Image optimization with Next.js
- Lazy loading for product grids
- Client-side caching with SWR

### Database Optimization
- Proper indexing on search columns
- Query optimization with explain plans
- Connection pooling
- Read replicas for reporting (future)

### CDN Strategy
- Vercel Edge Network
- Image CDN through Supabase
- Static asset optimization

## Scalability Planning

### Current Architecture Limits
- Supabase: Up to 10GB database (paid plans)
- Vercel: Excellent auto-scaling
- File storage: 100GB (expandable)

### Future Scaling Options
- Database sharding by shop
- Microservices for heavy operations
- External search service (Algolia/Elasticsearch)
- Dedicated image CDN

## Security Architecture

### Data Protection
- End-to-end encryption for sensitive data
- PII handling per POPIA compliance
- Secure session management
- Regular security audits

### API Security
- Rate limiting per user/IP
- SQL injection prevention
- XSS protection
- CSRF tokens

## Monitoring & Observability

### Error Tracking
- Sentry for client and server errors
- Custom error boundaries
- User feedback collection

### Performance Monitoring
- Vercel Analytics
- Core Web Vitals tracking
- Database query performance
- Custom business metrics

### Logging Strategy
- Structured logging with Supabase
- Payment transaction logs
- User activity tracking
- Performance metrics

## Development & Deployment

### Development Environment
- Local Supabase with Docker
- Hot reload with Next.js
- TypeScript strict mode
- ESLint and Prettier

### CI/CD Pipeline
- GitHub Actions for testing
- Automated deployment to Vercel
- Database migration testing
- Performance regression testing

### Environment Management
- Development: Local Supabase
- Staging: Hosted Supabase (smaller instance)
- Production: Hosted Supabase (full instance)

## Future Enhancements

### Phase 2 Features
- Mobile app (React Native + Expo)
- Advanced analytics dashboard
- AI-powered recommendations
- Bulk seller tools

### Phase 3 Features
- Multi-vendor subscription model
- Advanced inventory management
- Integration with SA banks
- Marketplace API for third parties

## Risk Mitigation

### Technical Risks
- Vendor lock-in with Supabase (mitigation: standard SQL)
- Payment processing failures (backup providers)
- Image storage costs (compression optimization)

### Business Risks
- Competition from established platforms
- Payment gateway changes
- Regulatory compliance updates
- Economic factors affecting local market

## Conclusion

This architecture provides a solid foundation for a South African marketplace while maintaining simplicity and developer productivity. The chosen stack allows for rapid development while providing enterprise-grade features through Supabase's platform.