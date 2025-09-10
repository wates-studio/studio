# Project Documentation: Dua Lighting Experience

This document provides an overview of the Dua Lighting Experience web application, its structure, key features, and development guidelines.

## Core Concepts & Features

- **Homepage Visual Hook**: Interactive gallery featuring 'Lights On' and 'Lights Off' image states to immediately engage the user.
- **Seamless Animated Transitions**: The site heavily uses GSAP (GreenSock Animation Platform) with ScrollTrigger to create a narrative experience. Animations include:
    - Smooth cross-fade animations between hero images.
    - A scroll-triggered transition from the hero section to the main content.
    - Staggered reveals of text and UI elements as the user scrolls.
- **Brand Introduction**: The homepage reveals the brand's core concept, 'The Artisanal Technologist,' with a focus on minimalist design and typography.
- **Adaptive Image Loading**: The Next.js `<Image>` component is used for automatic image optimization, resizing, and lazy loading, prioritizing performance.
- **Integrated CMS**: The blog is powered by a custom-built CMS using Next.js API Routes and an SQLite database, allowing for dynamic content management.

## Project Structure

The project follows a standard Next.js App Router structure.

- `src/app/`: Contains all the routes and pages of the application.
    - `(pages)`: Main pages like `/`, `/about`, `/services`, etc.
    - `api/`: Backend API routes that power the custom CMS.
- `src/components/`: Contains all reusable React components.
    - `ui/`: Generic, reusable UI components (e.g., Button, Card) from Shadcn/UI.
    - `page/`: Components specific to a certain page or section.
- `src/lib/`: Contains utility functions, database logic (`db.ts`), and type definitions (`types.ts`).
- `src/styles/`: Global styles and Tailwind CSS configuration.
- `public/`: Static assets like images and fonts.
- `docs/`: Project documentation.

## Styling

The project uses **Tailwind CSS** for styling, configured in `tailwind.config.ts`. The base styles and color palette are defined there. Global styles are in `src/app/globals.css`. The design is built around a minimalist, dark-themed aesthetic with a primary background color of `#111111`.

## Content Management (Blog)

The blog is managed through a simple, custom-built CMS.

- **Database**: An SQLite database file (`database.db`) stores the blog posts.
- **API**: Next.js API Routes under `src/app/api/posts/` handle requests to fetch and manage posts.
    - `GET /api/posts`: Fetches all blog posts.
    - `GET /api/posts/[slug]`: Fetches a single post by its slug.
- **Frontend**: The `/blog` and `/blog/[slug]` pages are server components that fetch data directly from the API endpoints.

## GSAP Animations

For detailed documentation on the scroll-based animations, please refer to the dedicated GSAP documentation file.

- **[GSAP Animation Guide](./gsap-animations.md)**
