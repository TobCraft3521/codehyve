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
  Settings,
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
import { useParams, useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

interface SideBarProps {
  className?: string
  hideContent?: boolean
}

const SideBar = ({ className, hideContent }: SideBarProps) => {
  const [team, setTeam] = useState(true)
  const supabase = queryBrowserClient()
  const [user, setUser] = useState<User | null>(null)
  const orgId = useParams().organizationId
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error) console.error(error)
      else setUser(data.user)
    }
    fetchUser()
  }, [supabase.auth])
  const appState = useAppState()
  const router = useRouter()
  const tabs = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={22} />,
      id: "dashboard",
      href: "/dashboard/" + orgId + (team ? "/team" : "/org"),
    },
    {
      name: "Chats",
      icon: <MessagesSquare size={22} />,
      id: "chats",
      href: "/dashboard/" + orgId + (team ? "/team" : "/org") + "/chats",
    },
    {
      name: "Whiteboard",
      icon: <NotepadText size={22} />,
      id: "whiteboard",
      href: "/dashboard/" + orgId + (team ? "/team" : "/org") + "/whiteboard",
    },
    {
      name: "Tasks",
      icon: <CopyCheck size={22} />,
      id: "tasks",
      href: "/dashboard/" + orgId + (team ? "/team" : "/org") + "/tasks",
    },
    {
      name: "Notifications",
      icon: <Bell size={22} />,
      id: "notifications",
      href:
        "/dashboard/" + orgId + (team ? "/team" : "/org") + "/notifications",
    },
  ]
  const secondaryTabs = [
    {
      name: "Settings",
      icon: <Settings size={22} />,
      id: "settings",
      href: "/dashboard/" + orgId + "/settings",
    },
  ]
  const handleTeamOrgSwitch = (teamOrOrg: boolean) => {
    if (teamOrOrg) router.push("/dashboard/" + orgId + "/team")
    else router.push("/dashboard/" + orgId + "/org")
  }
  return (
    <div
      className={cn(
        "flex w-[75vw] max-w-[260px] flex-col justify-between",
        className,
      )}
    >
      <div className="flex w-[75vw] max-w-[260px] flex-col p-8 pt-12">
        <div className="flex w-full justify-center">
          <div className="flex w-full justify-center">
            <Image
              src="/codehyve.svg"
              alt="codehyve logo"
              width={1709}
              height={512}
              className="w-44 cursor-pointer dark:invert"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <div
          style={{
            display: hideContent ? "none" : "block",
          }}
        >
          <div className="h-4" />
          <div className="flex w-full flex-col items-center justify-center">
            <input
              type="checkbox"
              id="toggle"
              className={styles["toggleCheckbox"]}
              checked={!team} //not checked means team
              onChange={() => {
                setTeam(!team)
                handleTeamOrgSwitch(!team) // set state only has an effect after the render
              }}
            />
            <label
              htmlFor="toggle"
              className={cn(
                styles["toggleContainer"],
                styles["varprovider"],
                "border-[3px] border-slate-100 bg-slate-100 dark:border-zinc-800 dark:bg-zinc-800",
              )}
            >
              <div className="!text-[11px]">Team</div>
              <div className="!text-[11px]">Organization</div>
            </label>

            <button
              // onClick={() => setOpen(true)}
              className="group mt-2 flex w-44 items-center gap-x-2 rounded-md px-2 py-1.5 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50"
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

          <div className="mt-6 flex w-full flex-col items-center gap-0.5 p-2 text-sm font-medium">
            {tabs.map((tab) => (
              <Link
                href={tab.href}
                key={tab.id}
                className={cn(
                  "flex w-44 flex-row items-center gap-2 rounded-md p-2 text-sm text-slate-400 transition-all dark:text-zinc-400",
                  appState.tab === tab.id
                    ? "bg-slate-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300"
                    : "hover:bg-slate-100 hover:text-zinc-500 hover:dark:bg-zinc-800 hover:dark:text-zinc-300",
                )}
                onClick={() => {
                  appState.setTab(tab.id)
                }}
              >
                {tab.icon} {tab.name}
              </Link>
            ))}
          </div>
          <Separator />
          <div className=" flex w-full flex-col items-center gap-0.5 p-2 text-sm font-medium">
            {secondaryTabs.map((tab) => (
              <Link
                href={tab.href}
                key={tab.id}
                className={cn(
                  "flex w-44 flex-row items-center gap-2 rounded-md p-2 text-sm text-slate-400 transition-all dark:text-zinc-400",
                  appState.tab === tab.id
                    ? "bg-slate-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300"
                    : "hover:bg-slate-100 hover:text-zinc-500 hover:dark:bg-zinc-800 hover:dark:text-zinc-300",
                )}
                onClick={() => {
                  appState.setTab(tab.id)
                }}
              >
                {tab.icon} {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-8">
        <UserCard />
      </div>
    </div>
  )
}

export default SideBar
