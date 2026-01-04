
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ToolCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  href: string
}

export function ToolCard({ icon: Icon, title, description, color, href }: ToolCardProps) {
  return (
    <Link href={href} className="block group focus:outline-none focus:ring-2 focus:ring-ring rounded-xl h-full">
      <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group-hover:bg-white/10 dark:group-hover:bg-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="p-6 relative z-10">
          <div
            className={cn("rounded-2xl p-3.5 w-fit mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg", color)}
            aria-hidden="true"
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  )
}
