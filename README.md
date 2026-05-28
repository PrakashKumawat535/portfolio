# Portfolio Website - Prakash Kumawat

A production-ready, highly responsive, and handcrafted developer portfolio website designed for **Prakash Kumawat** (Frontend & Full Stack MERN Developer). Inspired by high-end design languages of Vercel, Linear, Raycast, and Apple.

---

## ⚡ Key Features

- 🌓 **Perfect Dark/Light Themes**: Uses native CSS theme tokens synced with Tailwind v4. Default is dark mode.
- 📱 **Mobile-First Responsiveness**: Designed to work fluidly from 320px mobile screens to large desktop monitors.
- 🎨 **Premium Aesthetic**: Elegant glassmorphism headers, subtle interactive glows, micro-animations via Framer Motion, and Outfit/Inter typography.
- 📊 **No-Asset CSS Mockups**: Showcases MERN SaaS and AI applications using interactive CSS blocks instead of heavy external image files.
- 📄 **Direct Resume Download**: Fully styled custom resume card with a direct PDF download link.
- ✉️ **Contact Form Integration**: Fully functional JavaScript form client equipped with input validation, loaders, toast alerts, and direct fetch hooks for Google Sheets & Apps Script.

---

## 📁 Folder Structure

```text
prakash-portfolio/
├── dist/                          # Transpiled build output
├── public/
│   └── Prakash-Kumawat-Resume.pdf # Downloadable resume PDF
├── src/
│   ├── assets/                    # Static assets
│   ├── components/                # Modular UI components
│   │   ├── About.jsx              # Academic & professional summary cards
│   │   ├── Contact.jsx            # Form validations & Google Sheets connection
│   │   ├── Footer.jsx             # Copyright and social shortcuts
│   │   ├── Hero.jsx               # Headline copy & simulated console stats
│   │   ├── Navbar.jsx             # Active section tracking & mobile menu
│   │   ├── Projects.jsx           # Cards featuring styled CSS mockups
│   │   ├── Resume.jsx             # Qualification breakdown sheet
│   │   ├── Services.jsx           # Offered client development solutions
│   │   └── Timeline.jsx           # Chronological developer level progression
│   ├── App.jsx                    # Layout rendering & theme class context
│   ├── index.css                  # Custom scrollbars, glows, and Tailwind directives
│   └── main.jsx                   # DOM entry point
├── index.html                     # SEO optimization and Preconnect rules
├── package.json                   # Script configurations & libraries
├── vite.config.js                 # Vite bundler & Tailwind v4 plugin
└── README.md                      # Setup & deployment guides
```

---

## 🚀 Installation & Local Run

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open your browser to `prakash-kumawat.vercel.app`.

3. **Verify Build**:
   ```bash
   npm run build
   ```

