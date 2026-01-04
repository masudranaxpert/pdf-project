"use client"

import React, { useState, useCallback } from "react"
import { Upload, X, File, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
    onFilesSelected: (files: File[]) => void
    multiple?: boolean
    accept?: string
}

export function FileUpload({ onFilesSelected, multiple = false, accept = ".pdf" }: FileUploadProps) {
    const [dragActive, setDragActive] = useState(false)
    const [files, setFiles] = useState<File[]>([])

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const selectedFiles = Array.from(e.dataTransfer.files).filter(f => f.name.endsWith(".pdf"))
            const newFiles = multiple ? [...files, ...selectedFiles] : [selectedFiles[0]]
            setFiles(newFiles)
            onFilesSelected(newFiles)
        }
    }, [files, multiple, onFilesSelected])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            const selectedFiles = Array.from(e.target.files)
            const newFiles = multiple ? [...files, ...selectedFiles] : [selectedFiles[0]]
            setFiles(newFiles)
            onFilesSelected(newFiles)
        }
    }

    const removeFile = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index)
        setFiles(newFiles)
        onFilesSelected(newFiles)
    }

    return (
        <div className="w-full">
            {files.length === 0 ? (
                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-2xl p-12 transition-all flex flex-col items-center justify-center cursor-pointer
            ${dragActive ? "border-primary bg-primary/5 scale-[0.99]" : "border-white/10 hover:border-primary/50"}
          `}
                >
                    <input
                        type="file"
                        multiple={multiple}
                        accept={accept}
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="p-4 rounded-full bg-primary/10 mb-4 animate-bounce">
                        <Upload className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Select PDF files</h3>
                    <p className="text-muted-foreground text-center">or drag and drop them here</p>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {files.map((file, idx) => (
                            <div key={idx} className="glass-card p-4 rounded-xl flex items-center group animate-in fade-in slide-in-from-bottom-2">
                                <div className="p-2 rounded-lg bg-primary/10 mr-3">
                                    <File className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                                <button
                                    onClick={() => removeFile(idx)}
                                    className="p-2 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        {multiple && (
                            <label className="border-2 border-dashed border-white/10 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
                                <input
                                    type="file"
                                    multiple={multiple}
                                    accept={accept}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <Plus className="h-6 w-6 text-muted-foreground mb-1" />
                                <span className="text-xs text-muted-foreground">Add more</span>
                            </label>
                        )}
                    </div>
                    <div className="flex justify-center pt-8">
                        <Button size="lg" className="px-12 rounded-full text-lg h-14 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                            Process PDF
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
