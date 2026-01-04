import { ToolsGrid } from "@/components/tools-grid"
import { Shield, Zap, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-6 py-12">
                {/* Dashboard Header */}
                <div className="mb-12">
                    <h1 className="text-3xl font-black tracking-tight mb-2">Welcome to PDFBoss</h1>
                    <p className="text-muted-foreground font-medium">Select a tool from the sidebar or grid below to get started with your PDF documents.</p>
                </div>

                <div className="relative z-10">
                    <ToolsGrid />
                </div>
            </div>

            {/* Why Choose Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="premium-blur top-1/2 left-0 w-[40%] h-[40%] bg-primary/10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                            Excellence
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                            Why professionals <span className="text-primary font-outline-2">trust</span> PDFBoss
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            We've engineered the perfect balance between high-performance processing
                            and uncompromising data privacy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Globe,
                                title: "Universal Access",
                                desc: "No software required. Process your files from any device, anywhere in the world.",
                                color: "text-blue-500",
                                bg: "bg-blue-500/10"
                            },
                            {
                                icon: Shield,
                                title: "Bank-Level Security",
                                desc: "Military-grade encryption for all files. Your data is automatically purged every 60 minutes.",
                                color: "text-green-500",
                                bg: "bg-green-500/10"
                            },
                            {
                                icon: Zap,
                                title: "Instant Processing",
                                desc: "Multi-threaded cloud nodes ensure the fastest processing speeds in the industry.",
                                color: "text-orange-500",
                                bg: "bg-orange-500/10"
                            },
                            {
                                icon: Heart,
                                title: "Built for Privacy",
                                desc: "Most operations run 100% in your browser. Your files never even touch our servers.",
                                color: "text-red-500",
                                bg: "bg-red-500/10"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card glass-card-hover p-8 rounded-[2.5rem] border-none group">
                                <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner", feature.bg, feature.color)}>
                                    <feature.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed text-[15px]">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="rounded-[3rem] bg-primary p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                            Ready to master your PDFs?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 font-medium">
                            Join thousands of users who process their documents with PDFBoss every day.
                            Completely free, totally secure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-white text-primary font-black text-lg hover:bg-white/90 transition-all shadow-xl">
                                Get Started Now
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-2xl border-white/20 bg-white/5 text-white font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                View Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
