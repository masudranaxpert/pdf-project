"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Loader2, ArrowUp, ArrowDown } from "lucide-react";
import FileUpload from "@/components/file-upload";
import type { UploadedFile } from "@/types";
import { mockProcessing } from "@/lib/utils";

export default function MergePdfPage() {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleMerge = async () => {
        if (files.length < 2) {
            alert("Please upload at least 2 PDF files to merge");
            return;
        }

        setIsProcessing(true);
        setIsComplete(false);

        // Mock processing delay
        await mockProcessing(2500);

        setIsProcessing(false);
        setIsComplete(true);
    };

    const moveFileUp = (index: number) => {
        if (index === 0) return;
        const newFiles = [...files];
        [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
        setFiles(newFiles);
    };

    const moveFileDown = (index: number) => {
        if (index === files.length - 1) return;
        const newFiles = [...files];
        [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
        setFiles(newFiles);
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
                        <FileText className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        Merge PDF Files
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Combine multiple PDF files into a single document. Drag files to reorder them before merging.
                    </p>
                </motion.div>

                {/* File Upload */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <FileUpload
                        accept=".pdf"
                        multiple={true}
                        maxFiles={10}
                        onFilesChange={setFiles}
                    />
                </motion.div>

                {/* File List with Reorder Controls */}
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Files Order (Drag to reorder)
                        </h3>
                        <div className="space-y-2">
                            {files.map((file, index) => (
                                <div
                                    key={file.id}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                >
                                    <span className="text-sm font-medium text-gray-700">
                                        {index + 1}. {file.name}
                                    </span>
                                    <div className="flex space-x-1">
                                        <button
                                            onClick={() => moveFileUp(index)}
                                            disabled={index === 0}
                                            className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            <ArrowUp className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => moveFileDown(index)}
                                            disabled={index === files.length - 1}
                                            className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            <ArrowDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Action Button */}
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <button
                            onClick={handleMerge}
                            disabled={isProcessing || files.length < 2}
                            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Merging PDFs...</span>
                                </>
                            ) : (
                                <>
                                    <FileText className="w-5 h-5" />
                                    <span>Merge PDFs</span>
                                </>
                            )}
                        </button>

                        {isComplete && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Merged PDF</span>
                            </motion.button>
                        )}
                    </motion.div>
                )}

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200"
                >
                    <h3 className="font-semibold text-blue-900 mb-2">ℹ️ How it works:</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Upload at least 2 PDF files</li>
                        <li>• Use the arrow buttons to reorder files</li>
                        <li>• Click "Merge PDFs" to combine them</li>
                        <li>• Download your merged PDF file</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
