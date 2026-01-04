
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ToolsGrid } from "@/components/tools-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-premium">
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  )
}
