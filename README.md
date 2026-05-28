# Premium Portfolio Website - Prakash Kumawat

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
   Open your browser to `http://localhost:5173`.

3. **Verify Build**:
   ```bash
   npm run build
   ```

---

## 📝 Contact Form Integration (Google Sheets)

The contact form is configured to send payload data directly to a Google Apps Script Web App. Follow these steps to link your form to Google Sheets:

1. **Create Google Sheet**: Create a new spreadsheet in Google Sheets and name the columns in the first row: `Timestamp`, `Name`, `Email`, `Message`.
2. **Open Apps Script**: Select **Extensions** > **Apps Script** from the top menu.
3. **Paste script code**: Replace any placeholder function with the following script:
   ```javascript
   function doPost(e) {
     try {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       var name = e.parameter.name;
       var email = e.parameter.email;
       var message = e.parameter.message;
       
       sheet.appendRow([new Date(), name, email, message]);
       
       return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
     } catch (err) {
       return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
     }
   }
   ```
4. **Deploy Web App**:
   - Click **Deploy** > **New deployment**.
   - Select **Web app** as type.
   - Set *Execute as* to **Me**.
   - Set *Who has access* to **Anyone**.
   - Click **Deploy**, authorize permissions, and copy the **Web app URL**.
5. **Update Frontend**:
   - Open [Contact.jsx](file:///src/components/Contact.jsx).
   - Replace the value of `GOOGLE_SCRIPT_URL` at the top with your copied **Web app URL**:
     ```javascript
     const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
     ```

---

## 🌐 Production Deployment

### Option A: Vercel (Recommended)
1. Commit the repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your GitHub repository.
4. Keep the default build settings (Vite is detected automatically).
5. Click **Deploy**.

### Option B: Netlify
1. Go to [Netlify](https://www.netlify.com/).
2. Select **Import from git** or drag and drop your build output `dist` folder directly.
3. Define build command as `npm run build` and publish directory as `dist`.
