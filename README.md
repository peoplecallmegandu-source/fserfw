# Aurora Coffee — Interactive Coffee Website

Welcome to Aurora Coffee, a modern multi-page website showcasing small-batch coffee, origin stories, and an engaging shopping experience.

Project structure

my-project/
├── public/
│   ├── index.html          # Main landing page (hero, shop, testimonials, FAQ)
│   ├── about.html          # About page (story, team, sustainability)
│   └── contact.html        # Contact form & wholesale information
├── server/
│   └── index.js            # Express static server
├── package.json            # Project dependencies & scripts
├── render.yaml             # Sample Render deployment config
└── README.md               # This file

Design & features

- Tailwind CSS classes are used directly in all HTML files (via CDN) for rapid styling.
- Google Fonts (Inter, Playfair Display) are referenced at the top of each HTML file in comments (as required).
- Visual design choices include glassmorphism, gradient accents, depth via shadows, and full-bleed imagery.
- Full width layout: all main wrappers use w-full / max-w-none to ensure content spans the viewport width.
- Dark mode support with CSS custom properties and a theme toggle that persists in localStorage.
- Parallax hero image, scroll-triggered reveal animations using IntersectionObserver.
- Interactive components: modal dialogs, accordion FAQ, product cards with buy add flows, micro-interactions (button presses, subtle animations).
- Gamification: simple "Tasting Journey" progress bar tied to signups stored in localStorage.
- Accessibility: ARIA attributes for modal and live regions for form feedback, keyboard dismiss via Escape key.
- SEO: meta tags and OpenGraph placeholders are included.
- Image placeholders use the special placeholder format (https://pixabay.com/get/g4c4486cf065c3c747e0007d8eaa778b9f47b802617c7149de7c8b435fa0a612782b7e2d1619086c7a8cd75d47e9196e276c0b022543f997b37282703ebe8c6f7_640.jpg) so an automated image fetcher may replace them with high-quality assets.

Local development

1. Install dependencies

   npm install

2. Run the server

   npm run start

   For development with auto-reload (if nodemon installed):

   npm run dev

3. Open your browser at http://localhost:3000

Deployment

- This project includes a sample render.yaml to deploy to Render. Configure the service name, region, and environment variables as needed. The start command runs node server/index.js.

Customization

- Fonts: Adjust the Google Fonts link in the head of HTML files. Each HTML file contains a comment with the used fonts.
- Images: Replace the https://images.unsplash.com/photo-1634400414538-d3c0fc2bc63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw3fHxkZXNjcmlwdGlvbnxlbnwwfDB8fHwxNzU1MjYwNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080 placeholders with actual image URLs or base64 data URIs. If you have user-uploaded images, replace the src in <img> directly with the provided base64 data URI.
- Tailwind: The project uses the Tailwind CDN for ease. For production-grade builds, consider installing Tailwind and generating a custom build with purge settings.

Notes & Next steps

- This is a front-end focused project with a minimal Node.js static server. For production, consider adding a payment/checkout backend, database for orders, and hardened security.
- Accessibility improvements: test with screen readers and keyboard-only navigation to refine ARIA labels and focus management.
- Performance: Replace CDN Tailwind in production with a compiled CSS bundle to reduce unused styles.

If you'd like, I can:
- Integrate a real checkout flow (Stripe) and build a cart API.
- Convert Tailwind CDN usage to a postcss build with purge for optimized CSS.
- Replace placeholder images with a curated set of real coffee photography.

Enjoy crafting exceptional cups!
