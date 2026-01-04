"use client"

import { FileText, ChevronDown, LayoutGrid } from "lucide-react"
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
import { toolCategories } from "@/lib/tool-categories"
import { cn } from "@/lib/utils"


export function Header() {
  return (
    <header className="border-b border-white/10 bg-background/60 sticky top-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group" aria-label="PDFBoss home">
          <div className="bg-orange-500 rounded-lg p-2 group-hover:bg-orange-600 transition-colors">
            <FileText className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <span className="font-bold text-xl tracking-tight">PDFBoss</span>
        </a>
        <nav className="hidden md:flex items-center gap-4" role="navigation" aria-label="Main navigation">
          <a
            href="/tools/merge-pdf"
            className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            {(() => {
              const Icon = toolIcons["/tools/merge-pdf"]
              return Icon ? <Icon className="h-4 w-4 text-orange-500" /> : null
            })()}
            Merge PDF
          </a>
          <a
            href="/tools/split-pdf"
            className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            {(() => {
              const Icon = toolIcons["/tools/split-pdf"]
              return Icon ? <Icon className="h-4 w-4 text-purple-500" /> : null
            })()}
            Split PDF
          </a>
          <a
            href="/tools/compress-pdf"
            className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            {(() => {
              const Icon = toolIcons["/tools/compress-pdf"]
              return Icon ? <Icon className="h-4 w-4 text-yellow-500" /> : null
            })()}
            Compress PDF
          </a>
          <a
            href="/tools/pdf-to-html"
            className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            {(() => {
              const Icon = toolIcons["/tools/pdf-to-html"]
              return Icon ? <Icon className="h-4 w-4 text-red-500" /> : null
            })()}
            PDF to HTML
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium gap-2 px-3 hover:bg-muted transition-colors" aria-label="More Tools">
                <LayoutGrid className="h-4 w-4 text-muted-foreground" />
                More Tools
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[700px] p-6 shadow-2xl rounded-2xl border-white/5" align="end">
              <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                {toolCategories.map((category, idx) => (
                  <DropdownMenuGroup key={idx} className="space-y-4">
                    <DropdownMenuLabel className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-[0.1em] px-0">
                      {category.label}
                    </DropdownMenuLabel>
                    <div className="flex flex-col gap-3">
                      {category.tools.map((tool, toolIdx) => {
                        // @ts-ignore
                        const Icon = toolIcons[tool.href]
                        return (
                          <DropdownMenuItem key={toolIdx} asChild className="p-0 focus:bg-transparent">
                            <a
                              href={tool.href}
                              className="group flex items-center gap-3 transition-all outline-none"
                            >
                              <div className={cn(
                                "p-1.5 rounded-md transition-colors",
                                idx === 0 ? "text-blue-500" :
                                  idx === 1 ? "text-orange-500" :
                                    idx === 2 ? "text-green-600" :
                                      idx === 3 ? "text-indigo-500" :
                                        idx === 4 ? "text-purple-500" : "text-blue-400"
                              )}>
                                {Icon && <Icon className="h-4 w-4" />}
                              </div>
                              <span className="text-[13px] font-medium text-foreground/80 group-hover:text-primary transition-colors">
                                {tool.name}
                              </span>
                            </a>
                          </DropdownMenuItem>
                        )
                      })}
                    </div>
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
