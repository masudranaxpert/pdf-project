"use client";

import { motion } from "framer-motion";
import { Upload, Settings, Download } from "lucide-react";
import { STEPS } from "@/lib/constants";

const icons = [Upload, Settings, Download];

/**
 * Step-by-step guide component showing how to use the tools
 */
export default function StepByStep() {
    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get started in three simple steps. No signup required.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {STEPS.map((step, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Connector Line (hidden on mobile and last item) */}
                                {index < STEPS.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -z-10" />
                                )}

                                <div className="text-center">
                                    {/* Step Number */}
                                    <div className="relative inline-flex items-center justify-center mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full animate-pulse-slow opacity-20" />
                                        <div className="relative w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                                            <Icon className="w-12 h-12 text-white" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-purple-600">
                                            <span className="text-lg font-bold text-purple-600">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#tools"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Start Using Tools
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
