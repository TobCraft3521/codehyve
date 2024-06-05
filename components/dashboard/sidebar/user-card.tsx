import { ModeToggle } from "@/components/global/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { profile } from "@/lib/actions/user/profile"
import { LogOut, User } from "lucide-react"

const UserCard = () => {
  const user = null
  return (
    <div className="flex h-12 w-full flex-row rounded-xl bg-zinc-100 dark:bg-zinc-800">
      <Avatar className="my-auto ml-2 h-8 w-8">
        <AvatarImage src="https://tobcraft.xyz/imgs/hand.jpg"></AvatarImage>
        <AvatarFallback>
          <User
            size={32}
            className="rounded-full bg-white p-1 dark:bg-zinc-500"
          />
        </AvatarFallback>
      </Avatar>
      <div className="my-auto ml-2 flex h-8 w-16 flex-col justify-center truncate">
        <h1 className="truncate text-xs font-semibold leading-3">
          TobCraft3521
        </h1>
        <h2 className="truncate text-[10px]">tobcraftabc@outlook.com</h2>
      </div>
      <div className="my-auto ml-2">
        <ModeToggle size="sm" />
      </div>
      <div className="my-auto ml-2">
        <LogOut size={18} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default UserCard
