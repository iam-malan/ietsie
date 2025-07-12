# Ietsie Marketplace - Claude Guidelines

## Project Overview
Ietsie is a South African marketplace application similar to Etsy, connecting local artisans and crafters with buyers. Built with Next.js and Supabase.

## Code Style & Standards

### TypeScript
- **Required**: Use TypeScript for all new code
- Strict mode enabled in tsconfig.json
- Prefer interfaces over types for object definitions
- Use proper typing for Supabase client and database rows

### ESLint Configuration
- Follow Airbnb style guide with TypeScript extensions
- Use ESLint + Prettier for code formatting
- Custom rules for South African context (currency formatting, etc.)

### File & Component Naming
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Pages: kebab-case (e.g., `shop-dashboard.tsx`)
- Utilities: camelCase (e.g., `formatZarCurrency.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `SA_PROVINCES.ts`)

## Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Start Supabase locally
supabase start

# Stop Supabase
supabase stop

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm run test

# Build for production
npm run build

# Database migrations
supabase db reset
supabase db push
```

### Supabase Commands
```bash
# Generate TypeScript types
supabase gen types typescript --local > lib/supabase-types.ts

# Run database tests
supabase test db

# View logs
supabase logs
```

## Supabase Setup

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Local Development
1. Install Supabase CLI: `npm install -g supabase`
2. Link project: `supabase link --project-ref your-project-ref`
3. Start local: `supabase start`
4. Apply migrations: `supabase db push`

### Row Level Security (RLS)
- Always enable RLS on all tables
- Create appropriate policies for user roles (buyer/seller/admin)
- Test policies thoroughly before production

## South African Specific Guidelines

### Currency Handling
- Default currency: ZAR (South African Rand)
- Format: R 1,234.56
- Use `formatZarCurrency()` utility function
- Store monetary values as integers (cents) in database

### Payment Integration
- Primary: PayFast (local SA gateway)
- Webhook URL: `/api/webhooks/payfast`
- Test mode for development, live mode for production
- Handle EFT, credit card, and instant EFT payments

### Localization
- Primary language: English
- Secondary: Afrikaans
- Use next-i18next for translations
- Date format: DD/MM/YYYY (SA standard)
- Phone format: +27 XX XXX XXXX

### Shipping & Logistics
- Support SA postal codes (4-digit format)
- Integrate with local couriers:
  - SAPO (South African Post Office)
  - The Courier Guy
  - Aramex SA
- Calculate shipping by province and weight

### Cultural Considerations
- Feature SA-specific categories:
  - Traditional Beadwork
  - African Art & Crafts
  - Handwoven Textiles
  - Heritage Items
- Support local festivals and holidays in marketing
- Use appropriate imagery and colors (earth tones, heritage themes)

## Workflow Guidelines

### Git Workflow
- Commit frequently with descriptive messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Always run tests before committing
- Create feature branches from main

### Database Migrations
- Always create migrations for schema changes
- Test migrations on local DB first
- Use descriptive migration names
- Include rollback procedures

### Testing Strategy
- Unit tests for utilities and components (Jest)
- Integration tests for Supabase queries
- E2E tests for critical user flows (Playwright)
- Test payment flows in sandbox mode

## Security Requirements
- Validate all user inputs
- Sanitize data before storing
- Use Supabase RLS for access control
- Implement rate limiting for API routes
- Regular security audits of dependencies

## Performance Guidelines
- Use Next.js Image component for optimization
- Implement lazy loading for product grids
- Optimize Supabase queries with proper indexes
- Use Supabase Edge Functions for heavy computations
- Monitor Core Web Vitals

## Important Notes
- Always query Supabase with prepared statements
- Use environment variables for all sensitive data
- Implement proper error handling and user feedback
- Follow WCAG 2.1 accessibility guidelines
- Optimize for South African internet speeds (vary greatly)

## Deployment
- Target platform: Vercel
- Environment: Production uses live Supabase project
- CDN: Use Vercel Edge for global content delivery
- Domain: ietsie.co.za (when ready)

## Monitoring & Analytics
- Error tracking: Sentry
- Analytics: Google Analytics + Supabase Analytics
- Performance: Vercel Analytics
- Uptime: Vercel monitoring

## South African Legal Compliance
- Implement POPIA (Protection of Personal Information Act) compliance
- Include proper terms of service for SA consumers
- Handle VAT calculations (15% standard rate)
- Implement proper dispute resolution process