import { Bookmark, Database, MessagesSquare, UserRoundPlus } from "lucide-react"
import React from "react"

// @eslint-disable-next-line @typescript-eslint/no-empty-interface
type Props = object

const quickActions = [
  {
    product: "Chats",
    title: "Check messages",
    icon: MessagesSquare,
  },
  {
    product: "Tasks",
    title: "Create new task",
    icon: Bookmark,
  },
  {
    product: "Databases",
    title: "Create new database",
    icon: Database,
  },
  {
    product: "Crm",
    title: "Create new contact",
    icon: UserRoundPlus,
  },
]

const QuickActions = ({}: Props) => {
  return (
    <div className="space-x-4 flex flex-row">
      {quickActions.map((action) => {
        const Icon = action.icon
        return (
          <div
            key={action.title}
            className="w-[156px] flex flex-row bg-gradient-to-r from-bright to-bgaccent border border-border rounded-[8px] overflow-hidden cursor-pointer hover:to-bright transition group"
          >
            <div className="flex flex-col items-center justify-center w-[48px] h-[96px] bg-bgaccent relative overflow-hidden">
              <div className="absolute top-[150%] h-[150%] w-[170%] left-[-50%] bg-gradient-to-b from-accentcl to-accentcl/70 rotate-12 group-hover:top-[-20%] transition-all duration-200"></div>
              <Icon className="w-6 h-6 z-10" />
            </div>
            {/* <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
              <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-indigo-400 transition-all duration-500 group-hover:bottom-[-10%] dark:bg-[#ea5234]"></div>
              <action.icon className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
            </div> */}
            <div className="flex flex-1 flex-col gap-1 pl-4 justify-center">
              <span className="text-[8px] uppercase">{action.product}</span>
              <span className="font-bold text-xs">{action.title}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default QuickActions
