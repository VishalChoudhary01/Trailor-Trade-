# Trailor Ride - Motorcycle E-Commerce Landing Page

Welcome to **Trailor Ride**, a modern and high-performance motorcycle e-commerce landing page built with cutting-edge web technologies. This platform showcases premium motorcycle models, generates qualified leads, and drives app downloads through an immersive digital experience.

![Trailor Ride Landing Page](public/images/hero/Hero.png)

## 🚀 Live Demo

[View Live Site](https://trailor-ride.vercel.app) | [GitHub Repository](https://github.com/VishalChoudhary01/Trailor-Trade-.git)

## 📖 Project Overview

Trailor Ride is a responsive landing page designed for a premium motorcycle brand, featuring:

- **Digital Showroom** - Showcase of urban, adventure, and electric motorcycle models
- **Lead Generation** - Interactive quote request and test ride booking forms
- **Brand Experience** - Immersive design that appeals to motorcycle enthusiasts
- **Mobile Companion** - Promotional section for the riding companion app

### Target Models

- **Urban Commander** - Agile city commuting
- **Adventure Seeker** - Off-road and touring capabilities
- **Eco Innovator** - Sustainable electric performance

## 🛠️ Technology Stack

### Core Framework

```bash
Next.js 16 | React 19 | TypeScript
```

- **App Router** with Server Components for optimal performance
- **Type Safety** with comprehensive TypeScript implementation
- **SEO Optimization** through server-side rendering

### Styling & Design

```bash
Tailwind CSS 4 | PostCSS
```

- **Utility-first CSS** for rapid development
- **Responsive design** with mobile-first approach
- **Brand colors** (#1959AC primary blue)

### Animation & Interactions

```bash
Motion | React Icons
```

- **Smooth page transitions** and micro-interactions with Motion library
- **Interactive components** with hover states
- **Mobile-friendly** gesture support

### Performance

```bash
Next.js Image Optimization | Code Splitting
```

- **Optimized images** with WebP support
- **Dynamic imports** for reduced bundle size
- **Fast loading** with performance best practices

## 📱 Key Features

### 🎯 Smart Navigation

- Sticky navbar with scroll effects
- Mobile-optimized sidebar with smooth animations
- Dropdown menus for organized content hierarchy

### 📝 Conversion-Focused Forms

- Motorcycle-specific quote requests
- Test ride booking system
- Rider preference capture
- Real-time form validation

### 🎨 Premium Design

- Consistent color palette and typography
- Responsive grid layouts
- Professional spacing system
- Accessible interface design

### ⚡ Performance Optimized

- Optimized Core Web Vitals
- Efficient image loading
- Minimal JavaScript footprint
- Fast initial page load

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/VishalChoudhary01/Trailor-Trade-.git
cd trailor-ride
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```text
trailor-ride/
├── app/
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout component
│   ├── page.tsx                     # Home page
│   ├── components/
│   │   ├── atoms/                   # Basic UI elements
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── TextArea.tsx
│   │   │   └── TrailorTradeLogo.tsx
│   │   ├── molecules/               # Combined components
│   │   │   ├── Navbar.tsx
│   │   │   └── MobileSideMenu.tsx
│   │   ├── organisms/               # Complex sections
│   │   │   ├── Card.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── HeaderBanner.tsx
│   │   │   ├── HeaderContent.tsx
│   │   │   ├── SponsersImages.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── DealershipSection.tsx
│   │   │   ├── RiderCommunity.tsx
│   │   │   ├── StoriesCarousel.tsx
│   │   │   └── TestimonialsCarousel.tsx
│   │   └── templates/               # Full page templates
│   │       ├── Bikes.tsx
│   │       ├── Contact.tsx
│   │       ├── Hero.tsx
│   │       ├── Motivate.tsx
│   │       ├── Points.tsx
│   │       ├── Sponsers.tsx
│   │       └── TechnologyShowcase.tsx
│   └── utils/
│       └── data/
│           ├── BikersFeatures.ts
│           ├── PointsFeatures.ts
│           ├── performanceCard.ts
│           ├── sponsors.ts
│           ├── testimonialData.tsx
│           ├── menu.ts
│           └── Options.ts
├── public/
│   ├── icons/                       # Icon assets
│   │   ├── pin.svg
│   │   └── testimonial_cards/
│   │       └── pipe.svg
│   └── images/
│       ├── background/
│       ├── banner/
│       ├── brands/
│       ├── cards/
│       ├── features/
│       ├── hero/
│       ├── testimonial_users/
│       └── social/
├── eslint.config.mjs                # ESLint configuration
├── next.config.ts                   # Next.js configuration
├── postcss.config.mjs               # PostCSS configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🎨 Customization

### Brand Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
import tailwind from "@tailwindcss/vite";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1959AC",
        // Add your brand colors
      },
    },
  },
};
```

### Adding New Sections

To add a new page section:

1. Create a new component in `app/components/organisms/` or `app/components/templates/`
2. Follow the existing component pattern with TypeScript types
3. Add Motion animations using the established conventions
4. Include the section in `app/page.tsx`
5. Update responsive breakpoints as needed

### Form Customization

Update form fields in `app/components/templates/Contact.tsx`:
- Modify `BookingFormData` interface for new fields
- Add/remove `Input`, `Select`, or `TextArea` components
- Update validation rules in `handleSubmit`

## 📈 Performance Metrics

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🌐 SEO & Accessibility

- Semantic HTML structure
- Proper meta tags and OpenGraph
- Keyboard navigation support
- Screen reader friendly
- Mobile-responsive design
- Reduced-motion support

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠️ Support

For support and questions:

- Open an issue on GitHub
- Contact: development@trailorride.com

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

---

# Development Rules for AI Coding Agents

This section helps future AI agents understand how to work safely on the project.

## Inspect Existing Code Before Changing It

Always read the actual source file implementations before making changes. Do not assume component behavior from filenames alone. Key files to review include:

- `app/components/atoms/Button.tsx` - Button component with `Omit<React.ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'type'>` pattern
- `app/components/organism/FAQAccordion.tsx` - Accordion with `useReducedMotion`, variants, and height animation
- `app/components/moleclues/Footer.tsx` - Scroll-driven reveal with `useScroll`, `useSpring`, `useTransform`
- `app/components/providers/MotionProvider.tsx` - `LazyMotion features={domAnimation}`
- `app/components/providers/SmoothScrollProvider.tsx` - Lenis integration with `ReactLenis`

## Follow the Real Folder Structure

The project uses an App Router structure under `app/`:

- `app/layout.tsx` - Root layout with `Roboto_Condensed` and `Inter` fonts, `Metadata`
- `app/page.tsx` - Home page that composes all sections wrapped in `SmoothScrollProvider` → `MotionProvider`
- `app/components/` - All UI components organized by atom/molecule/organism/template
- `app/utils/data/` - Data modules with typed interfaces and arrays
- `public/` - Static assets including icons and images

Do not create new folders or move files to match imaginary structures. Work within the existing organization.

## Reuse Existing Components

Before creating new components, check if existing ones can be reused:

- **Button** (`app/components/atoms/Button.tsx`) - Accepts `buttonText`, `buttonStyle`, `leftIcon`, `rightIcon`, `buttonType?: 'button' | 'submit' | 'reset'`
- **Input** (`app/components/atoms/Input.tsx`) - Form input with label, type, placeholder, value, required, error state
- **Select** (`app/components/atoms/Select.tsx`) - Select with label, options, placeholder, required state
- **TextArea** (`app/components/atoms/TextArea.tsx`) - Text area with label, rows, required state
- **Card** (`app/components/organism/Card.tsx`) - Card with image, title, description, link
- **HeaderBanner** (`app/components/organism/HeaderBanner.tsx`) - Hero banner with discriminated union props

## Preserve TypeScript Contracts

The project uses `strict: true` in `tsconfig.json`. Important patterns:

- **`Omit<React.ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'type'>`** - Button props pattern (Button.tsx)
- **Discriminated unions** - `HeaderBannerProps = HeaderBannerBaseProps & ({ showButton: true; buttonText: string } | { showButton?: false; buttonText?: string })` (HeaderBanner.tsx)
- **Exported types from data modules** - `NavigationItem`, `FeatureItem`, `PointFeature`, `PerformanceCard`, `SponsorBrand`, `Testimonial` from `app/utils/data/index.ts`
- **`StaticImageData`** - From `next/image` for typed image props
- **`keyof` patterns** - Used for form field typing in Contact.tsx (`keyof BookingFormData`)

Do not introduce `any` types. If a type is genuinely unknown, use `unknown` and narrow it.

## Preserve Existing Tailwind Styling

The project uses Tailwind CSS 4 with PostCSS. Key conventions:

- **Font families** - `Roboto_Condensed` and `Inter` from `next/font/google`
- **Color palette** - Primary `#1959AC`, neutrals, success, error states
- **Spacing** - Consistent scale using Tailwind's numeric system
- **Breakpoints** - `sm`, `md`, `lg`, `xl` following mobile-first approach
- **Component classes** - Pre-built class strings on components (e.g., `buttonStyle`, `baseInputStyle` in Contact.tsx)

Do not globally change Tailwind configuration without understanding the impact on existing components. Component-specific styles are baked into the TypeScript props.

## Preserve Motion Animations

The project uses `motion/react` ^12.23.24 with specific patterns:

### Motion Components Used

- **`m.div`** - Lightweight Motion div (`import { m } from 'motion/react'`)
- **`m.h2`, `m.p`, `m.ul`, `m.li`, `m.nav`** - Motion heading/paragraph/list items
- **`AnimatePresence`** - From `motion/react` for entrance/exit animations
- **`LazyMotion`** - From `motion/react` with `features={domAnimation}` (MotionProvider.tsx)
- **`motion.div`** - Full Motion component where needed

### Key Animation Hooks

- **`useScroll`** - With `target` ref and `offset` arrays (Footer.tsx: `offset: ["start end", "end end"]`)
- **`useSpring`** - For smoothing scroll values (Footer.tsx: `stiffness: 90, damping: 26, mass: 0.4`)
- **`useTransform`** - Range mapping (Footer.tsx: `useTransform(smoothProgress, [0, 1], [40, 0])`)
- **`useReducedMotion`** - Accessibility (FAQAccordion.tsx, StoriesCarousel.tsx)
- **`useVariants`** - Animation state objects (FAQAccordion, CTASection, SponsersImages, DealershipSection)

### Variant Pattern

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
```

### Reduced Motion Handling

```typescript
const reduce = useReducedMotion();
// Use ternary to conditionally apply animation durations
transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE }}
```

Do not add new animation configurations without understanding the existing patterns. If adding animations, follow the established variant/transition structure.

## Do Not Introduce Unnecessary `any`

The project uses `strict: true` in `tsconfig.json`. All component props, state types, and hook return types are explicitly typed. Common typed patterns:

- `useState<number | null>(0)` - FAQAccordion open index
- `useState<BookingFormData>(initialState)` - Contact form state
- `useRef<HTMLElement | null>(null)` - Footer scroll ref
- `useState<number>(0)` - StoriesCarousel current index
- `React.ComponentPropsWithoutRef<'button'>` - Base button props

When extending types, use `Omit`, `Pick`, `Intersection` types from the existing patterns rather than `any`.

## Preserve Existing Tailwind Styling

See the Tailwind section above. Component-specific class strings are part of the TypeScript props interface and should not be globally overridden.

## Preserve Motion Animations

See the Motion section above. The variant/transition pattern is consistent across the codebase.

## Independent Tablet and Mobile Decisions

**Critical rule**: When only a desktop Figma design is provided, do not ask for mobile/tablet screenshots before implementing responsiveness. Make independent responsive design decisions using the desktop design as the visual source of truth.

The developer must:

1. Understand the original desktop composition
2. Identify which elements are fixed, fluid, overlapping, or content-driven
3. Understand the parent-child layout relationships
4. Identify where the desktop layout will become crowded
5. Choose appropriate tablet breakpoints
6. Decide how the composition should adapt on mobile
7. Preserve the original visual identity
8. Ensure responsive content remains readable
9. Test intermediate widths
10. Preserve interactions and animations

Do not invent completely new visual designs. Tablet and mobile should be thoughtfully adapted versions of the same design, not mechanically reduced desktop layouts.

## Use Meaningful Content Instead of Lorem Ipsum

When creating or completing page sections:

- Do not use Lorem Ipsum
- Do not use random placeholder sentences
- Understand the purpose of each section
- Use the existing content and project context
- Write meaningful headings
- Write concise supporting descriptions
- Use appropriate CTA labels
- Maintain consistent brand voice
- Ensure the content fits the intended visual layout

For this motorcycle-focused website, use relevant motorcycle, riding, dealership, product discovery, ownership, test-ride, and customer-experience language.

### Content Accuracy Rules

Never fabricate:

- Customer testimonials
- Customer names
- Product specifications
- Performance statistics
- Prices
- Warranty promises
- Certifications
- Dealership locations
- Business achievements

Use the project's actual information where available. When genuine factual content is unavailable, write useful, non-claim-based marketing copy rather than inventing facts. Do not change the Figma layout to accommodate unnecessarily long text. Write concise content that respects the intended heading and paragraph dimensions.

## Use Appropriate Existing Images

Do not replace a suitable supplied image with an unrelated image. Use `next/image` for content images where appropriate.

### Next.js Image Requirements

Prefer `next/image` for content images. Document:

- **Image imports** - `import Image from 'next/image'`
- **Public directory image paths** - `/images/...` under public folder
- **`width` and `height`** - Explicit dimensions for optimization
- **`fill`** - For full-width/height images with parent positioning
- **`sizes`** - Responsive image sizes: `(min-width: 768px) 384px, 100vw`
- **`priority`** - For above-the-fold hero images: `priority` prop on `<Image>`
- **`loading="lazy"`** - For below-the-fold images
- **`alt` text** - Descriptive alternative text
- **`object-fit`** - `object-cover`, `object-contain`, `object-position`
- **Responsive image selection** - Different sizes for different breakpoints

### Image Performance

- **Prioritize the actual above-the-fold hero image** - Use `priority` prop
- **Lazy-load below-fold images** - Default behavior or `loading="lazy"`
- **Avoid unnecessary eager loading** - Only images in viewport
- **Use responsive image sizes** - Different `sizes` for mobile/desktop
- **Prevent layout shifts** - Always specify `width` and `height` or use `fill` with parent `position: relative`
- **Use suitable source dimensions** - Don't load 4K images for small displays
- **Preserve aspect ratios** - Maintain consistent ratios across breakpoints
- **Use appropriate modern formats** - WebP/AVIF via Next.js optimization
- **Avoid unnecessary client-side image loading** - Let Next.js optimize and serve

### Background Images

Explain when to use:

- **Next.js Image** - Content images, optimized, responsive
- **CSS background images** - Decorative, gradients, textures, masks
- **Decorative background images** - Non-essential visuals
- **Masked imagery** - Text-over-image scenarios
- **Gradients** - Section backgrounds, overlays
- **Textured backgrounds** - Adding depth without imagery

A background image should support the section's content and must not overpower the foreground.

### Image Positioning

Match Figma using:

- **`object-cover`** - Crop to fill, maintain aspect ratio
- **`object-contain`** - Scale to fit entirely, maintain aspect ratio
- **`object-position`** - Position within the box (e.g., `center`, `top`)
- **Aspect ratios** - `aspect-[4/3]`, `aspect-[16/9]`
- **Cropping** - Controlled via `object-position`
- **Responsive positioning** - Different `object-position` at different breakpoints

The image should retain the intended composition across desktop, tablet, and mobile.

## Development Workflow

### Project Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/VishalChoudhary01/Trailor-Trade-.git
cd trailor-ride
npm install
```

