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
        <section id="tools" className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Most Popular Tools
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We offer a comprehensive suite of tools to handle all your PDF needs.
                    Simple, fast, and secure.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
