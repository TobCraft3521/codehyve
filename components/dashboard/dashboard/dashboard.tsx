import { Calendar, Edit, MessagesSquare, Pen, PenBox, Video } from "lucide-react"
import Image from "next/image"

const DashboardComponent = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-[30vh] w-full border-b border-zinc-300 bg-[#EDEDF3] dark:border-zinc-800 dark:bg-[#111015]"></div>
      <div className="relative">
        <h1 className="p-24 px-32 pb-0 text-3xl font-semibold tracking-tight">
          Welcome back{" "}
          <span className="relative font-bold">
            Tobias
            <Image
              src="/underline.svg"
              alt="Underline"
              width={126}
              height={14}
              className="absolute left-0 top-[90%] w-full"
            />
          </span>
        </h1>
        <div className="grid w-full grid-cols-1 justify-center gap-6 p-8 px-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="group flex h-[130px] cursor-pointer rounded-lg border border-zinc-300 bg-gradient-to-r from-gray-100 to-gray-200 drop-shadow-xl transition-all hover:border-zinc-400 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-gradient-to-r dark:from-[#0c0b0f] dark:to-gray-900 dark:hover:border-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-700">
            <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
              <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-[#ea5234] transition-all duration-500 group-hover:bottom-[-10%]"></div>
              <Calendar className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
            </div>
            <div className="flex w-2/3 flex-col justify-center p-6">
              <div className="text-[10px] font-bold uppercase tracking-wide text-zinc-900 dark:text-indigo-400">
                Calendar
              </div>
              <div className="text-l mt-1 font-bold leading-tight text-gray-800 dark:text-white">
                Next Up
              </div>
            </div>
          </div>
          <div className="group flex h-[130px] cursor-pointer rounded-lg border border-zinc-300 bg-gradient-to-r from-gray-100 to-gray-200 drop-shadow-xl transition-all hover:border-zinc-400 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-gradient-to-r dark:from-[#0c0b0f] dark:to-gray-900 dark:hover:border-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-700">
            <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
              <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-[#ea5234] transition-all duration-500 group-hover:bottom-[-10%]"></div>
              <Video className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
            </div>
            <div className="flex w-2/3 flex-col justify-center p-6">
              <div className="text-[10px] font-bold uppercase tracking-wide text-zinc-900 dark:text-indigo-400">
                Meetings
              </div>
              <div className="text-l mt-1 font-bold leading-tight text-gray-800 dark:text-white">
                Start Meeting
              </div>
            </div>
          </div>
          <div className="group flex h-[130px] cursor-pointer rounded-lg border border-zinc-300 bg-gradient-to-r from-gray-100 to-gray-200 drop-shadow-xl transition-all hover:border-zinc-400 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-gradient-to-r dark:from-[#0c0b0f] dark:to-gray-900 dark:hover:border-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-700">
            <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
              <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-[#ea5234] transition-all duration-500 group-hover:bottom-[-10%]"></div>
              <MessagesSquare className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
            </div>
            <div className="flex w-2/3 flex-col justify-center p-6">
              <div className="text-[10px] font-bold uppercase tracking-wide text-zinc-900 dark:text-indigo-400">
                Messages
              </div>
              <div className="text-l mt-1 font-bold leading-tight text-gray-800 dark:text-white">
                Start Chat
              </div>
            </div>
          </div>
          <div className="group flex h-[130px] cursor-pointer rounded-lg border border-zinc-300 bg-gradient-to-r from-gray-100 to-gray-200 drop-shadow-xl transition-all hover:border-zinc-400 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-gradient-to-r dark:from-[#0c0b0f] dark:to-gray-900 dark:hover:border-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-700">
            <div className="relative flex h-full w-1/3 flex-shrink-0 items-center justify-center overflow-hidden rounded-l-lg bg-zinc-300 transition-all dark:bg-gray-800">
              <div className="absolute -bottom-[175%] left-[-30%] h-[160%] w-[160%] rotate-12 transform bg-[#ea5234] transition-all duration-500 group-hover:bottom-[-10%]"></div>
              <PenBox className="relative z-10 h-6 w-6 text-white transition-all group-hover:h-9 group-hover:w-9" />
            </div>
            <div className="flex w-2/3 flex-col justify-center p-6">
              <div className="text-[10px] font-bold uppercase tracking-wide text-zinc-900 dark:text-indigo-400">
                Productivity
              </div>
              <div className="text-l mt-1 font-bold leading-tight text-gray-800 dark:text-white">
                Launch Whiteboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent
