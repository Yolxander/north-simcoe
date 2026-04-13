---
name: Location-based SEO pages
overview: Create a reusable LocationPage component and router configuration to generate location-specific landing pages for 3 priority service areas (Barrie, Newmarket, Caledon) with optimized SEO metadata, structured content, and sitemap updates.
todos:
  - id: create-location-page
    content: Create src/views/LocationPage.vue component with location data mapping for 3 priority service areas (Barrie, Newmarket, Caledon), dynamic content rendering, and SEO meta tags
    status: pending
  - id: update-router
    content: Add 3 location-specific routes to src/router/index.js with unique SEO metadata for each location (Barrie, Newmarket, Caledon)
    status: pending
    dependencies:
      - create-location-page
  - id: update-sitemap
    content: Add 3 location page URLs to public/sitemap.xml with appropriate priority and change frequency
    status: pending
    dependencies:
      - update-router
---

# Location-Based SEO Pages Implementation

## Overview

Create location-specific landing pages for property management services targeting 3 priority service areas (Barrie, Newmarket, Caledon) to improve local SEO rankings. Each page will have unique content, meta tags, and structured data optimized for searches like "[Location] property management".

## Files to Create/Modify

### 1. Create Location Page Component

**File:** `src/views/LocationPage.vue`

A reusable component that displays location-specific content based on route parameters. Will include:

- Dynamic hero section with location name
- Location-specific intro content
- Two service cards (Residential and Commercial) with location context
- Contact form section
- SEO-optimized meta tags via useHead
- Location-specific JSON-LD schema markup

**Key features:**

- Uses route params to determine location
- Location data mapping for 3 priority areas (Barrie, Newmarket, Caledon)
- Reuses existing components (HeroGlobal, LayoutTwoSections, ServiceCard, ContactUs, ObserverComponent)
- Each location gets unique title, description, H1, and content

### 2. Update Router Configuration

**File:** `src/router/index.js`

Add location-specific routes for 3 priority service areas:

- `/property-management-barrie`
- `/property-management-newmarket`
- `/property-management-caledon`

Each route will:

- Use the LocationPage component
- Set location-specific SEO metadata (title, description, keywords)
- Include Open Graph and Twitter Card meta tags
- Set canonical URLs
- Add location-specific JSON-LD schema

### 3. Update Sitemap

**File:** `public/sitemap.xml`

Add URL entries for 3 location pages with:

- Full URL paths
- Last modified date (current date)
- Change frequency: monthly
- Priority: 0.8 (high priority for local SEO)

### 4. Location Data Structure

Each location will have:

- **name**: Display name (e.g., "Barrie", "King City")
- **slug**: URL-friendly identifier (e.g., "barrie", "king-city")
- **title**: SEO title (e.g., "Property Management Barrie | Expert Landlord Services")
- **description**: Meta description with location keywords
- **h1**: Main heading for the page
- **introContent**: Location-specific introductory paragraph
- **region**: Regional context (e.g., "Simcoe County", "York Region")
- **nearbyAreas**: Related nearby locations for internal linking

## Implementation Details

### Location Page Component Structure

```vue
<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent>
    <LayoutTwoSections :intro="intro" />
  </ObserverComponent>
  <ObserverComponent>
    <ServiceCard :service="residentialService" />
  </ObserverComponent>
  <ObserverComponent>
    <ServiceCard :service="commercialService" />
  </ObserverComponent>
  <ContactUs />
</template>
```

### Router Route Pattern

```javascript
{
  path: "/property-management-:location",
  name: "LocationPage",
  component: LocationPage,
  props: true,
  // Setup function with location-specific SEO
}
```

### Location-Specific Content Strategy

- Each location page emphasizes local expertise
- Content mentions the specific city/town name naturally
- Includes regional context (e.g., "in Simcoe County" for Barrie)
- References nearby areas for broader coverage
- Maintains consistent service descriptions with location context

### SEO Optimizations

- Unique title tags: "[Location] Property Management | [Value Proposition]"
- Meta descriptions: 150-160 characters with location + service keywords
- H1 tags: "Property Management Services in [Location], Ontario"
- Keywords meta tag: Location-specific variations
- Canonical URLs: Prevent duplicate content issues
- JSON-LD schema: LocalBusiness schema with location-specific data

## Location List (3 priority areas)

1. **Barrie** (Simcoe County) - Largest city in Simcoe County, major market
2. **Newmarket** (York Region) - Growing urban center in York Region
3. **Caledon** (Peel Region) - Expanding community in Peel Region

## Benefits

- Improved rankings for "[Location] property management" searches
- Better local SEO visibility
- More targeted landing pages for each service area
- Enhanced user experience with location-specific content
- Increased organic traffic from local searches