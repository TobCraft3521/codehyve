import { ModeToggle } from "@/components/global/mode-toggle"
import Header from "@/components/landing-page/header"
import Hero from "@/components/landing-page/hero"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function Home() {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="relative w-full">
        <Header />
        <div className="absolute top-0 w-full">
          <Hero />
          <div className="h-screen"></div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
        </div>
      </div>
    </ScrollArea>
  )
}
