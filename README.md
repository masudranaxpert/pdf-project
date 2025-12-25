# PDFTools - Modern PDF Tools Platform

A modern, production-ready frontend website built with Next.js 14 (App Router), featuring a suite of PDF manipulation tools with a beautiful, responsive UI.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?style=flat-square)

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism, smooth animations, and gradient accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast & Optimized** - Built with Next.js 14 App Router and React Server Components
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 🔧 **TypeScript** - Type-safe code for better developer experience
- 🎯 **Client-Side Only** - No backend required, all processing is mocked for demo purposes

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## 📦 Available Tools

1. **Merge PDF** - Combine multiple PDF files into a single document
2. **Split PDF** - Split PDFs into separate pages or extract specific ranges
3. **Compress PDF** - Reduce PDF file size with customizable compression levels
4. **PDF to HTML** - Convert PDF documents to responsive HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**

```bash
cd pdf-project-main
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser and navigate to:**

```
http://localhost:3000
```

## 📁 Project Structure

```
pdf-project-main/
├── app/                      # Next.js App Router pages
│   ├── compress-pdf/        # Compress PDF tool page
│   ├── merge-pdf/           # Merge PDF tool page
│   ├── pdf-to-html/         # PDF to HTML converter page
│   ├── split-pdf/           # Split PDF tool page
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   ├── file-upload.tsx      # File upload component with drag & drop
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section with animations
│   ├── navbar.tsx           # Sticky navigation bar
│   ├── step-by-step.tsx     # Step-by-step guide section
│   ├── tool-card.tsx        # Individual tool card
│   └── tools-grid.tsx       # Grid of all tools
├── lib/                     # Utility functions and constants
│   ├── constants.ts         # App constants and tool definitions
│   └── utils.ts             # Helper functions
├── types/                   # TypeScript type definitions
│   └── index.ts             # Shared types and interfaces
└── package.json             # Project dependencies
```

## 🎨 Design Features

### Color Palette
- **Primary Gradient:** Purple (#9333EA) to Blue (#3B82F6)
- **Background:** Gradient from Slate to Purple to Blue
- **Accents:** Tool-specific gradients (Green, Cyan, Orange, Pink)

### UI Components
- **Glassmorphism** - Frosted glass effect on navigation
- **Soft Shadows** - Layered shadows for depth
- **Rounded Cards** - Consistent border radius (rounded-xl, rounded-2xl)
- **Hover Effects** - Scale transforms and color transitions
- **Smooth Animations** - Entrance animations and scroll-based effects

## 🧪 Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## 📝 Notes

- **Client-Side Only:** All file processing is mocked for demonstration purposes
- **No Backend Required:** This is a frontend-only implementation
- **Browser-Based:** All functionality runs in the browser
- **TypeScript:** Fully typed for better code quality and IDE support

## 🎯 Future Enhancements

- Add actual PDF processing using libraries like PDF.js or pdf-lib
- Implement file download functionality
- Add user authentication and file history
- Integrate cloud storage for processed files
- Add more PDF tools (rotate, watermark, OCR, etc.)

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