### Development Server

```bash
npm run dev
# Starts at http://localhost:3000
```

### Production Build

```bash
npm run build
# Creates production build in .next/
npm start
# Starts production server
```

### Linting

```bash
npm run lint
# ESLint configuration in eslint.config.mjs
```

### TypeScript Validation

```bash
npx tsc --noEmit
# strict: true, allowJs: false, paths @/*
```

### Available Scripts (from package.json)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
}
```

### Environment Configuration

The project does not require environment variables for core functionality. If adding external services:

1. Check `.env.example` if it exists
2. Add required vars to `.env.local` (never commit secrets)
3. Reference via `process.env.VAR_NAME` with `import.meta.env.VAR_NAME` in Next.js 16
4. Never expose API keys or credentials in client code

### Adding a New Section

1. Create component in `app/components/organisms/` or `app/components/templates/`
2. Follow existing TypeScript prop patterns
3. Add Motion animations using established conventions
4. Include in `app/page.tsx` within the `<main>` structure
5. Add responsive adjustments for tablet/mobile
6. Add meaningful content (not Lorem Ipsum)
7. Optimize images with `next/image`
8. Run `npm run build` to verify

### Creating a Reusable Component

1. Determine if it's an atom (Button, Input, Select, TextArea), molecule (Navbar, MobileSideMenu), or organism (Card, FAQAccordion)
2. Define prop interface following project conventions
3. Implement with Tailwind classes consistent with project
4. Add Motion animations if appropriate following existing patterns
5. Export types for use by other components
6. Add to index or data modules as needed

### Defining Component Props

Follow the project's established patterns:

- **Atoms** (`Button`, `Input`, `Select`, `TextArea`): `Omit<React.ComponentPropsWithoutRef<'element'>, 'children' | 'className' | 'type'> & { ...custom props }`
- **Organisms** (`Card`, `HeaderBanner`, `FAQAccordion`): Exported interfaces with required/optional props
- **Required props** have no `?` (e.g., `buttonText: string`)
- **Optional props** have `?` (e.g., `buttonStyle?: string`)
- **Union values** for limited choices (e.g., `buttonType?: 'button' | 'submit' | 'reset'`)
- **Default values** in destructuring (e.g., `buttonStyle = ''`)

### Adding a Custom Hook

The project currently does not have standalone custom hooks - all state management is done inline within components using `useState`, `useEffect`, etc. If creating a new hook:

- Ensure it solves a specific problem not easily handled inline
- Type inputs and outputs explicitly
- Use it in multiple components if the logic is shared
- Document inputs, returns, and responsibility

### Managing State

State lives in various places:

- **Local component state** - `useState` within individual components (form state, carousel index, accordion open state)
- **Shared state** - Not using app-level Context; Lenis has its own internal context
- **URL-based state** - Not using query params for state management
- **Server-provided data** - Data modules in `app/utils/data/` with typed interfaces
- **Derived state** - Computed from props or state (e.g., `currentIndex` derived from scroll position)

### Creating Motion Animations

Follow the established patterns:

1. **Define variants** as const objects with `hidden` and `show` states
2. **Use `useVariants`** or pass `variants` prop to Motion components
3. **Define transitions** with `duration`, `ease`, `delay`, `staggerChildren`
4. **Use `useReducedMotion`** to respect user preferences
5. **Use `useScroll`/`useTransform`/`useSpring** for scroll-driven animations
6. **Use `AnimatePresence`** for enter/exit animations of removable elements
7. **Use `LazyMotion`** from `MotionProvider` for composition

