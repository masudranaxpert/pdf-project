"use client"

import { useState } from "react"
import { Menu, X, FileText, ChevronRight } from "lucide-react"
import { toolIcons } from "@/lib/tool-icons"
import { toolCategories } from "@/lib/tool-categories"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden h-12 w-12 rounded-2xl hover:bg-primary/5 transition-all duration-300" aria-label="Open Navigation Menu">
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] border-none glass-card p-0 flex flex-col h-full animate-in slide-in-from-right duration-500">
        <div className="p-8 border-b border-primary/10">
          <SheetHeader className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-xl p-1.5 shadow-lg shadow-primary/20">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter">PDF<span className="text-primary">BOSS</span></span>
            </div>
            <SheetTitle className="text-2xl font-black">All PDF Tools</SheetTitle>
            <SheetDescription className="text-muted-foreground font-medium">Explore our comprehensive suite of PDF solutions.</SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {toolCategories.map((category, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none">
                <AccordionTrigger className="flex flex-row-reverse justify-end gap-3 py-4 px-4 rounded-2xl hover:bg-primary/5 transition-all font-bold text-sm text-foreground/80 hover:no-underline [&[data-state=open]]:bg-primary/5 [&[data-state=open]]:text-primary group">
                  <span className="flex-1 text-left">{category.label}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="flex flex-col gap-1 pl-2">
                    {category.tools.map((tool, toolIdx) => {
                      // @ts-ignore
                      const Icon = toolIcons[tool.href]
                      return (
                        <a
                          key={toolIdx}
                          href={tool.href}
                          className="flex items-center gap-4 py-3.5 px-4 rounded-2xl hover:bg-primary/10 transition-all group"
                          onClick={() => setOpen(false)}
                        >
                          <div className={cn(
                            "p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110",
                            idx % 5 === 0 ? "bg-blue-500/10 text-blue-500" :
                              idx % 5 === 1 ? "bg-orange-500/10 text-orange-500" :
                                idx % 5 === 2 ? "bg-green-500/10 text-green-500" :
                                  idx % 5 === 3 ? "bg-indigo-500/10 text-indigo-500" :
                                    "bg-purple-500/10 text-purple-500"
                          )}>
                            {Icon && <Icon className="h-5 w-5" />}
                          </div>
                          <div className="flex flex-col flex-1">
                            <span className="font-bold text-sm text-foreground drop-shadow-sm">{tool.name}</span>
                            <span className="text-[11px] text-muted-foreground font-medium line-clamp-1 opacity-70 group-hover:opacity-100 transition-opacity">{tool.description}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                        </a>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </SheetContent>
    </Sheet>
  )
}
