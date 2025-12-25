"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minimize2, Download, Loader2 } from "lucide-react";
import FileUpload from "@/components/file-upload";
import type { UploadedFile } from "@/types";
import { mockProcessing, formatFileSize, generateMockFileSize } from "@/lib/utils";
import { COMPRESSION_LEVELS } from "@/types";

export default function CompressPdfPage() {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState("medium");
    const [originalSize, setOriginalSize] = useState(0);
    const [compressedSize, setCompressedSize] = useState(0);

    const handleCompress = async () => {
        if (files.length === 0) {
            alert("Please upload a PDF file to compress");
            return;
        }

        setIsProcessing(true);
        setIsComplete(false);

        const mockOriginalSize = files[0]?.size || generateMockFileSize(1000000, 5000000);
        setOriginalSize(mockOriginalSize);

        // Mock processing delay
        await mockProcessing(2000);

        // Calculate mock compressed size based on compression level
        const compressionRatio =
            selectedLevel === "low" ? 0.8 : selectedLevel === "medium" ? 0.5 : 0.3;
        setCompressedSize(Math.floor(mockOriginalSize * compressionRatio));

        setIsProcessing(false);
        setIsComplete(true);
    };

    const savingsPercentage =
        originalSize > 0
            ? Math.round(((originalSize - compressedSize) / originalSize) * 100)
            : 0;

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
                        <Minimize2 className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        Compress PDF Files
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Reduce PDF file size while maintaining quality. Perfect for email attachments and web uploads.
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
                        multiple={false}
                        maxFiles={1}
                        onFilesChange={setFiles}
                    />
                </motion.div>

                {/* Compression Level Selection */}
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Compression Level
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {COMPRESSION_LEVELS.map((level) => (
                                <button
                                    key={level.id}
                                    onClick={() => setSelectedLevel(level.id)}
                                    className={`p-4 rounded-xl border-2 transition-all text-left ${selectedLevel === level.id
                                            ? "border-green-600 bg-green-50"
                                            : "border-gray-200 hover:border-green-300"
                                        }`}
                                >
                                    <div className="font-semibold text-gray-800 mb-1">
                                        {level.label}
                                    </div>
                                    <div className="text-sm text-gray-600">{level.description}</div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Size Comparison */}
                {isComplete && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Compression Results
                        </h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-sm text-gray-600 mb-1">Original Size</div>
                                <div className="text-2xl font-bold text-gray-800">
                                    {formatFileSize(originalSize)}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600 mb-1">Savings</div>
                                <div className="text-2xl font-bold text-green-600">
                                    {savingsPercentage}%
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600 mb-1">New Size</div>
                                <div className="text-2xl font-bold text-gray-800">
                                    {formatFileSize(compressedSize)}
                                </div>
                            </div>
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
                            onClick={handleCompress}
                            disabled={isProcessing}
                            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Compressing PDF...</span>
                                </>
                            ) : (
                                <>
                                    <Minimize2 className="w-5 h-5" />
                                    <span>Compress PDF</span>
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
                                <span>Download Compressed PDF</span>
                            </motion.button>
                        )}
                    </motion.div>
                )}

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-200"
                >
                    <h3 className="font-semibold text-green-900 mb-2">ℹ️ How it works:</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                        <li>• Upload a PDF file</li>
                        <li>• Select your preferred compression level</li>
                        <li>• Click "Compress PDF" to reduce file size</li>
                        <li>• Download your optimized PDF file</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
