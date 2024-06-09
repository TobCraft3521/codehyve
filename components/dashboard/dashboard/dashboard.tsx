const DashboardComponent = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-[30vh] w-full bg-[#EDEDF3] dark:bg-[#111015]"></div>
      <div className="relative">
        <h1 className="p-24 px-32 pb-0 text-2xl font-semibold">Welcome back Tobias</h1>
        <div className="flex w-full flex-col justify-center gap-8 p-12 px-24 md:flex-row">
          <div className="flex h-[180px] w-[30%] items-center justify-center rounded-xl border border-zinc-300 bg-[#e6e6ed]  dark:border-zinc-900 dark:bg-[#0e0d11]">
            Quick Action a
          </div>
          <div className="flex h-[180px] w-[30%] items-center justify-center rounded-xl border border-zinc-300 bg-[#e6e6ed] dark:border-zinc-900 dark:bg-[#0e0d11]">
            Quick Action b
          </div>
          <div className="flex h-[180px] w-[30%] items-center justify-center rounded-xl border border-zinc-300 bg-[#e6e6ed] dark:border-zinc-900 dark:bg-[#0e0d11]">
            Quick Action c
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent
