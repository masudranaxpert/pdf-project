"use client";

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { Upload, FileText, X, File } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  file: File | null;
  preview: string | null;
  onClear: () => void;
  acceptedTypes?: string;
  className?: string;
}

/**
 * FileDropZone Component
 * Drag and drop file upload with preview
 */
export function FileDropZone({
  onFileSelect,
  file,
  preview,
  onClear,
  acceptedTypes = ".pdf,.jpg,.jpeg,.png,.heif,.xlsx,.md",
  className,
}: FileDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  }, [onFileSelect]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  if (file) {
    return (
      <div className={cn("border-2 border-dashed border-primary/30 rounded-xl p-6 bg-accent/30", className)}>
        <div className="flex items-start gap-4">
          {/* Preview */}
          <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
            {preview ? (
              <Image
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
                width={80}
                height={80}
                unoptimized
              />
            ) : (
              <FileText className="w-8 h-8 text-primary" />
            )}
          </div>

          {/* File Info */}
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground truncate">{file.name}</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {formatFileSize(file.size)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Ready to process
            </p>
          </div>

          {/* Remove Button */}
          <button
            onClick={onClear}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Remove file"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer",
        isDragging
          ? "border-primary bg-accent/50 scale-[1.01]"
          : "border-border hover:border-primary/50 hover:bg-accent/30",
        className
      )}
    >
      <input
        type="file"
        accept={acceptedTypes}
        onChange={handleFileInput}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Upload className="w-6 h-6 text-primary" />
        </div>
        <p className="text-foreground font-medium mb-1">
          Drag & drop your file here
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          or click to browse
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <File className="w-3 h-3" />
          <span>Supported: PDF, Images, Excel, Markdown</span>
        </div>
      </label>
    </div>
  );
}
