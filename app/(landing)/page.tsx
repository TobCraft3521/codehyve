import Footer from "@/components/global/footer"
import Features from "@/components/landing/features"
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import Pricing from "@/components/landing/pricing"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <ScrollArea className="h-screen w-full" id="scroll">
      <div className="relative w-full">
        <Header />
        <div className="absolute top-0 w-full">
          <Hero />
          {/* 600 + 100 a bit of space for the last one */}
          <div className="h-[700vh]">
            <Features />
          </div>
          <Pricing />
          <Footer />
        </div>
      </div>
    </ScrollArea>
  )
}
