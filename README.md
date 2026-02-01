# Valentine's Ask-Out 💕

A beautiful, interactive Valentine's Day ask-out page built with React, Framer Motion, and Tailwind CSS.

## Features

- **Entrance animation** – Pulsing heart loader
- **Personalized header** – "For My Dearest Sukriti"
- **Love letter** – Customizable heartfelt message
- **Photo gallery** – Placeholder cards (add your own photos!)
- **Yes/No question** – The "No" button runs away on hover with playful messages
- **Confetti celebration** – When they say yes! 🎉

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the dev server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Customization

- **Name**: Edit `src/pages/Index.tsx` – change "Sukriti" to your special someone's name
- **Love letter**: Edit `src/components/LoveLetter.tsx` – personalize the message
- **Photos**: Edit `src/components/PhotoGallery.tsx` – replace placeholder gradients with your image URLs

## Project Structure

```
src/
├── components/
│   ├── Confetti.tsx      # Celebration animation
│   ├── FloatingHearts.tsx # Background hearts
│   ├── LoveLetter.tsx    # The love letter content
│   └── PhotoGallery.tsx  # Photo grid (add your images!)
├── pages/
│   └── Index.tsx         # Main page
├── App.tsx
├── main.tsx
└── index.css
```

The original vanilla HTML version is preserved as `index-vanilla.html` if you prefer a simpler setup.
