"use client"

import { cn } from "@/lib/utils"
import {
  Bell,
  CopyCheck,
  LayoutDashboard,
  LogOut,
  MessagesSquare,
  NotepadText,
  Search,
  UserIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ModeToggle } from "../../global/mode-toggle"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { queryBrowserClient } from "@/lib/supabase/client"
import styles from "./sidebar.module.css"
import { User } from "@supabase/supabase-js"
import UserCard from "./user-card"
import { useAppState } from "@/hooks/use-appstate"

interface SideBarProps {
  className?: string
}

const SideBar = ({ className }: SideBarProps) => {
  const [team, setTeam] = useState(true)
  const supabase = queryBrowserClient()
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error) console.error(error)
      else setUser(data.user)
    }
    fetchUser()
  }, [supabase.auth])
  const appState = useAppState()
  console.log(appState.tab)
  return (
    <div
      className={cn(
        "flex w-[75vw] max-w-[260px] flex-col justify-between",
        className,
      )}
    >
      <div className="flex w-[75vw] max-w-[260px] flex-col p-8">
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
          <input
            type="checkbox"
            id="toggle"
            className={styles["toggleCheckbox"]}
            checked={!team} //not checked means team
            onChange={() => setTeam(!team)}
          />
          <label
            htmlFor="toggle"
            className={cn(
              styles["toggleContainer"],
              styles["varprovider"],
              "border-[3px] border-slate-100 bg-slate-100 dark:border-zinc-800 dark:bg-zinc-800",
            )}
          >
            <div>Team</div>
            <div className="!text-[11px]">Organization</div>
          </label>

          <button
            // onClick={() => setOpen(true)}
            className="group mt-4 flex w-44 items-center gap-x-2 rounded-md px-2 py-2 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50"
          >
            <Search className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            <p className="dark:group hover:text-zinc-500-hover:dark:text-zinc-300 text-sm font-semibold text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400">
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
            className="flex w-44 flex-row items-center gap-2 rounded-md p-2 font-semibold text-zinc-600 hover:bg-slate-100 dark:text-white hover:dark:bg-zinc-800"
          >
            <LayoutDashboard size={24} className="text-violet-500" /> Dashboard
          </Link>
          <Link
            href="#"
            className="flex w-44 flex-row items-center gap-2 rounded-md p-2 text-zinc-400 transition-all hover:bg-slate-100 hover:text-zinc-500 hover:dark:bg-zinc-800 hover:dark:text-zinc-300"
          >
            <MessagesSquare size={24} /> Chats
          </Link>
          <Link
            href="#"
            className="flex w-44 flex-row items-center gap-2 rounded-md p-2 text-zinc-400 transition-all hover:bg-slate-100 hover:text-zinc-500 hover:dark:bg-zinc-800 hover:dark:text-zinc-300"
          >
            <NotepadText size={24} /> Whiteboard
          </Link>
          <Link
            href="#"
            className="flex w-44 flex-row items-center gap-2 rounded-md p-2 text-zinc-400 transition-all hover:bg-slate-100 hover:text-zinc-500 hover:dark:bg-zinc-800 hover:dark:text-zinc-300"
          >
            <CopyCheck size={24} /> Tasks
          </Link>
          <Link
            href="#"
            className="flex w-44 flex-row items-center gap-2 rounded-md p-2 text-zinc-400 transition-all hover:bg-slate-100 hover:text-zinc-500 hover:dark:bg-zinc-800 hover:dark:text-zinc-300"
          >
            <Bell size={24} /> Notifications
          </Link>
        </div>
      </div>
      <div className="w-full p-8">
        <UserCard />
      </div>
    </div>
  )
}

export default SideBar
