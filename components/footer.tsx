import { FileText, Heart, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/5 bg-card/20 backdrop-blur-sm py-6 px-8 relative z-10" role="contentinfo">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] font-bold text-muted-foreground/60">
        <div className="flex items-center gap-6">
          <p>© 2025 PDFBoss. Professional Edition.</p>
          <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-1">
          Made with <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse mx-1" /> for productivity
        </div>
      </div>
    </footer>
  )
}
