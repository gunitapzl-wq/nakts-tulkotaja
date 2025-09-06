import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MainContent } from "@/components/main-content"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a10] text-[#f7f8fb]">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  )
}
