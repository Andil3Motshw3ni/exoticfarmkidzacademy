# Exotic Farm Kidz Academy

A playful, responsive Next.js website for Exotic Farm Kidz Academy - a non-profit organization offering farm-based early learning programs for children ages 2-8.

**NPO Registration No: 238-935**

## Features

- Animated hero section with cloud animations
- Responsive navigation with mobile hamburger menu
- Programs & Activities showcase
- Image gallery with lightbox
- Contact form with client-side validation
- Parent testimonials
- Farm-themed visual elements (rolling hills, animals, clouds)
- Fully responsive design (mobile, tablet, desktop)
- Vercel-ready deployment

## Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Baloo 2 & Nunito (Google Fonts)
- **Icons:** Custom SVG icons

## Project Structure

```
exotic-farm-kidz/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-farm.svg
│   │   ├── animals/
│   │   │   ├── chicken.svg
│   │   │   ├── cow.svg
│   │   │   ├── pig.svg
│   │   │   └── sheep.svg
│   │   └── gallery/
│   │       ├── photo1.svg
│   │       ├── photo2.svg
│   │       ├── photo3.svg
│   │       ├── photo4.svg
│   │       ├── photo5.svg
│   │       └── photo6.svg
│   └── icons/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js
│   │   ├── contact.js
│   │   └── gallery.js
│   └── styles/
│       └── globals.css
├── .gitignore
├── package.json
├── vercel.json
└── README.md
```

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/exotic-farm-kidz.git
   cd exotic-farm-kidz
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

**One-Click Deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/exotic-farm-kidz)

## Customization

### Replace Placeholder Images

The SVG placeholder images in `/public/images/` can be replaced with real photos:

- `logo.svg` → Your academy logo
- `hero-farm.svg` → Hero section farm photo
- `gallery/*.svg` → Real photos from your academy

### Update Contact Information

Edit the following files:
- `src/components/Footer.jsx` - Phone and email
- `src/pages/contact.js` - Address and contact details

### Modify Colors

All colors are defined as CSS variables in `src/styles/globals.css`:

```css
:root {
  --bg-cream: #FFF8E1;
  --surface-white: #FFFFFF;
  --sky-blue: #87CEEB;
  --sunny-yellow: #FFD700;
  --leafy-green: #90EE90;
  --text-primary: #4A3F35;
  --text-secondary: #7D6B5D;
}
```

## License

Copyright 2025 Exotic Farm Kidz Academy. All rights reserved.

## Contact

- **Phone:** +27 78 000 0000
- **Email:** info@exoticfarmkidz.org
- **Address:** Main Road, Farmville

---

Built with care for little learners by MiniMax Agent
