"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Download, Loader2 } from "lucide-react";
import FileUpload from "@/components/file-upload";
import type { UploadedFile } from "@/types";
import { mockProcessing } from "@/lib/utils";

export default function PdfToHtmlPage() {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [conversionOptions, setConversionOptions] = useState({
        preserveFormatting: true,
        includeImages: true,
        responsive: true,
    });

    const handleConvert = async () => {
        if (files.length === 0) {
            alert("Please upload a PDF file to convert");
            return;
        }

        setIsProcessing(true);
        setIsComplete(false);

        // Mock processing delay
        await mockProcessing(2500);

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
                    <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
                        <Code className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        PDF to HTML Converter
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Convert your PDF documents to clean, responsive HTML code with preserved formatting.
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

                {/* Conversion Options */}
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Conversion Options
                        </h3>

                        <div className="space-y-4">
                            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                                <div>
                                    <div className="font-medium text-gray-800">
                                        Preserve Formatting
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Maintain original fonts, colors, and layout
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={conversionOptions.preserveFormatting}
                                    onChange={(e) =>
                                        setConversionOptions({
                                            ...conversionOptions,
                                            preserveFormatting: e.target.checked,
                                        })
                                    }
                                    className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                                />
                            </label>

                            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                                <div>
                                    <div className="font-medium text-gray-800">Include Images</div>
                                    <div className="text-sm text-gray-600">
                                        Extract and embed images from PDF
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={conversionOptions.includeImages}
                                    onChange={(e) =>
                                        setConversionOptions({
                                            ...conversionOptions,
                                            includeImages: e.target.checked,
                                        })
                                    }
                                    className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                                />
                            </label>

                            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                                <div>
                                    <div className="font-medium text-gray-800">
                                        Responsive Layout
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Generate mobile-friendly HTML
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={conversionOptions.responsive}
                                    onChange={(e) =>
                                        setConversionOptions({
                                            ...conversionOptions,
                                            responsive: e.target.checked,
                                        })
                                    }
                                    className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                                />
                            </label>
                        </div>
                    </motion.div>
                )}

                {/* Preview (Mock) */}
                {isComplete && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-6 bg-gray-900 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">
                            HTML Preview
                        </h3>
                        <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converted PDF</title>
    <style>
      body { font-family: Arial, sans-serif; }
      /* Additional styles... */
    </style>
  </head>
  <body>
    <!-- Converted content -->
  </body>
</html>`}
                        </pre>
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
                            onClick={handleConvert}
                            disabled={isProcessing}
                            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Converting to HTML...</span>
                                </>
                            ) : (
                                <>
                                    <Code className="w-5 h-5" />
                                    <span>Convert to HTML</span>
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
                                <span>Download HTML File</span>
                            </motion.button>
                        )}
                    </motion.div>
                )}

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-200"
                >
                    <h3 className="font-semibold text-orange-900 mb-2">ℹ️ How it works:</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                        <li>• Upload a PDF file</li>
                        <li>• Configure conversion options</li>
                        <li>• Click "Convert to HTML" to process</li>
                        <li>• Download your HTML file with embedded CSS</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
