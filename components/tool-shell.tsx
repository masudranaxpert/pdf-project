"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight, Home, ShieldCheck, Zap, Cloud } from "lucide-react"
import { toolIcons } from "@/lib/tool-icons"
import { cn } from "@/lib/utils"

interface ToolShellProps {
    slug: string
    title: string
    description: string
    children: React.ReactNode
}

export function ToolShell({ slug, title, description, children }: ToolShellProps) {
    // @ts-ignore
    const Icon = toolIcons[`/tools/${slug}`] || ChevronRight

    return (
        <div className="py-12 pb-20 relative">

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-muted-foreground/80 mb-12 font-medium" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-primary/5">
                        <Home className="h-4 w-4" />
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4 opacity-30" />
                    <span className="text-foreground font-black px-2">{title}</span>
                </nav>

                {/* Tool Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center justify-center p-5 rounded-[2rem] bg-primary shadow-2xl shadow-primary/30 mb-8 animate-float">
                        <Icon className="h-12 w-12 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground drop-shadow-sm">
                        {title.split(' ')[0]} <span className="text-primary">{title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Tool Content Area */}
                <div className="max-w-5xl mx-auto mb-24 animate-slide-up">
                    <div className="glass-card rounded-[3rem] p-10 md:p-16 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                        <div className="relative z-10 w-full">
                            {children}
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in [animation-delay:400ms]">
                    <div className="p-8 rounded-[2rem] glass-card border-none text-center group hover:bg-card/60 transition-all">
                        <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="font-black text-lg mb-3 uppercase tracking-tighter">Bank-Level Security</h3>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">Your files are encrypted end-to-end and wiped from our servers within 1 hour.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] glass-card border-none text-center group hover:bg-card/60 transition-all">
                        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="font-black text-lg mb-3 uppercase tracking-tighter">Blazing Fast</h3>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">Powered by ultra-fast cloud nodes, process massive files in mere seconds.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] glass-card border-none text-center group hover:bg-card/60 transition-all">
                        <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Cloud className="h-6 w-6" />
                        </div>
                        <h3 className="font-black text-lg mb-3 uppercase tracking-tighter">100% Client-Side</h3>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">Most operations happen right in your browser for maximum privacy and speed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
