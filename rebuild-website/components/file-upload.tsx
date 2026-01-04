"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { Upload, File, X, CloudUpload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  accept?: string
  maxSize?: number
  onFileSelect?: (file: File) => void
  disabled?: boolean
}

export function FileUpload({ accept = ".pdf", maxSize = 10, onFileSelect, disabled }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const droppedFile = e.dataTransfer.files[0]
        setFile(droppedFile)
        onFileSelect?.(droppedFile)
      }
    },
    [onFileSelect],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
        onFileSelect?.(selectedFile)
      }
    },
    [onFileSelect],
  )

  const removeFile = useCallback(() => {
    setFile(null)
  }, [])

  return (
    <div className="w-full relative group">
      {!file ? (
        <label
          htmlFor="file-upload"
          className={cn(
            "relative flex flex-col items-center justify-center w-full min-h-[300px] rounded-3xl cursor-pointer transition-all duration-300",
            "border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5",
            dragActive && "border-primary bg-primary/10 scale-[0.99]",
            disabled && "cursor-not-allowed opacity-60"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="z-10 flex flex-col items-center text-center p-8 space-y-4">
            <div className={cn(
              "p-6 rounded-full bg-primary/10 text-primary mb-2 transition-transform duration-300 group-hover:scale-110 shadow-xl shadow-primary/20",
              dragActive && "scale-125"
            )}>
              <CloudUpload className="w-10 h-10" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">
                Drag & Drop your file here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                or click to browse
              </p>
            </div>
            <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border">
              {accept.replace(/\./g, "").toUpperCase()} up to {maxSize}MB
            </div>
          </div>

          <input
            id="file-upload"
            type="file"
            className="sr-only"
            accept={accept}
            onChange={handleChange}
            disabled={disabled}
          />
        </label>
      ) : (
        <div className="relative w-full p-6 bg-card rounded-2xl border shadow-sm group hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-red-500/10 text-red-500">
              <File className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-lg truncate mb-1">{file.name}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="bg-muted px-2 py-0.5 rounded-md">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
                <span>•</span>
                <span className="text-green-500 font-medium">Ready to process</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault();
                removeFile();
              }}
              className="hover:bg-destructive/10 hover:text-destructive transition-colors rounded-xl h-10 w-10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
