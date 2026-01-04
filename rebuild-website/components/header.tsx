"use client"

import { FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toolIcons } from "@/lib/tool-icons"
import { cn } from "@/lib/utils"

const toolCategories = [
  {
    label: "PDF TO IMAGE",
    tools: [
      { name: "PDF to PNG", href: "/tools/pdf-to-png" },
      { name: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { name: "Image Extractor", href: "/tools/image-extractor" },
    ],
  },
  {
    label: "CONVERT TO PDF",
    tools: [
      { name: "Excel to PDF", href: "/tools/excel-to-pdf" },
      { name: "PDF to Markdown", href: "/tools/pdf-to-markdown" },
      { name: "PDF to Text", href: "/tools/pdf-to-text" },
      { name: "PDF to JSON", href: "/tools/pdf-to-json" },
      { name: "Markdown to PDF", href: "/tools/markdown-to-pdf" },
    ],
  },
  {
    label: "PDF SECURITY",
    tools: [
      { name: "Protect PDF", href: "/tools/protect-pdf" },
      { name: "Unlock PDF", href: "/tools/unlock-pdf" },
    ],
  },
  {
    label: "IMAGE TO PDF",
    tools: [
      { name: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { name: "PNG to PDF", href: "/tools/png-to-pdf" },
      { name: "HEIF to PDF", href: "/tools/heif-to-pdf" },
    ],
  },
  {
    label: "PDF TOOLS",
    tools: [{ name: "PDF Bookmarks", href: "/tools/pdf-bookmarks" }],
  },
]

export function Header() {
  return (
    <header className="border-b border-white/10 bg-background/60 sticky top-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="PDFJar home">
          <div className="bg-primary rounded-lg p-2">
            <FileText className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
          </div>
          <span className="font-bold text-xl">PDFJar</span>
        </a>
        <nav className="hidden md:flex items-center gap-4" role="navigation" aria-label="Main navigation">
          <a
            href="/tools/merge-pdf"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-3 py-2"
          >
            {(() => {
              const Icon = toolIcons["/tools/merge-pdf"]
              return Icon ? <Icon className="h-4 w-4" /> : null
            })()}
            Merge PDF
          </a>
          <a
            href="/tools/split-pdf"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-3 py-2"
          >
            {(() => {
              const Icon = toolIcons["/tools/split-pdf"]
              return Icon ? <Icon className="h-4 w-4" /> : null
            })()}
            Split PDF
          </a>
          <a
            href="/tools/compress-pdf"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-3 py-2"
          >
            {(() => {
              const Icon = toolIcons["/tools/compress-pdf"]
              return Icon ? <Icon className="h-4 w-4" /> : null
            })()}
            Compress PDF
          </a>
          <a
            href="/tools/pdf-to-html"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-3 py-2"
          >
            {(() => {
              const Icon = toolIcons["/tools/pdf-to-html"]
              return Icon ? <Icon className="h-4 w-4" /> : null
            })()}
            PDF to HTML
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium gap-1 px-2" aria-label="More Tools">
                More Tools
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[600px] p-4" align="end">
              <div className="grid grid-cols-3 gap-4">
                {toolCategories.map((category, idx) => (
                  <DropdownMenuGroup key={idx}>
                    <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {category.label}
                    </DropdownMenuLabel>
                    {category.tools.map((tool, toolIdx) => {
                      // @ts-ignore
                      const Icon = toolIcons[tool.href]
                      return (
                        <DropdownMenuItem key={toolIdx} asChild>
                          <a href={tool.href} className="text-sm cursor-pointer flex items-center gap-2">
                            {Icon && <Icon className="h-4 w-4 text-primary" />}
                            {tool.name}
                          </a>
                        </DropdownMenuItem>
                      )
                    })}
                    {idx < toolCategories.length - 1 && <DropdownMenuSeparator className="my-2" />}
                  </DropdownMenuGroup>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}