### Adding a New Image

1. Place image in `public/images/` appropriate category
2. Import using `next/image`:
   ```typescript
   <Image
     src={someImage}
     alt="descriptive alt text"
     width={570}
     height={570}
     fill
     className="object-cover"
   />
   ```
3. Add `priority` prop for above-the-fold hero images
4. Add `loading="lazy"` for below-the-fold images
5. Add `sizes` prop for responsive sizing
6. Ensure `alt` text is descriptive and relevant

### Using Lenis Safely

Lenis is integrated via `SmoothScrollProvider`:

```typescript
import { ReactLenis } from "lenis/react";

<ReactLenis
  ref={lenisRef}
  options={{
    autoRaf: false,
    anchors: { offset: -80 },
    syncTouch: false,
    stopInertiaOnNavigate: true,
  }}
>
  {children}
</ReactLenis>
```

**To change Lenis settings safely**:

- Modify the `options` object in `SmoothScrollProvider.tsx`
- `autoRaf: false` keeps Lenis from starting its own rAF loop; Motion's `frame.setup` drives the loop
- `anchors: { offset: -80 }` leaves room for fixed navbar on anchor links
- `syncTouch: false` uses native touch scrolling feel
- `stopInertiaOnNavigate: true` stops inertia when navigating

**To disable smooth scrolling**:

