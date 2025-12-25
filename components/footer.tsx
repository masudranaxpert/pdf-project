import Link from "next/link";
import { FileText, Github, Twitter, Linkedin } from "lucide-react";
import { TOOLS } from "@/lib/constants";

/**
 * Footer component with links and social media
 */
export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">PDFTools</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Professional PDF tools that work directly in your browser. Fast, secure, and completely free.
                        </p>
                    </div>

                    {/* Tools Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Tools</h3>
                        <ul className="space-y-2">
                            {TOOLS.map((tool) => (
                                <li key={tool.id}>
                                    <Link
                                        href={tool.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {tool.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} PDFTools. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
