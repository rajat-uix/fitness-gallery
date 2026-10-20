# ⚡ PulseFit - Modern Fitness Gallery Website

A modern, responsive, and interactive fitness gallery website built with pure vanilla HTML5, CSS3, and JavaScript.

---

## ✨ Features

- **⚡ Modern Athletic UI**: Sleek dark gym aesthetic by default with vibrant neon accents, glassmorphic cards, and smooth hover elevation.
- **🌓 Dark & Light Theme**: Seamless switcher with persistent preference saved to `localStorage`.
- **🔍 Real-Time Search**: Search across workout titles, descriptions, equipment, difficulty, and tags with instant matching.
- **🏷️ Category Filtering**: Filter across 6 core disciplines:
  - Strength & Gym
  - HIIT & CrossFit
  - Cardio & Running
  - Yoga & Mobility
  - Combat & Boxing
  - Fuel & Nutrition
- **❤️ Favorites & Bookmarking**: Heart favorite workouts with live counter badge and dedicated "Favorites" filter view (persisted in `localStorage`).
- **🔲 Dual View Modes**: Toggle between standard Rich Grid View and Compact Card View.
- **🔍 Interactive Lightbox Modal**:
  - Full-resolution workout image view.
  - Detailed metadata: duration, estimated calories burned, difficulty badge, and equipment used.
  - Previous / Next carousel navigation.
  - Keyboard navigation (`Esc` to close, `←` / `→` arrows to flip through).
  - Quick "Copy Image Link" button with toast notification.
- **➕ Add Custom Fitness Photo Modal**:
  - Add your own workout entries with title, category, difficulty, image URL, calories, duration, and tags.
  - Automatically saved to `localStorage`.
- **📱 100% Mobile Responsive**: Fluid layout adapted for mobile screens, tablets, and widescreen desktop monitors.

---

## 📁 Project Structure

```
fitness-gallery/
├── index.html        # Semantic HTML5 layout & accessible modals
├── styles.css        # CSS variables, modern grid, responsive styles & animations
├── script.js         # Interactive application logic, state, and localStorage
└── README.md         # Project documentation
```

---

## 🚀 How to Run

1. Simply double-click [`index.html`](index.html) or open it directly in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, if using VS Code, use the **Live Server** extension to serve the files.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `Esc` | Close open Lightbox or Add Photo Modal |
| `←` (Left Arrow) | View Previous Image in Lightbox |
| `→` (Right Arrow) | View Next Image in Lightbox |
| `Enter` | Open selected workout card |
