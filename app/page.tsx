import { Hero } from "@/components/hero"
import { ToolsGrid } from "@/components/tools-grid"
import { Shield, Zap, Globe, Heart } from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <div className="relative z-10 -mt-20">
                <ToolsGrid />
            </div>

            <section className="py-24 bg-card/50 backdrop-blur-sm border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Why Choose PDFBoss?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We provide the best PDF tools for free. Fast, secure, and easy to use.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">100% Web Based</h3>
                            <p className="text-muted-foreground">
                                No software to install. Works on all devices and operating systems.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Secure & Safe</h3>
                            <p className="text-muted-foreground">
                                Files are processed securely and deleted automatically after 2 hours.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Lightning Fast</h3>
                            <p className="text-muted-foreground">
                                Powered by advanced servers to process your files in seconds.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Free Forever</h3>
                            <p className="text-muted-foreground">
                                All basic tools are free to use. Support us by sharing with friends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
