"use client"

import { use } from "react"
import { ToolShell } from "@/components/tool-shell"
import { FileUpload } from "@/components/file-upload"

// Tool metadata mapping
const toolsMetadata: Record<string, { title: string; description: string; multiple: boolean }> = {
    "merge-pdf": {
        title: "Merge PDF",
        description: "Combine multiple PDF files into one single document in seconds.",
        multiple: true,
    },
    "split-pdf": {
        title: "Split PDF",
        description: "Separate one page or a whole set for easy conversion into independent PDF files.",
        multiple: false,
    },
    "compress-pdf": {
        title: "Compress PDF",
        description: "Reduce the file size of your PDF while optimizing for maximum PDF quality.",
        multiple: false,
    },
    "pdf-to-jpg": {
        title: "PDF to JPG",
        description: "Extract all images from a PDF or convert each page to a JPG image.",
        multiple: false,
    },
}

export default function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)

    const tool = toolsMetadata[slug] || {
        title: slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
        description: `Easily process your ${slug.replace("-", " ")} tasks with our premium PDF tools.`,
        multiple: slug.includes("merge") || slug.includes("combine"),
    }

    return (
        <ToolShell slug={slug} title={tool.title} description={tool.description}>
            <FileUpload multiple={tool.multiple} onFilesSelected={() => { }} />
        </ToolShell>
    )
}
