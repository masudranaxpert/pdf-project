import { ToolCard } from "@/components/tool-card"
import {
    FileInput,
    FileType,
    Files,
    Image,
    Lock,
    Maximize,
    Minimize,
    Scissors,
    Sheet,
    Trash2,
    Unlock
} from "lucide-react"

const tools = [
    {
        title: "Merge PDF",
        description: "Combine multiple PDF files into one single document in seconds.",
        icon: Files,
        href: "/tools/merge-pdf",
        color: "text-blue-500",
    },
    {
        title: "Split PDF",
        description: "Separate one page or a whole set for easy conversion into independent PDF files.",
        icon: Scissors,
        href: "/tools/split-pdf",
        color: "text-red-500",
    },
    {
        title: "Compress PDF",
        description: "Reduce the file size of your PDF while maintaining the best possible quality.",
        icon: Minimize,
        href: "/tools/compress-pdf",
        color: "text-green-500",
    },
    {
        title: "PDF to Word",
        description: "Convert your PDF files to easy to edit DOC and DOCX documents.",
        icon: FileType,
        href: "/tools/pdf-to-word",
        color: "text-blue-600",
    },
    {
        title: "Word to PDF",
        description: "Make DOC and DOCX files easy to read by converting them to PDF.",
        icon: FileInput,
        href: "/tools/word-to-pdf",
        color: "text-blue-600",
    },
    {
        title: "Excel to PDF",
        description: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
        icon: Sheet,
        href: "/tools/excel-to-pdf",
        color: "text-green-600",
    },
    {
        title: "Edit PDF",
        description: "Add text, images, shapes and freehand annotations to your PDF document.",
        icon: FileInput,
        href: "/tools/edit-pdf",
        color: "text-pink-500",
    },
    {
        title: "JPG to PDF",
        description: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
        icon: Image,
        href: "/tools/jpg-to-pdf",
        color: "text-yellow-500",
    },
    {
        title: "Protect PDF",
        description: "Encrypt your PDF with a password to keep sensitive data confidential.",
        icon: Lock,
        href: "/tools/protect-pdf",
        color: "text-gray-500",
    },
    {
        title: "Unlock PDF",
        description: "Remove PDF password security, giving you the freedom to use your PDFs.",
        icon: Unlock,
        href: "/tools/unlock-pdf",
        color: "text-pink-500",
    },
]

export function ToolsGrid() {
    return (
        <section id="tools" className="container mx-auto px-4 py-32 relative">
            {/* Background elements */}
            <div className="premium-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5" />

            <div className="mb-20 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                    Toolbox
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                    Professional <span className="text-primary">PDF Solutions</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    A comprehensive suite of high-performance tools to manage, convert, and protect
                    your documents with unmatched ease.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10">
                {tools.map((tool) => (
                    <ToolCard
                        key={tool.title}
                        {...tool}
                    />
                ))}
            </div>
        </section>
    )
}
