"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { toolIcons } from "@/lib/tool-icons"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const toolCategories = [
  {
    label: "Popular Tools",
    tools: [
      { name: "Merge PDF", href: "/tools/merge-pdf" },
      { name: "Split PDF", href: "/tools/split-pdf" },
      { name: "Compress PDF", href: "/tools/compress-pdf" },
      { name: "PDF to HTML", href: "/tools/pdf-to-html" },
    ],
  },
  {
    label: "PDF to Image",
    tools: [
      { name: "PDF to PNG", href: "/tools/pdf-to-png" },
      { name: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { name: "Image Extractor", href: "/tools/image-extractor" },
    ],
  },
  {
    label: "Convert to PDF",
    tools: [
      { name: "Excel to PDF", href: "/tools/excel-to-pdf" },
      { name: "PDF to Markdown", href: "/tools/pdf-to-markdown" },
      { name: "PDF to Text", href: "/tools/pdf-to-text" },
      { name: "PDF to JSON", href: "/tools/pdf-to-json" },
      { name: "Markdown to PDF", href: "/tools/markdown-to-pdf" },
    ],
  },
  {
    label: "PDF Security",
    tools: [
      { name: "Protect PDF", href: "/tools/protect-pdf" },
      { name: "Unlock PDF", href: "/tools/unlock-pdf" },
    ],
  },
  {
    label: "Image to PDF",
    tools: [
      { name: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { name: "PNG to PDF", href: "/tools/png-to-pdf" },
      { name: "HEIF to PDF", href: "/tools/heif-to-pdf" },
    ],
  },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>All PDF Tools</SheetTitle>
          <SheetDescription className="sr-only">Browse all available PDF tools by category</SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full mt-6">
          {toolCategories.map((category, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-sm font-semibold">{category.label}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {category.tools.map((tool, toolIdx) => {
                    // @ts-ignore
                    const Icon = toolIcons[tool.href]
                    return (
                      <a
                        key={toolIdx}
                        href={tool.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-2 px-2 rounded-md hover:bg-accent transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {Icon && <Icon className="h-4 w-4 text-primary" />}
                        {tool.name}
                      </a>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  )
}
