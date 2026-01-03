# PDF Tools Dashboard - Next.js

A modern, professional PDF manipulation and conversion tools platform built with **Next.js 14+ App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## 🚀 Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **UI Components**: Beautiful shadcn/ui components with Radix UI  
- **Theme Support**: Light/Dark mode with next-themes
- **PDF Tools**: 
  - Modify & Edit (Merge, Split,Compress, Bookmarks)
  - Export PDF (to JPG, PNG, HTML, Markdown, JSON)
  - Create PDF (from Excel, Images, Markdown)
  - Security (Password Protect, Unlock)
- **Responsive Design**: Mobile-first, fully responsive layout
- **Type-Safe**: Full TypeScript support

## 📁 Project Structure

```
.agent/workflows/      # Workflow documentation
app/                   # Next.js App Router
  ├── layout.tsx       # Root layout with providers
  ├── page.tsx         # Home page  
  ├── not-found.tsx    # 404 page
  ├── providers.tsx    # Client providers
  ├── globals.css      # Global styles
  └── tool/[toolId]/   # Dynamic tool pages
      └── page.tsx
components/            # React components
data/                  # Static data (tools, categories)
hooks/                 # Custom React hooks
lib/                   # Utility functions
types/                 # TypeScript types
public/                # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes
- **State Management**: React Query

## 📄 License

This project is open source and available under the MIT License.
