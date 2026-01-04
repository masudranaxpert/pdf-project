"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { toolIcons } from "@/lib/tool-icons"

interface ToolShellProps {
    slug: string
    title: string
    description: string
    children: React.ReactNode
}

export function ToolShell({ slug, title, description, children }: ToolShellProps) {
    const Icon = toolIcons[`/tools/${slug}`] || ChevronRight

    return (
        <div className="min-h-screen pt-24 pb-12 bg-premium">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors flex items-center">
                        <Home className="h-4 w-4 mr-1" />
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-foreground font-medium">{title}</span>
                </nav>

                {/* Tool Header */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-6">
                        <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{title}</h1>
                    <p className="text-lg text-muted-foreground">{description}</p>
                </div>

                {/* Tool Content Area */}
                <div className="max-w-5xl mx-auto">
                    <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center">
                        {children}
                    </div>
                </div>

                {/* Info Section (Optional) */}
                <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="font-semibold mb-2">Secure Processing</h3>
                        <p className="text-sm text-muted-foreground">Your files are encrypted and deleted automatically after processing.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold mb-2">High Quality</h3>
                        <p className="text-sm text-muted-foreground">We use industry-standard algorithms to ensure best results.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold mb-2">Cloud Based</h3>
                        <p className="text-sm text-muted-foreground">Fast processing without installing any software on your device.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