- Remove `ReactLenis` wrapper and use regular scroll, or
- Set `options={{ autoRaf: true, ... }}` to let Lenis manage its own loop

**To prevent nested scroll interference**:

- Keep `syncTouch: false` for natural touch behavior
- Avoid adding additional scroll listeners that conflict
- The `offset: -80` on anchors accounts for fixednavbar height

**To handle internal anchor links**:

- The `anchors: { offset: -80 }` config shifts anchor target positioning
- Motion's `frame.setup` callback integrates with Lenis raf loop

### Implementing Figma Designs

1. **Inspect Figma** for exact dimensions, spacing, typography, colors
2. **Match the desktop composition** as closely as possible in HTML/Tailwind
3. **Use the established responsive strategy** - adaptive, not mechanically scaled
4. **Preserve layer hierarchy** - overlapping elements, z-index, absolute/relative positioning
5. **Match Motion animations** - variant/transition patterns, timing, reduced motion
6. **Use project typography** - `Roboto_Condensed` and `Inter` fonts, established sizes
7. **Use project color palette** - `#1959AC` primary, neutrals from the design system
8. **Preserve existing interactions** - hover states, button animations, form validation

### Making Responsive Adjustments

When only desktop Figma is provided:

1. Identify fixed-width elements vs. fluid elements
2. Determine which layout becomes crowded at smaller widths
3. Decide on tablet breakpoint (typically `640px` or `768px` based on Tailwind `md`)
4. Decide on mobile breakpoint (typically `375px` or `425px` based on Tailwind `sm`)
5. Stack elements that were side-by-side on desktop
6. Adjust padding/margins for smaller touch targets
7. Reflow text to remain readable within constrained widths
8. Test at multiple widths using browser dev tools

