import Link from "next/link"
import styles from "./org-list.module.css"
import { Separator } from "@/components/ui/separator"
import { Calendar, LinkIcon, Plus } from "lucide-react"

const OrganizationList = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-row gap-4 items-center">
        <Link href="/organization-list/create" className="group flex h-[130px] w-56 cursor-pointer overflow-hidden rounded-lg border border-zinc-300 bg-gradient-to-r from-gray-100 to-gray-200 drop-shadow-xl transition-all hover:border-zinc-400 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-gradient-to-r dark:from-[#0c0b0f] dark:to-gray-900 dark:hover:border-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-700">
          <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
            <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-indigo-400 transition-all duration-500 group-hover:bottom-[-10%] dark:bg-[#ea5234]"></div>
            <Plus className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
          </div>
          <div className="relative flex w-2/3 flex-col justify-center p-6">
            <div className="absolute mt-1 translate-y-[85px] text-sm font-semibold leading-tight text-gray-800 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">
              Completely free 💳
            </div>
            <div className="absolute mt-1 text-sm font-semibold leading-tight text-gray-800 opacity-100 transition-all duration-500 group-hover:-translate-y-[85px] group-hover:opacity-0 dark:text-white">
              Create New Organization
            </div>
          </div>
        </Link>

        <Separator orientation="vertical" className="h-32" />
        <div
          className={
            "group flex h-[130px] w-56 cursor-pointer overflow-hidden rounded-lg border border-zinc-300 bg-gradient-to-r from-gray-100 to-gray-200 drop-shadow-xl transition-all hover:border-zinc-400 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-gradient-to-r dark:from-[#0c0b0f] dark:to-gray-900 dark:hover:border-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-700" +
            " " +
            styles.idiotCursor
          }
        >
          <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
            <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-indigo-400 transition-all duration-500 group-hover:bottom-[-10%] dark:bg-[#ea5234]"></div>
            <LinkIcon className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
          </div>
          <div className="relative flex h-full w-2/3 flex-col justify-center p-6">
            <div className="absolute mt-1 translate-y-[85px] text-sm font-semibold leading-tight text-gray-800 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">
              Ask for an invite link 🤷‍♂️
            </div>
            <div className="absolute mt-1 text-sm font-semibold leading-tight text-gray-800 opacity-100 transition-all duration-500 group-hover:-translate-y-[85px] group-hover:opacity-0 dark:text-white">
              Join Via Link
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationList
