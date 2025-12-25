"use client";

import { TOOLS } from "@/lib/constants";
import ToolCard from "./tool-card";

/**
 * Tools grid component displaying all available PDF tools
 */
export default function ToolsGrid() {
    return (
        <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        Powerful <span className="gradient-text">PDF Tools</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose from our suite of professional PDF tools. All processing happens
                        securely in your browser.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TOOLS.map((tool, index) => (
                        <ToolCard
                            key={tool.id}
                            name={tool.name}
                            description={tool.description}
                            icon={tool.icon}
                            href={tool.href}
                            color={tool.color}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
