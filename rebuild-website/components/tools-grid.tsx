
import {
  FileDown,
  Combine,
  Split,
  ImageIcon,
  Grid3x3,
  FileType,
  Crop,
  Lock,
  Pencil,
  FileSignature,
  Minimize2,
  FileSearch,
  Droplet,
  Minus,
  RotateCw,
  FileX2,
  Sheet,
  Presentation,
  Binary,
  ScanLine,
  Shield,
  Unlock,
  Settings,
  Wrench,
  Eraser,
} from "lucide-react"
import { ToolCard } from "@/components/tool-card"

const popularTools = [
  { icon: Minimize2, title: "Compress PDF", description: "Reduce PDF file size", color: "bg-blue-500" },
  { icon: Combine, title: "Merge PDF", description: "Combine multiple PDFs", color: "bg-green-500" },
  { icon: Split, title: "Split PDF", description: "Extract pages from PDF", color: "bg-orange-500" },
  { icon: ImageIcon, title: "JPG to PDF", description: "Convert images to PDF", color: "bg-purple-500" },
  { icon: Grid3x3, title: "Organize PDF", description: "Rearrange PDF pages", color: "bg-pink-500" },
  { icon: FileType, title: "PDF to Word", description: "Convert to DOCX format", color: "bg-indigo-500" },
  { icon: Crop, title: "Crop PDF", description: "Trim PDF margins", color: "bg-teal-500" },
  { icon: FileDown, title: "Any File to PDF", description: "Convert any file format", color: "bg-cyan-500" },
  { icon: FileSearch, title: "OCR PDF", description: "Extract text from scans", color: "bg-amber-500" },
  { icon: Droplet, title: "Watermark PDF", description: "Add watermarks", color: "bg-rose-500" },
]

const convertTools = [
  { icon: FileType, title: "PDF to Word", description: "Convert to DOCX", color: "bg-blue-500" },
  { icon: FileType, title: "Word to PDF", description: "Convert from DOCX", color: "bg-blue-500" },
  { icon: ImageIcon, title: "JPG to PDF", description: "Image to PDF", color: "bg-purple-500" },
  { icon: ImageIcon, title: "PDF to JPG", description: "PDF to image", color: "bg-purple-500" },
  { icon: Sheet, title: "PDF to Excel", description: "Convert to XLSX", color: "bg-green-500" },
  { icon: Sheet, title: "Excel to PDF", description: "Convert from XLSX", color: "bg-green-500" },
  { icon: Presentation, title: "PDF to PowerPoint", description: "Convert to PPTX", color: "bg-orange-500" },
  { icon: Presentation, title: "PowerPoint to PDF", description: "Convert from PPTX", color: "bg-orange-500" },
]

const organizeTools = [
  { icon: Grid3x3, title: "Organize PDF", description: "Rearrange pages", color: "bg-pink-500" },
  { icon: Combine, title: "Merge PDF", description: "Combine files", color: "bg-green-500" },
  { icon: Split, title: "Split PDF", description: "Separate pages", color: "bg-orange-500" },
  { icon: RotateCw, title: "Rotate PDF", description: "Rotate pages", color: "bg-blue-500" },
  { icon: FileX2, title: "Remove Pages", description: "Delete pages", color: "bg-red-500" },
  { icon: Minus, title: "Extract Pages", description: "Extract specific pages", color: "bg-indigo-500" },
]

const editTools = [
  { icon: Pencil, title: "Edit PDF", description: "Modify PDF content", color: "bg-blue-500" },
  { icon: Crop, title: "Crop PDF", description: "Trim margins", color: "bg-teal-500" },
  { icon: Eraser, title: "Remove Text", description: "Delete text content", color: "bg-red-500" },
  { icon: Droplet, title: "Watermark", description: "Add watermarks", color: "bg-cyan-500" },
  { icon: FileSignature, title: "Annotate", description: "Add annotations", color: "bg-purple-500" },
  { icon: Settings, title: "Fill Forms", description: "Fill PDF forms", color: "bg-orange-500" },
]

const protectTools = [
  { icon: Lock, title: "Protect PDF", description: "Add password", color: "bg-red-500" },
  { icon: Unlock, title: "Unlock PDF", description: "Remove password", color: "bg-green-500" },
  { icon: FileSignature, title: "eSign PDF", description: "Digitally sign", color: "bg-purple-500" },
  { icon: Shield, title: "Redact PDF", description: "Hide sensitive info", color: "bg-amber-500" },
]

const optimizeTools = [
  { icon: Minimize2, title: "Compress PDF", description: "Reduce file size", color: "bg-blue-500" },
  { icon: FileSearch, title: "OCR PDF", description: "Extract text", color: "bg-amber-500" },
  { icon: ScanLine, title: "Scan to PDF", description: "Digitize documents", color: "bg-teal-500" },
  { icon: Wrench, title: "Repair PDF", description: "Fix corrupted files", color: "bg-red-500" },
  { icon: Binary, title: "PDF/A Convert", description: "Archive format", color: "bg-indigo-500" },
]

export function ToolsGrid() {
  return (
    <section className="py-24 px-4 relative z-10" id="tools">
      <div className="container mx-auto">
        <ToolSection title="Popular Tools" tools={popularTools} />
        <ToolSection title="Convert" tools={convertTools} />
        <ToolSection title="Organize" tools={organizeTools} />
        <ToolSection title="Edit" tools={editTools} />
        <ToolSection title="Protect" tools={protectTools} />
        <ToolSection title="Optimize" tools={optimizeTools} />
      </div>
    </section>
  )
}

function ToolSection({ title, tools }: { title: string; tools: typeof popularTools }) {
  return (
    <div className="mb-20 last:mb-0">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} href={`/tools/${tool.title.toLowerCase().replace(/\s+/g, "-")}`} />
        ))}
      </div>
    </div>
  )
}
