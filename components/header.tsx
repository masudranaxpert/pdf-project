"use client"

import { FileText, ChevronDown, LayoutGrid, Search, Bell } from "lucide-react"
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
import { SearchDialog } from "@/components/search-dialog"
import { ModeToggle } from "@/components/mode-toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Header() {
  return (
    <header className="border-b border-primary/5 bg-background/40 sticky top-0 z-40 backdrop-blur-3xl px-2" role="banner">
      <div className="container mx-auto h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex lg:hidden items-center gap-2 group outline-none" aria-label="PDFBoss Home Page">
            <div className="bg-primary rounded-xl p-2 group-hover:bg-orange-600 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
              <FileText className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-foreground">PDF<span className="text-primary">BOSS</span></span>
          </a>

          {/* Contextual Title / Breadcrumbs (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-bold text-muted-foreground/40">
            <div className="flex items-center gap-2 hover:text-foreground cursor-pointer transition-colors group">
              <LayoutGrid className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Tools</span>
            </div>
            <ChevronDown className="h-3 w-3 -rotate-90 opacity-40 shrink-0" />
            <span className="text-foreground font-black tracking-tight underline decoration-primary/30 decoration-2 underline-offset-4">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SearchDialog />
          </div>

          <TooltipProvider>
            <div className="flex items-center gap-1.5 p-1 bg-primary/5 rounded-2xl border border-primary/10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="md:hidden">
                    <SearchDialog />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Search Tools</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>Switch Theme</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
