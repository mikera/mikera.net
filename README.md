# Mike Anderson's Personal Website

A minimal, static Next.js website for [mikera.net](https://mikera.net).

## Features

- Clean, minimal design
- Fully static export
- Responsive layout
- Built with Next.js 15 and TypeScript
- Styled with Tailwind CSS
- Auto-deployed to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

1. Install pnpm globally (if not already installed):
```bash
npm install -g pnpm
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

### Static Export

To build the static site:

```bash
pnpm build
```

The static files will be generated in the `out/` directory, ready for deployment to any static hosting service.

### Build Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the application
- `pnpm start` - Start production server

## Deployment

### GitHub Pages (Auto-deploy)

The `main` or `master` branch is automatically deployed to GitHub Pages via GitHub Actions workflow.

**Setup Requirements:**
1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Ensure the repository has the necessary permissions for Pages deployment

**Manual Deployment:**
- Push to `main` or `master` branch to trigger auto-deployment
- Or manually trigger the workflow from the Actions tab

### Other Hosting Options

The static export can also be deployed to:
- Netlify
- Vercel
- Any static hosting service

## Customization

- Edit `pages/index.tsx` to modify the homepage content
- Update `styles/globals.css` for custom styling
- Modify `next.config.js` for build configuration

## License

© 2025 Mike Anderson. All rights reserved. 