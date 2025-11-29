# EveraCabs Migration Plan: WordPress to Next.js + Headless CMS

## Phase 1: Setup & Dependencies (Week 1)

### Install CMS Dependencies
```bash
npm install @strapi/strapi @strapi/plugin-graphql
# OR for Contentful
npm install contentful @contentful/rich-text-react-renderer
```

### Content Types Structure
- **Services**: cab types, pricing, features
- **Fleet**: Vehicle details, images, specifications  
- **Testimonials**: Customer reviews, ratings
- **Pages**: About, Contact, Terms, Privacy
- **Bookings**: Form configurations, pricing rules
- **Media**: Images, videos, documents

## Phase 2: Content Migration (Week 2)

### WordPress Export
1. Use WordPress export tool or WP-CLI
2. Extract media files from wp-content/uploads
3. Convert WordPress posts/pages to CMS entries
4. Migrate custom fields and metadata

### CMS Content Structure
```javascript
// Example Strapi content types
{
  services: {
    title: "string",
    description: "richtext", 
    price: "number",
    features: "json",
    image: "media"
  },
  fleet: {
    name: "string",
    type: "enumeration",
    capacity: "number", 
    features: "json",
    images: "media"
  }
}
```

## Phase 3: Frontend Development (Week 3-4)

### Update Navigation for Cab Services
- Services dropdown (Airport, Local, Outstation)
- Fleet showcase
- Booking integration
- Contact/Support

### Key Pages to Build
1. **Homepage**: Hero, services overview, testimonials
2. **Services**: Detailed service pages with pricing
3. **Fleet**: Vehicle gallery with specifications
4. **Booking**: Multi-step booking form
5. **About**: Company info, team, history
6. **Contact**: Multiple contact methods, locations

## Phase 4: Booking System Integration (Week 5)

### Booking Flow
1. Service selection
2. Route/destination input
3. Date/time picker
4. Vehicle selection
5. Customer details
6. Payment integration
7. Confirmation

### Required APIs
- Distance calculation (Google Maps)
- Payment processing (Stripe/Razorpay)
- SMS/Email notifications
- Booking management

## Phase 5: SEO & Performance (Week 6)

### SEO Migration
- Migrate WordPress URLs with redirects
- Update meta tags and structured data
- Implement local business schema
- Optimize for "cab service" keywords

### Performance Optimization
- Image optimization with Next.js Image
- Static generation for service pages
- CDN setup for media files
- Core Web Vitals optimization

## Phase 6: Testing & Deployment (Week 7)

### Testing Checklist
- [ ] All pages render correctly
- [ ] Booking form functionality
- [ ] Mobile responsiveness
- [ ] Payment processing
- [ ] Email/SMS notifications
- [ ] SEO meta tags
- [ ] Performance metrics

### Deployment Strategy
1. Setup staging environment
2. DNS migration planning
3. SSL certificate setup
4. CDN configuration
5. Monitoring setup

## Technical Stack

### Frontend (Next.js)
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Maps**: Google Maps API
- **Payments**: Stripe/Razorpay integration

### Backend/CMS
- **CMS**: Strapi (recommended) or Contentful
- **Database**: PostgreSQL or MySQL
- **Media**: Cloudinary or AWS S3
- **APIs**: REST + GraphQL

### Infrastructure
- **Hosting**: Vercel (frontend) + Railway/DigitalOcean (CMS)
- **CDN**: Vercel Edge Network
- **Monitoring**: Vercel Analytics + Sentry
- **Email**: SendGrid or AWS SES

## Content Migration Priorities

### High Priority
1. Service pages (Airport, Local, Outstation)
2. Fleet information
3. Pricing tables
4. Contact information
5. Booking form

### Medium Priority  
1. About page content
2. Testimonials
3. Blog posts (if any)
4. FAQ section

### Low Priority
1. Archive pages
2. Old promotional content
3. Unused media files

## Post-Migration Tasks

### Week 8-9: Optimization
- Monitor Core Web Vitals
- A/B test booking conversion
- Optimize images and assets
- Setup analytics tracking

### Week 10: Launch
- Final DNS switch
- Monitor for issues
- Update social media links
- Notify customers of new site

## Estimated Timeline: 10 weeks
## Estimated Cost: $5,000-$15,000 (depending on CMS choice and integrations)

## Success Metrics
- Page load speed < 2s
- Mobile performance score > 90
- Booking conversion rate improvement
- SEO ranking maintenance/improvement
- Zero downtime migration