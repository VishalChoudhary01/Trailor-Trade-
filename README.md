# Trailor Ride - Motorcycle E-Commerce Landing Page

Welcome to **Trailor Ride**, a modern and high-performance motorcycle e-commerce landing page built with cutting-edge web technologies. This platform showcases premium motorcycle models, generates qualified leads, and drives app downloads through an immersive digital experience.

## 🚀 Live Demo

[View Live Site](https://trailor-ride.vercel.app) | [GitHub Repository](https://github.com/VishalChoudhary01/Trailor-Trade-.git)

## 🏍️ Project Overview

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

```
trailor-ride/
├── app/
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout component
│   ├── page.tsx                     # Home page
│   ├── components/
│   │   ├── atoms/                   # Basic UI elements
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Select.tsx
│   │   │   └── TextArea.tsx
│   │   ├── moleclues/               # Combined components
│   │   │   └── Navbar.tsx
│   │   ├── organism/                # Complex sections
│   │   │   ├── Card.tsx
│   │   │   ├── HeaderBanner.tsx
│   │   │   ├── HeaderContent.tsx
│   │   │   └── SponsersImages.tsx
│   │   └── templates/               # Full page templates
│   │       ├── Bikes.tsx
│   │       ├── Contact.tsx
│   │       ├── Hero.tsx
│   │       ├── Motivate.tsx
│   │       ├── Points.tsx
│   │       ├── Sponsers.tsx
│   │       └── TopGradientWave.tsx
│   └── utils/
│       └── data/
│           └── Bikers.js            # Sample data
├── public/
│   ├── icons/                       # Icon assets
│   └── images/                      # Image assets
│       ├── background/
│       ├── banner/
│       ├── brands/
│       ├── cards/
│       ├── features/
│       ├── hero/
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

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1959AC',
      // Add your brand colors
    }
  }
}
```

### Content Updates

- Modify motorcycle models in component files
- Update testimonials and brand content
- Adjust form fields as needed

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
