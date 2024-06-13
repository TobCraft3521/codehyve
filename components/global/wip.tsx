import Image from "next/image"

const WorkInProgressPlaceHolder = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-5xl font-black translate-y-[425px] z-20">Work In Progress</h1>
      <div className="relative">
        <Image
          src="/imgs/backgrounds/wip.png"
          className="h-[500px] w-[500px]"
          alt="work in progress - page not fully developed"
          width={1024}
          height={1024}
        />
        <div className="absolute left-0 top-[50%] z-10 h-[50%] w-full bg-gradient-to-b from-transparent to-[#F5F5FB] dark:to-[#151419]"></div>
        <div className="absolute left-0 top-0 z-10 h-full w-[50%] bg-gradient-to-l from-transparent to-[#F5F5FB] dark:to-[#151419]"></div>
        <div className="absolute left-[50%] top-0 z-10 h-full w-[50%] bg-gradient-to-r from-transparent to-[#F5F5FB] dark:to-[#151419]"></div>
      </div>
    </div>
  )
}

export default WorkInProgressPlaceHolder
