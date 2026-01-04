import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color?: string
}

export function ToolCard({ title, description, icon: Icon, href, color = "text-primary" }: ToolCardProps) {
    return (
        <Link href={href} className="group relative block h-full outline-none">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] glass-card glass-card-hover p-8 group-focus-visible:ring-2 group-focus-visible:ring-primary ring-offset-4 ring-offset-background">
                {/* Visual accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                <div className={cn(
                    "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner",
                    color.includes("blue") ? "bg-blue-500/10" :
                        color.includes("orange") ? "bg-orange-500/10" :
                            color.includes("purple") ? "bg-purple-500/10" :
                                color.includes("green") ? "bg-green-500/10" :
                                    color.includes("red") ? "bg-red-500/10" : "bg-primary/10"
                )}>
                    <Icon className={cn("h-7 w-7", color)} />
                </div>

                <h3 className="mb-3 text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {title}
                </h3>

                <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground/80 font-medium">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Try Now <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    )
}
