"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Hero section component with animated headline and CTA buttons
 */
export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center mb-6"
                >
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow-lg">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Free PDF Tools
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    <span className="gradient-text">Transform Your PDFs</span>
                    <br />
                    <span className="text-gray-800">With Ease</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
                >
                    Merge, split, compress, and convert your PDF files effortlessly.
                    All tools are free, secure, and work directly in your browser.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#tools"
                        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
                    >
                        Learn More
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                >
                    {[
                        { label: "Files Processed", value: "1M+" },
                        { label: "Active Users", value: "50K+" },
                        { label: "Success Rate", value: "99.9%" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
