import { FileText, Scissors, Minimize2, Code } from "lucide-react";

export interface Tool {
    id: string;
    name: string;
    description: string;
    icon: any;
    href: string;
    color: string;
}

export const TOOLS: Tool[] = [
    {
        id: "merge-pdf",
        name: "Merge PDF",
        description: "Combine multiple PDF files into a single document with ease",
        icon: FileText,
        href: "/merge-pdf",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "split-pdf",
        name: "Split PDF",
        description: "Split your PDF into separate pages or extract specific pages",
        icon: Scissors,
        href: "/split-pdf",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: "compress-pdf",
        name: "Compress PDF",
        description: "Reduce PDF file size while maintaining quality",
        icon: Minimize2,
        href: "/compress-pdf",
        color: "from-green-500 to-emerald-500",
    },
    {
        id: "pdf-to-html",
        name: "PDF to HTML",
        description: "Convert your PDF documents to HTML format",
        icon: Code,
        href: "/pdf-to-html",
        color: "from-orange-500 to-red-500",
    },
];

export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Merge PDF", href: "/merge-pdf" },
    { name: "Split PDF", href: "/split-pdf" },
    { name: "Compress PDF", href: "/compress-pdf" },
    { name: "PDF to HTML", href: "/pdf-to-html" },
];

export const STEPS = [
    {
        number: 1,
        title: "Select your files",
        description: "Choose the PDF files you want to process from your device",
    },
    {
        number: 2,
        title: "Configure options",
        description: "Customize the processing settings according to your needs",
    },
    {
        number: 3,
        title: "Process & Download",
        description: "Click the process button and download your result instantly",
    },
];
