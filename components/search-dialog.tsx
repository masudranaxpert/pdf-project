"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Command as CommandIcon } from "lucide-react"
import { toolCategories } from "@/lib/tool-categories"
import { toolIcons } from "@/lib/tool-icons"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"

export function SearchDialog() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="group relative flex h-10 w-full items-center justify-start gap-2 rounded-xl bg-primary/5 px-3 text-sm font-medium text-muted-foreground ring-offset-background transition-all hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:w-48 lg:px-4"
            >
                <Search className="h-4 w-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                <span className="hidden lg:inline-flex">Search tools...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-7 select-none items-center gap-1 rounded border border-primary/20 bg-primary/5 px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search all PDF tools..." />
                <CommandList className="max-h-[400px]">
                    <CommandEmpty>No results found.</CommandEmpty>
                    {toolCategories.map((category) => (
                        <CommandGroup key={category.label} heading={category.label}>
                            {category.tools.map((tool) => {
                                // @ts-ignore
                                const Icon = toolIcons[tool.href] || FileText
                                return (
                                    <CommandItem
                                        key={tool.href}
                                        value={tool.name}
                                        onSelect={() => {
                                            runCommand(() => router.push(tool.href))
                                        }}
                                        className="group"
                                    >
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-aria-selected:bg-primary group-aria-selected:text-white">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm tracking-tight">{tool.name}</span>
                                            <span className="text-[11px] text-muted-foreground line-clamp-1 group-aria-selected:text-white/70">
                                                {tool.description}
                                            </span>
                                        </div>
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    )
}
