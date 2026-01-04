import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Lock, Zap, MousePointer2 } from "lucide-react"

export function Hero() {
    return (
        <div className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
            {/* Background premium blurs */}
            <div className="premium-blur top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20" />
            <div className="premium-blur bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 animate-fade-in">
                    <Zap className="h-3 w-3 fill-current" />
                    <span>LATEST UPDATE: NEW PDF CONVERTERS ADDED</span>
                </div>

                <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-8 animate-slide-up">
                    <span className="block text-foreground drop-shadow-sm">The Ultimate</span>
                    <span className="text-gradient drop-shadow-sm">PDF Boss</span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground animate-fade-in [animation-delay:200ms]">
                    Manage your PDF documents like a pro.
                    <span className="text-foreground font-medium"> Fast, secure, and 100% free.</span>
                    No installation required. No accounts needed. Just pure productivity.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row animate-fade-in [animation-delay:400ms]">
                    <Link href="#tools">
                        <Button size="lg" className="h-14 px-10 text-xl font-bold rounded-2xl bg-primary hover:bg-orange-600 text-white shadow-[0_20px_50px_rgba(255,107,38,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
                            Get Started <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="outline" size="lg" className="h-14 px-10 text-xl font-bold rounded-2xl border-2 border-primary/20 bg-background/50 backdrop-blur-xl hover:bg-primary/5 hover:border-primary transition-all duration-300">
                            How it works
                        </Button>
                    </Link>
                </div>

                {/* Trust badges */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in [animation-delay:600ms]">
                    <div className="flex flex-col items-center gap-3 p-4 rounded-3xl glass-card border-none hover:bg-card/60 transition-colors group">
                        <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                            <Zap className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Instant</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-3xl glass-card border-none hover:bg-card/60 transition-colors group">
                        <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                            <Lock className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-3xl glass-card border-none hover:bg-card/60 transition-colors group">
                        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                            <FileText className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Precise</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-3xl glass-card border-none hover:bg-card/60 transition-colors group">
                        <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                            <MousePointer2 className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Simple</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
