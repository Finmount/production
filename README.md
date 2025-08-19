# Finmount - Accounting Services Website

A modern, responsive website for Finmount Ltd, an accounting firm specializing in services for SMEs, contractors, and growth companies based in Dublin.

## Project Overview

Finmount's website is built with React, TypeScript, and Tailwind CSS to provide a professional, responsive interface for clients seeking accounting services. The website showcases the firm's services, team members, pricing plans, and contact information.

## Features

- **Modern, Responsive Design**: Optimized for all device sizes
- **Service Showcase**: Detailed service pages for each accounting offering
- **Team Section**: Professional profiles of team members with their qualifications
- **Interactive Pricing**: Clear pricing options with hover effects
- **Quote Request Form**: Modal form for requesting tailored quotes
- **WhatsApp Integration**: Direct WhatsApp contact feature
- **Industry-Specific Sections**: Targeted content for different industry sectors

## Tech Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Build tool and development server
- **React Router**: For client-side routing
- **Lucide Icons**: For consistent iconography throughout the site

## Project Structure

```
project/
├── public/
│   └── images/           # Public images (logos, team photos, etc.)
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   │   └── services/     # Individual service page components
│   │   └── policies/     # Policy page components
│   └── utils/            # Utility functions and hooks
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Key Components

- **Header**: Navigation with services dropdown
- **TeamSection**: Team member profiles with photos and qualifications
- **QuoteModal**: Modal form for quote requests
- **Footer**: Site-wide footer with links and copyright
- **WhatsAppBubble**: Floating WhatsApp contact button
- **ServicePage**: Template for service description pages

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. For production build:
   ```bash
   npm run build
   ```

## Design Features

- **Color Scheme**: Professional blues with white backgrounds for readability
- **Typography**: Clean, modern font hierarchy
- **Animations**: Subtle hover effects and transitions
- **Card-Based UI**: Consistent card patterns for services and team members
- **Call-to-Action Elements**: Strategically placed buttons for quote requests and WhatsApp contact

## Pages

1. **Home**: Overview of services and benefits
2. **Services**: Detailed service descriptions
3. **Industries**: Industry-specific solutions
4. **About**: Team information and company values
5. **Pricing**: Service pricing options
6. **Resources**: Helpful accounting resources
7. **Contact**: Contact information and form
8. **Policies**: Privacy, terms, complaints, and cookie policies

## Customization

To update the team members, modify the `teamMembers` array in `src/components/TeamSection.tsx`.

To update pricing plans, modify the `plans` array in `src/pages/PricingPage.tsx`.

## WhatsApp Integration

The WhatsApp contact feature is linked to the number +353-0874905010. To change this, update the phone number in WhatsAppBubble.tsx and anywhere else the WhatsApp link appears.

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages after building with `npm run build`.

---

© 2025 Finmount Ltd. All Rights Reserved.
