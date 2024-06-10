import { Calendar, Edit } from "lucide-react"

const DashboardComponent = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-[30vh] w-full border-b border-zinc-300 bg-[#EDEDF3] dark:border-zinc-800 dark:bg-[#111015]"></div>
      <div className="relative">
        <h1 className="p-24 px-32 pb-0 text-3xl font-semibold">
          Welcome back Tobias
        </h1>
        <div className="flex w-full flex-col justify-center gap-4 p-8 px-24 md:flex-row">
          <div className="group flex h-[170px] w-[30%] cursor-pointer rounded-lg border border-zinc-300 bg-[#e6e6ed] transition-all hover:border-zinc-400 hover:bg-zinc-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-[#0c0b0f] dark:hover:border-zinc-800 dark:hover:bg-zinc-900">
            <div className="flex h-full w-1/3 flex-shrink-0 items-center justify-center rounded-l-lg bg-sky-400 transition-all group-hover:bg-sky-500">
              <Calendar className="h-8 w-8 text-white transition-all group-hover:h-9 group-hover:w-9" />
            </div>
            <div className="flex w-2/3 flex-col justify-center p-4">
              <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400">
                Calendar
              </div>
              <div className="mt-1 text-lg font-medium leading-tight text-black dark:text-white">
                Next Up:
              </div>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Great! You have no upcoming events.
              </p>
            </div>
          </div>
          <div className="flex h-[170px] w-[30%] cursor-pointer flex-col items-center rounded-lg border border-zinc-300 bg-[#e6e6ed] p-6 transition-all hover:border-zinc-400 hover:bg-zinc-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-[#0c0b0f] dark:hover:border-zinc-800 dark:hover:bg-zinc-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
              <span className="text-4xl">+</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold">Quick Action b</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a quick action that performs a specific task.
            </p>
          </div>
          <div className="flex h-[170px] w-[30%] cursor-pointer flex-col items-center rounded-lg border border-zinc-300 bg-[#e6e6ed] p-6 transition-all hover:border-zinc-400 hover:bg-zinc-300 dark:border-[1.5px] dark:border-zinc-900 dark:bg-[#0c0b0f] dark:hover:border-zinc-800 dark:hover:bg-zinc-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
              <span className="text-4xl">+</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold">Quick Action c</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is another quick action that performs a specific task.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent
