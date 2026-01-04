"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { toolIcons } from "@/lib/tool-icons"
import { toolCategories } from "@/lib/tool-categories"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


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
                        className="flex flex-col py-3 px-3 rounded-xl hover:bg-primary/5 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {Icon && <Icon className="h-5 w-5 text-primary" />}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-sm">{tool.name}</span>
                            <span className="text-[10px] text-muted-foreground line-clamp-1">{tool.description}</span>
                          </div>
                        </div>
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
