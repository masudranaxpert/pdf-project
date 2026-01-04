import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Lock, Zap } from "lucide-react"

export function Hero() {
    return (
        <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
            {/* Background blobs */}
            <div className="absolute top-0 center -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />

            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
                    <span className="block text-foreground">The Ultimate</span>
                    <span className="text-gradient">PDF Toolkit</span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
                    Every tool you need to work with PDFs in one place.
                    Merge, split, compress, convert, and more.
                    <br className="hidden sm:inline" />
                    <span className="font-semibold text-foreground">100% Free. Secure. No Installation.</span>
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:400ms]">
                    <Link href="#tools">
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                            Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="https://github.com/your-repo" target="_blank" rel="noreferrer">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full border-2 bg-background/50 backdrop-blur-sm hover:bg-accent/50">
                            View on GitHub
                        </Button>
                    </Link>
                </div>

                {/* Features badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in [animation-delay:600ms]">
                    <div className="flex items-center gap-2 rounded-full border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm shadow-sm">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span>Lightning Fast</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm shadow-sm">
                        <Lock className="h-4 w-4 text-green-500" />
                        <span>Secure & Private</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm shadow-sm">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span>High Quality</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
