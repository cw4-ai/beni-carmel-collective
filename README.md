# Béni Carmel Collective

A luxury streetwear e-commerce website built with Next.js 14+, React, TypeScript, and Tailwind CSS.

> **More Than Fashion. A Calling.**

## 🎨 Brand Overview

**Béni Carmel Collective** is a high-end Gen Z fashion brand blending luxury streetwear, culture, identity, and subtle faith-inspired symbolism.

- **Béni** = Blessed
- **Carmel** = Elevation, mountain symbolism
- **Collective** = Creative youth community

## 🏗️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm/yarn/pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cw4-ai/beni-carmel-collective.git
cd beni-carmel-collective
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
beni-carmel-collective/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & animations
│   ├── shop/               # Shop pages
│   │   ├── page.tsx        # Shop listing
│   │   └── [id]/
│   │       └── page.tsx    # Product detail
│   └── cart/
│       └── page.tsx        # Shopping cart
├── components/             # Reusable React components
├── public/                 # Static assets
├── lib/                    # Utilities & data
│   ├── products.ts         # Product database
│   └── types.ts            # TypeScript types
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Color Palette

| Color | Hex | Class | Usage |
|-------|-----|-------|-------|
| Black | `#0B0B0B` | `bcc-black` | Primary background |
| Cream | `#F5F1E8` | `bcc-cream` | Primary text |
| Beige | `#D6C7B2` | `bcc-beige` | Secondary text |
| Gold | `#C8A96A` | `bcc-gold` | Accents & highlights |
| Olive | `#6B7F4C` | `bcc-olive` | Secondary accent |
| Navy | `#1B3A5C` | `bcc-navy` | Gradient backgrounds |
| Brown | `#8B6F47` | `bcc-brown` | Tertiary accent |
| Forest | `#2D5016` | `bcc-forest` | Dark accent |

### Typography

- **Headings**: Georgia (Serif)
- **Body**: Inter (Sans-serif)

## 🛍️ Product Categories

### Clothing
- Hoodies
- T-Shirts
- Baseball Jackets
- Baseball Crop Shirts
- Gym Wear
- Scarves

### Accessories
- Shoulder Bags
- Backpacks

### Gender Sections
- **Men**: All product categories tailored for men
- **Women**: Specialized cuts including crop shirts and scarves

## ✨ Features

- ✅ Fully responsive design (mobile-first)
- ✅ Dark luxury aesthetic with grain texture
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with metadata
- ✅ Product filtering by gender, category, color, price
- ✅ Color selection UI with swatches
- ✅ Shopping cart functionality
- ✅ Product detail pages with related products
- ✅ Wishlist support
- ✅ Newsletter subscription
- ✅ Lookbook gallery
- ✅ Community section

## 📱 Responsive Design

Fully optimized for:
- Mobile (375px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Production Build

```bash
npm run build
npm start
```

## 🎬 Animations

Powered by Framer Motion:
- Fade-in on scroll
- Parallax hero effect
- Product zoom on hover
- Smooth page transitions
- Stagger animations for lists

## 📝 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 🔧 Configuration

### Tailwind CSS
Custom color system with BCC brand colors pre-configured in `tailwind.config.ts`.

### TypeScript
Strict mode enabled with path aliases (`@/*`).

### Next.js
Optimized for:
- Image optimization
- Fast refresh
- API routes
- Static generation

## 🤝 Contributing

Contributions welcome! Please follow the existing code style and component structure.

## 📄 License

© 2026 Béni Carmel Collective. All rights reserved.

---

**Built with ❤️ for the next generation of luxury streetwear.**

*More Than Fashion. A Calling.*
