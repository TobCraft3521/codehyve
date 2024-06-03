"use client"

import { cn } from "@/lib/utils"
import {
  Bell,
  CopyCheck,
  LayoutDashboard,
  MessagesSquare,
  NotepadText,
  Search,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ModeToggle } from "../../global/mode-toggle"

import styles from "./sidebar.module.css"

interface SideBarProps {
  className?: string
}

const SideBar = ({ className }: SideBarProps) => {
  const [team, setTeam] = useState(true)
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
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex h-7 w-44 flex-row justify-between rounded-full bg-slate-200 p-0.5 dark:bg-slate-800">
          <div
            className="absolute top-0 m-0.5 h-[24px] w-[calc(50%-4px)] rounded-full bg-purple-500 dark:bg-purple-600"
            style={
              team
                ? { left: 0, transition: "all 0.3s" }
                : { right: 0, transition: "all 0.3s" }
            }
          ></div>
          <div
            className="z-10 flex w-full cursor-pointer items-center justify-center rounded-full text-sm font-semibold text-white"
            style={team ? { color: "#fff" } : { color: "#64748B" }}
            onClick={() => setTeam(true)}
          >
            Team
          </div>
          <div
            className="z-10 flex w-full cursor-pointer items-center justify-center rounded-full text-[11px] font-semibold text-slate-500"
            style={!team ? { color: "#fff" } : { color: "#64748B" }}
            onClick={() => setTeam(false)}
          >
            Organization
          </div>
        </div>

        <input
          type="checkbox"
          id="toggle"
          className={styles["toggleCheckbox"]}
        />
        <label htmlFor="toggle" className={styles["toggleContainer"]}>
          <div>Team</div>
          <div>Organization</div>
        </label>

        <button
          // onClick={() => setOpen(true)}
          className="group mt-4 flex w-44 items-center gap-x-2 rounded-md px-2 py-2 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50"
        >
          <Search className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <p className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300">
            Search
          </p>
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">CTRL</span> K
          </kbd>
        </button>
      </div>

      <div className="mt-6 flex w-full flex-col items-center p-2 text-sm font-medium">
        <Link
          href="#"
          className="flex w-44 flex-row items-center gap-2 p-2 text-white"
        >
          <LayoutDashboard size={24} className="text-purple-500" /> Dashboard
        </Link>
        <Link
          href="#"
          className="flex w-44 flex-row items-center gap-2 p-2 text-zinc-400 transition-all hover:text-zinc-300"
        >
          <MessagesSquare size={24} /> Chats
        </Link>
        <Link
          href="#"
          className="flex w-44 flex-row items-center gap-2 p-2 text-zinc-400 transition-all hover:text-zinc-300"
        >
          <NotepadText size={24} /> Whiteboard
        </Link>
        <Link
          href="#"
          className="flex w-44 flex-row items-center gap-2 p-2 text-zinc-400 transition-all hover:text-zinc-300"
        >
          <CopyCheck size={24} /> Tasks
        </Link>
        <Link
          href="#"
          className="flex w-44 flex-row items-center gap-2 p-2 text-zinc-400 transition-all hover:text-zinc-300"
        >
          <Bell size={24} /> Notifications
        </Link>
      </div>

      <div className="mt-64">
        IN DEV <ModeToggle />
      </div>
    </div>
  )
}

export default SideBar