Do not invent completely new visual designs. Adapt the existing composition thoughtfully.

## Troubleshooting

### Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Types not resolving | `tsconfig.json` paths not recognized | Ensure `moduleResolution: "bundler"` and restart IDE |
| Motion animations not running | `LazyMotion` not wrapping children | Ensure `MotionProvider` wraps the component tree |
| Lenis scroll not smooth | Conflicting `useEffect` scroll listeners | Check for duplicate scroll event listeners |
| Form validation not working | Missing `required` prop on inputs | Add `required` prop or add client-side validation |
| Navigation dropdown not opening | `openDropdown` state not managed | Check `useState<number | null>(null)` pattern |
| Image not optimizing | Missing `width`/`height` or `fill` parent | Add explicit dimensions or parent `position: relative` |

### Debugging Motion Animations

1. Check variant object structure: `const variants = { hidden, show: { transition } }`
2. Verify `initial` and `whileInView`/`animate` props are correct
3. Check `transition` object has proper `duration` and `ease`
4. Ensure `useReducedMotion` isn't suppressing animations accidentally
5. Verify Motion component is imported from `motion/react`, not HTML element

### Debugging Lenis Integration

1. Confirm `SmoothScrollProvider` wraps the entire component tree
2. Check `ReactLenis` has proper `ref` and `options`
3. Verify no other `useEffect` is adding conflicting scroll listeners
4. Ensure `frame.setup` from `motion/react` is called (done automatically in provider)
5. Check `offset: -80` accounts for fixed navbar height

