
import { ArrowRight, CloudUpload, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">100% Free & Private</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-balance">
          All-in-One <span className="text-gradient">PDF Tools</span> for Everyone
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
          Merge, split, compress, and convert your PDFs in seconds.
          No software to install. No uploads to server (client-side processing).
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link href="#tools">
            <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/tools/compress-pdf">
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md">
              <CloudUpload className="mr-2 h-5 w-5" /> Quick Upload
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureItem
            icon={Zap}
            title="Lightning Fast"
            desc="Processed directly in your browser"
          />
          <FeatureItem
            icon={Shield}
            title="100% Secure"
            desc="Files never leave your device"
          />
          <FeatureItem
            icon={CloudUpload}
            title="No Installation"
            desc="Works on any device, anywhere"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
