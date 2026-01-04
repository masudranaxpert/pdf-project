"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileUpload } from "@/components/file-upload" // Assuming this exists or I will create it/use it
import { LucideIcon } from "lucide-react"

interface ToolShellProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  children?: React.ReactNode
  onProcess?: (files: File[]) => void
  accept?: string
}

export function ToolShell({
  title,
  description,
  icon,
  color,
  children,
  onProcess,
  accept = ".pdf",
}: ToolShellProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 space-y-4">
        <div className={cn("inline-flex p-4 rounded-3xl shadow-2xl mb-4 glass", color)}>
          {icon}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Main Work Area */}
        <Card className="lg:col-span-2 glass-card border-0 p-1">
          <div className="rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/30 p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
            {children ? (
              children
            ) : (
              <div className="w-full max-w-md space-y-4">
                <FileUpload accept={accept} />
              </div>
            )}
          </div>
        </Card>

        {/* Sidebar / Options */}
        <div className="space-y-6">
          <Card className="glass-card border-0 p-6">
            <h3 className="text-lg font-semibold mb-4">Processing Options</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Customize how your files are processed.
            </p>
            <Button
              size="lg"
              className="w-full font-semibold shadow-lg shadow-primary/25"
              onClick={() => {
                onProcess?.([])
                // Temporary feedback for user
                alert("Processing started! (This is a demo)")
              }}
            >
              Process PDF
            </Button>
          </Card>

          <Card className="glass-card border-0 p-6 bg-primary/5">
            <h3 className="text-sm font-semibold mb-2">Pro Tip</h3>
            <p className="text-xs text-muted-foreground">
              You can process multiple files at once. Drag and drop them directly into the work area.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
