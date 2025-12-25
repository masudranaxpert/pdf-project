"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Download, Loader2 } from "lucide-react";
import FileUpload from "@/components/file-upload";
import type { UploadedFile } from "@/types";
import { mockProcessing } from "@/lib/utils";

export default function SplitPdfPage() {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [splitMode, setSplitMode] = useState<"all" | "range">("all");
    const [pageRange, setPageRange] = useState({ start: 1, end: 10 });

    const handleSplit = async () => {
        if (files.length === 0) {
            alert("Please upload a PDF file to split");
            return;
        }

        setIsProcessing(true);
        setIsComplete(false);

        // Mock processing delay
        await mockProcessing(2000);

        setIsProcessing(false);
        setIsComplete(true);
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
                    <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
                        <Scissors className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        Split PDF Files
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Split your PDF into separate pages or extract specific page ranges.
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

                {/* Split Options */}
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Split Options
                        </h3>

                        <div className="space-y-4">
                            {/* Split Mode Selection */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setSplitMode("all")}
                                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${splitMode === "all"
                                            ? "border-blue-600 bg-blue-50"
                                            : "border-gray-200 hover:border-blue-300"
                                        }`}
                                >
                                    <div className="font-semibold text-gray-800">Split all pages</div>
                                    <div className="text-sm text-gray-600">
                                        Each page becomes a separate PDF
                                    </div>
                                </button>

                                <button
                                    onClick={() => setSplitMode("range")}
                                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${splitMode === "range"
                                            ? "border-blue-600 bg-blue-50"
                                            : "border-gray-200 hover:border-blue-300"
                                        }`}
                                >
                                    <div className="font-semibold text-gray-800">Extract range</div>
                                    <div className="text-sm text-gray-600">
                                        Extract specific page range
                                    </div>
                                </button>
                            </div>

                            {/* Page Range Input */}
                            {splitMode === "range" && (
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Start Page
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={pageRange.start}
                                            onChange={(e) =>
                                                setPageRange({ ...pageRange, start: parseInt(e.target.value) || 1 })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            End Page
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={pageRange.end}
                                            onChange={(e) =>
                                                setPageRange({ ...pageRange, end: parseInt(e.target.value) || 10 })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            )}
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
                            onClick={handleSplit}
                            disabled={isProcessing}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Splitting PDF...</span>
                                </>
                            ) : (
                                <>
                                    <Scissors className="w-5 h-5" />
                                    <span>Split PDF</span>
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
                                <span>Download Split PDFs</span>
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
                        <li>• Upload a PDF file</li>
                        <li>• Choose to split all pages or extract a range</li>
                        <li>• Click "Split PDF" to process</li>
                        <li>• Download your split PDF files as a ZIP</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
