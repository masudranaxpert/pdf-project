import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"

interface ToolCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color?: string
}

export function ToolCard({ title, description, icon: Icon, href, color = "text-primary" }: ToolCardProps) {
    return (
        <Link href={href} className="group relative block h-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg dark:bg-card/40 dark:backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`h-6 w-6 ${color}`} />
                </div>

                <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {title}
                </h3>

                <p className="mb-6 text-sm text-muted-foreground">
                    {description}
                </p>

                <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowRight className="h-5 w-5 text-primary" />
                </div>
            </div>
        </Link>
    )
}
