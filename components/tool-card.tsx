"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
    name: string;
    description: string;
    icon: LucideIcon;
    href: string;
    color: string;
    delay?: number;
}

/**
 * Tool card component with hover effects and animations
 */
export default function ToolCard({
    name,
    description,
    icon: Icon,
    href,
    color,
    delay = 0,
}: ToolCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <Link href={href} className="block group">
                <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 card-hover overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300",
                            color
                        )}
                    />

                    {/* Icon */}
                    <div
                        className={cn(
                            "inline-flex p-4 rounded-xl bg-gradient-to-br mb-6 group-hover:scale-110 transition-transform duration-300",
                            color
                        )}
                    >
                        <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

                    {/* Arrow Link */}
                    <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                        <span>Try it now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