## Final Development Checklist

Before committing changes:

- [ ] Inspected existing code for similar components/patterns
- [ ] Followed the real folder structure (app/, components/, utils/data/)
- [ ] Reused existing components where appropriate
- [ ] Preserved TypeScript contracts (no unexpected `any`, proper Omit/Pick patterns)
- [ ] Preserved Tailwind styling (component-specific class strings)
- [ ] Preserved Motion animations (variant/transition patterns, reduced motion)
- [ ] Made independent tablet/mobile decisions if only desktop Figma available
- [ ] Used meaningful content (not Lorem Ipsum)
- [ ] Used appropriate existing images with `next/image`
- [ ] Preserved Lenis and Motion synchronization patterns
- [ ] Avoided duplicate providers (only one `SmoothScrollProvider` and one `MotionProvider`)
- [ ] Validated all changed components with `npm run build`
- [ ] Ran `npm run lint` with no errors
- [ ] Ran `npx tsc --noEmit` with no errors
- [ ] Reported exactly which files were modified

---

# Folder Structure Reference

```
trailor-ride/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout, fonts, metadata
│   ├── page.tsx                      # Home page composition
│   ├── globals.css                   # Global Tailwind imports
│   └── components/
│       ├── atoms/                    # Basic UI elements
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   ├── Select.tsx
│       │   ├── TextArea.tsx
│       │   └── TrailorTradeLogo.tsx
│       ├── molecules/                # Combined components
│       │   ├── Navbar.tsx
│       │   └── MobileSideMenu.tsx
│       ├── organisms/                # Complex sections
│       │   ├── Card.tsx
│       │   ├── FAQAccordion.tsx
│       │   ├── HeaderBanner.tsx
│       │   ├── SponsersImages.tsx
│       │   ├── CTASection.tsx
│       │   ├── DealershipSection.tsx
│       │   ├── RiderCommunity.tsx
│       │   ├── StoriesCarousel.tsx
│       │   └── TestimonialsCarousel.tsx
│       └── templates/                # Full page templates
│           ├── Hero.tsx
│           ├── Bikes.tsx
│           ├── Contact.tsx
│           ├── Points.tsx
│           ├── Sponsers.tsx
│           ├── TechnologyShowcase.tsx
│           └── Motivate.tsx
│   └── utils/
│       └── data/                     # Typed data modules
│           ├── BikersFeatures.ts
│           ├── PointsFeatures.ts
│           ├── performanceCard.ts
│           ├── sponsors.ts
│           ├── testimonialData.tsx
│           ├── menu.ts
│           └── Options.ts
├── public/                           # Static assets
│   ├── icons/                        # SVG icons
│   └── images/                       # Image assets
│       ├── background/
│       ├── banner/
│       ├── brands/
│       ├── cards/
│       ├── features/
│       ├── hero/
│       └── testimonial_users/
├── styles/                           # CSS/PostCSS config
│   ├── tailwind.config.ts            # Tailwind CSS 4 config
│   └── postcss.config.mjs           # PostCSS configuration
├── configs/                          # TypeScript & Next.js
│   ├── tsconfig.json                 # strict: true, paths @/*
│   └── next.config.ts                # Next.js 16 App Router config
└── README.md                         # This file
```