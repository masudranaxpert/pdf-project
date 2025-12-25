"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, X, File, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatFileSize } from "@/lib/utils";
import type { UploadedFile } from "@/types";

interface FileUploadProps {
    accept?: string;
    multiple?: boolean;
    maxFiles?: number;
    onFilesChange?: (files: UploadedFile[]) => void;
}

/**
 * File upload component with drag-and-drop support
 */
export default function FileUpload({
    accept = ".pdf",
    multiple = true,
    maxFiles = 10,
    onFilesChange,
}: FileUploadProps) {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFiles = useCallback(
        (newFiles: FileList | null) => {
            if (!newFiles) return;

            const filesArray = Array.from(newFiles);
            const validFiles = filesArray.filter((file) => {
                if (accept && !file.name.toLowerCase().endsWith(accept.replace(".", ""))) {
                    return false;
                }
                return true;
            });

            const uploadedFilesData: UploadedFile[] = validFiles.slice(0, maxFiles).map((file) => ({
                id: Math.random().toString(36).substring(7),
                name: file.name,
                size: file.size,
                type: file.type,
                file,
            }));

            setUploadedFiles((prev) => {
                const combined = [...prev, ...uploadedFilesData];
                const limited = combined.slice(0, maxFiles);
                onFilesChange?.(limited);
                return limited;
            });
        },
        [accept, maxFiles, onFilesChange]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
        },
        [handleFiles]
    );

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            handleFiles(e.target.files);
        },
        [handleFiles]
    );

    const removeFile = useCallback((id: string) => {
        setUploadedFiles((prev) => {
            const filtered = prev.filter((file) => file.id !== id);
            onFilesChange?.(filtered);
            return filtered;
        });
    }, [onFilesChange]);

    const clearAll = useCallback(() => {
        setUploadedFiles([]);
        onFilesChange?.([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [onFilesChange]);

    return (
        <div className="w-full space-y-4">
            {/* Upload Zone */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
          transition-all duration-300 hover:border-purple-400 hover:bg-purple-50/50
          ${isDragging ? "border-purple-600 bg-purple-50 scale-105" : "border-gray-300"}
        `}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleInputChange}
                    className="hidden"
                />

                <motion.div
                    animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <Upload className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {isDragging ? "Drop your files here" : "Choose files or drag & drop"}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {accept.toUpperCase()} files only • {multiple ? `Up to ${maxFiles} files` : "Single file"}
                    </p>
                </motion.div>
            </div>

            {/* Uploaded Files List */}
            <AnimatePresence>
                {uploadedFiles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-700">
                                Uploaded Files ({uploadedFiles.length})
                            </h4>
                            <button
                                onClick={clearAll}
                                className="text-sm text-red-600 hover:text-red-700 font-medium"
                            >
                                Clear All
                            </button>
                        </div>

                        {uploadedFiles.map((file, index) => (
                            <motion.div
                                key={file.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center space-x-3 flex-1 min-w-0">
                                    <div className="p-2 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                                        <File className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFile(file.id);
                                        }}
                                        className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5 text-red-600" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
