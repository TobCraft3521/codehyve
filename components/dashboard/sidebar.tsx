import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../global/mode-toggle"

interface SideBarProps {
  className?: string
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <div className={cn("flex w-[75vw] max-w-[260px] flex-col p-8", className)}>
      <div className="flex w-full justify-center">
        <div className="flex w-full justify-center">
          <Image
            src="/codehyve.svg"
            alt="codehyve logo"
            width={1709}
            height={512}
            className="w-44 dark:invert"
          />
        </div>
      </div>
      <div className="h-4" />
      <div className="flex w-full justify-center">
        <div className="flex h-8 w-44 flex-row justify-between rounded-full bg-slate-200 dark:bg-slate-800 p-0.5">
          <div className="flex w-full cursor-pointer items-center justify-center rounded-full bg-[cornflowerblue] text-xs font-semibold text-white">
            Team
          </div>
          <div className="flex w-full cursor-pointer items-center justify-center rounded-full px-1 text-[10px] font-semibold text-slate-500">
            Organization
          </div>
        </div>
      </div>

      <div className="mt-64">
        IN DEV <ModeToggle />
      </div>
    </div>
  )
}

export default SideBar
