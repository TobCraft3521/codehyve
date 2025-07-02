"use client"
import { Sidebar, useSidebar } from "@/components/ui/sidebar"
import {
  ChartArea,
  Home,
  Laptop,
  LucideSidebar,
  PenTool,
  Search,
} from "lucide-react"
import Image from "next/image"
import CodehyveSelector from "./codehyve-selector"

const sampleRecentCombs = [
  {
    name: "Webdesign Team",
    icon: <PenTool className="w-[12px] h-[12px]" />,
  },
  {
    name: "Engineering Team",
    icon: <Laptop className="w-[12px] h-[12px]" />,
  },
  {
    name: "Marketing Team",
    icon: <ChartArea className="w-[12px] h-[12px]" />,
  },
]

const sampleFavoriteCombs = [
  {
    name: "Webdesign Team",
    icon: <PenTool className="w-[12px] h-[12px]" />,
  },
  {
    name: "Engineering Team",
    icon: <Laptop className="w-[12px] h-[12px]" />,
  },
  {
    name: "Marketing Team",
    icon: <ChartArea className="w-[12px] h-[12px]" />,
  },
  {
    name: "Marketing Team",
    icon: <ChartArea className="w-[12px] h-[12px]" />,
  },
]

const CodehyveSidebar = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar className="w-[240px] bg-bgaccent">
      <div className="px-[24px] pt-[32px] flex flex-col gap-[24px]">
        {/* Section with codehyve, sidebar trigger, codehyve selector and ctrlk */}
        <div className="flex flex-col gap-3 w-full">
          {/* First row with logo and sb trigger */}
          <div className="flex flex-row justify-between">
            <Image
              src={"/codehyve.svg"}
              alt="codehyve logo"
              width={115}
              height={24}
              className="dark:invert cursor-pointer"
            />

            <LucideSidebar
              className="text-muted hover:text-foreground p-1 w-[24px] h-[24px] hover:bg-accent rounded-[4px]"
              onClick={toggleSidebar}
            />
          </div>
          <CodehyveSelector />
          <div className="w-full h-[36px] gap-2 flex flex-row items-center justify-center text-muted cursor-pointer hover:bg-bright rounded-[8px]">
            <div className="flex flex-row gap-1 font-bold text-[12px] items-center justify-center">
              <Search className="h-3 w-3" />
              Search or jump to via
            </div>
            <div className="w-[36px] h-4 bg-bright rounded-[4px] flex items-center justify-center font-black text-[6px]">
              CTRL + K
            </div>
          </div>
        </div>
        {/* home */}
        <div className="flex flex-row gap-1 w-full cursor-pointer hover:bg-bright items-center p-1.5 rounded-[6px] text-[12px] bg-bright transition">
          <Home className="h-[12px] w-[12px]" />
          Home
        </div>

        {/* recent combs */}
        <div className="flex flex-col gap-[6px]">
          <div className="font-bold text-[12px]">Recent Combs</div>
          {sampleRecentCombs.map((comb, index) => (
            <div
              key={index}
              className="flex flex-row gap-1 w-full cursor-pointer transition hover:bg-bright items-center p-1.5 rounded-[6px] text-[12px]"
            >
              {comb.icon}
              <span>{comb.name}</span>
            </div>
          ))}
        </div>

        {/* favorite combs */}
        <div className="flex flex-col gap-[6px]">
          <div className="font-bold text-[12px]">Favorite Combs</div>
          {sampleFavoriteCombs.map((comb, index) => (
            <div
              key={index}
              className="flex flex-row gap-1 w-full cursor-pointer hover:bg-bright items-center p-1.5 rounded-[6px] text-[12px]"
            >
              {comb.icon}
              <span>{comb.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Sidebar>
  )
}

export default CodehyveSidebar
