# Brussels Brewery

A modern, beautifully designed website for Brussels Brewery - an artisan coffee shop and café.

## About

Brussels Brewery is a cozy café where the charm of Brussels meets the aroma of freshly brewed coffee. This website showcases our handcrafted coffee, freshly baked pastries, and welcoming atmosphere.

## Features

- Responsive design optimized for all devices
- Smooth scroll-based reveal animations
- Auto-scrolling image gallery
- Modern UI with warm, inviting color palette
- Newsletter subscription form
- Multiple location listings

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/brussels-brewery.git

# Navigate to project directory
cd brussels-brewery

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
brussels-brewery/
├── public/
│   ├── Hero Image/     # Hero section images
│   ├── Icon/           # Logo and icons
│   └── Images/         # Gallery and content images
├── src/
│   ├── components/     # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Handmade.tsx
│   │   ├── Social.tsx
│   │   ├── Gallery.tsx
│   │   ├── Locations.tsx
│   │   └── Footer.tsx
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   └── index.css       # Global styles and animations
├── index.html
├── tailwind.config.ts
└── package.json
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#eed7bd` | Hero background |
| Dark Brown | `#252224` | Section backgrounds |
| Primary | `#533f39` | Buttons |
| Accent | `#ceb69b` | Highlights |

## Fonts

- **Libre Baskerville** - Headings (serif)
- **Nunito Sans** - Body text (sans-serif)

## License

MIT License - feel free to use this project for your own café or business website.

---

Brewed To Perfection, Served With Love
