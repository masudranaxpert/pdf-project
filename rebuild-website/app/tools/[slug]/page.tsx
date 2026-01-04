
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolShell } from "@/components/tool-shell"
import { Combine, Split, ImageIcon, Grid3x3, FileType, Lock, Minimize2, Unlock, FileText, Code, BookMarked } from "lucide-react"

// Extended Tools Data
const toolsData: Record<
  string,
  {
    title: string
    description: string
    icon: any
    longDescription: string
    color: string
    accept?: string
    workspaceType?: "merge" | "split" | "compress" | "convert" | "default"
  }
> = {
  "compress-pdf": {
    title: "Compress PDF",
    description: "Reduce PDF file size while maintaining quality.",
    icon: Minimize2,
    longDescription: "Optimize your PDF files for web and email. Choose your desired compression level.",
    color: "bg-blue-600",
    workspaceType: "compress",
  },
  "merge-pdf": {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document.",
    icon: Combine,
    longDescription: "Select multiple files and merge them in seconds. Reorder pages as needed.",
    color: "bg-green-600",
    workspaceType: "merge",
  },
  "split-pdf": {
    title: "Split PDF",
    description: "Extract specific pages or split document.",
    icon: Split,
    longDescription: "Separate one page or a whole set for easy conversion into independent PDF files.",
    color: "bg-orange-600",
    workspaceType: "split",
  },
  "jpg-to-pdf": {
    title: "JPG to PDF",
    description: "Convert images to PDF format in seconds.",
    icon: ImageIcon,
    longDescription: "Turn your images (JPG, PNG, TIFF) into a PDF document.",
    color: "bg-purple-600",
    accept: ".jpg,.jpeg,.png,.tiff",
    workspaceType: "convert",
  },
  "pdf-to-word": {
    title: "PDF to Word",
    description: "Convert PDF to editable Word document.",
    icon: FileType,
    longDescription: "Convert your PDF to WORD documents with incredible accuracy.",
    color: "bg-blue-500",
    workspaceType: "convert",
  },
  "organize-pdf": {
    title: "Organize PDF",
    description: "Rearrange pages in your PDF file.",
    icon: Grid3x3,
    longDescription: "Sort, add and delete PDF pages. Drag and drop the page thumbnails and sort them in our PDF organizer.",
    color: "bg-pink-600",
    workspaceType: "default",
  },
  "protect-pdf": {
    title: "Protect PDF",
    description: "Encrypt your PDF with a password.",
    icon: Lock,
    longDescription: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.",
    color: "bg-red-600",
    workspaceType: "default"
  },
  "unlock-pdf": {
    title: "Unlock PDF",
    description: "Remove PDF password security.",
    icon: Unlock,
    longDescription: "Remove password from PDF files. Freedom to use your PDFs.",
    color: "bg-emerald-600",
    workspaceType: "default"
  },
  "pdf-to-png": {
    title: "PDF to PNG",
    description: "Convert PDF pages to high-quality PNG images.",
    icon: ImageIcon,
    longDescription: "Turn your PDF into PNG images. Extract each page as a separate image.",
    color: "bg-purple-600",
    workspaceType: "convert",
  },
  "pdf-to-jpg": {
    title: "PDF to JPG",
    description: "Convert PDF pages to JPG images.",
    icon: ImageIcon,
    longDescription: "Convert PDF pages to JPG images. Small size, high quality.",
    color: "bg-purple-600",
    workspaceType: "convert",
  },
  "image-extractor": {
    title: "Image Extractor",
    description: "Extract all images from your PDF.",
    icon: ImageIcon,
    longDescription: "Scrape and download all images embedded in a PDF document.",
    color: "bg-purple-600",
    workspaceType: "default",
  },
  "excel-to-pdf": {
    title: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF.",
    icon: FileType,
    longDescription: "Convert XLSX and XLS files to PDF. Format is preserved.",
    color: "bg-green-600",
    accept: ".xlsx,.xls",
    workspaceType: "convert",
  },
  "pdf-to-markdown": {
    title: "PDF to Markdown",
    description: "Convert PDF to Markdown text.",
    icon: FileText,
    longDescription: "Extract text from PDF and save as Markdown for easy editing.",
    color: "bg-blue-600",
    workspaceType: "convert",
  },
  "pdf-to-text": {
    title: "PDF to Text",
    description: "Convert PDF to plain text.",
    icon: FileText,
    longDescription: "Extract all text from your PDF file into a TXT file.",
    color: "bg-blue-600",
    workspaceType: "convert",
  },
  "pdf-to-json": {
    title: "PDF to JSON",
    description: "Convert PDF data to JSON format.",
    icon: FileText,
    longDescription: "Parse PDF content and export as structured JSON data.",
    color: "bg-blue-600",
    workspaceType: "convert",
  },
  "markdown-to-pdf": {
    title: "Markdown to PDF",
    description: "Convert Markdown files to PDF.",
    icon: FileText,
    longDescription: "Render Markdown files into professional PDF documents.",
    color: "bg-purple-600",
    accept: ".md",
    workspaceType: "convert",
  },
  "png-to-pdf": {
    title: "PNG to PDF",
    description: "Convert PNG images to PDF.",
    icon: ImageIcon,
    longDescription: "Combine PNG images into a single PDF document.",
    color: "bg-purple-600",
    accept: ".png",
    workspaceType: "convert",
  },
  "heif-to-pdf": {
    title: "HEIF to PDF",
    description: "Convert HEIF/HEIC images to PDF.",
    icon: ImageIcon,
    longDescription: "Convert Apple HEIC photos to PDF format for compatibility.",
    color: "bg-purple-600",
    accept: ".heic,.heif",
    workspaceType: "convert",
  },
  "pdf-to-html": {
    title: "PDF to HTML",
    description: "Convert PDF to HTML5 web pages.",
    icon: Code,
    longDescription: "Turn PDF documents into responsive HTML web pages.",
    color: "bg-orange-600",
    workspaceType: "convert",
  },
  "pdf-bookmarks": {
    title: "PDF Bookmarks",
    description: "Edit or delete PDF bookmarks.",
    icon: BookMarked,
    longDescription: "Manage the outline (bookmarks) of your PDF file.",
    color: "bg-pink-600",
    workspaceType: "default",
  },
}

// Fallback for tools not explicitly in the map but valid routes
const genericTool = {
  title: "PDF Tool",
  description: "Advanced PDF processing tool.",
  icon: FileText,
  longDescription: "Process your PDF files securely and efficiently.",
  color: "bg-primary",
  workspaceType: "default"
}

export function generateStaticParams() {
  return Object.keys(toolsData).map((slug) => ({
    slug,
  }))
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = toolsData[slug] || { ...genericTool, title: slug.replace(/-/g, " ").toUpperCase() }

  if (!tool) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-premium">
      <Header />
      <main className="flex-1">
        <ToolShell
          title={tool.title}
          description={tool.longDescription}
          icon={<tool.icon className="w-12 h-12 text-white" />}
          color={tool.color}
          accept={tool.accept}
        >
          {/* 
              This is where we would inject specific workspace components based on tool.workspaceType.
              For now, ToolShell handles the default FileUpload state if children is null.
              We can add custom children here later.
            */}
        </ToolShell>
      </main>
      <Footer />
    </div>
  )
}
