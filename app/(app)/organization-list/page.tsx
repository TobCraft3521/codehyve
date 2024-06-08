import Link from "next/link"
import styles from "./org-list.module.css"
import { Separator } from "@/components/ui/separator"
import { LinkIcon, Plus } from "lucide-react"

const OrganizationList = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-row gap-4">
        <Link
          href="/organization-list/create"
          className="flex h-32 w-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-slate-200 text-center text-sm text-slate-500 transition-all hover:bg-[#dbe0e8] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500 dark:hover:bg-[#2d2d30]"
        >
          <Plus className="h-4 w-4" />
          Create Organization
        </Link>
        <Separator orientation="vertical" className="h-32" />
        <div
          className={
            "flex h-32 w-48 flex-col items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-slate-200 text-sm text-slate-500 transition-all hover:bg-[#dbe0e8] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500 dark:hover:bg-[#2d2d30]" +
            " " +
            styles.idiotCursor
          }
        >
          <LinkIcon className="h-4 w-4" />
          Join With Link
        </div>
      </div>
    </div>
  )
}

export default OrganizationList
