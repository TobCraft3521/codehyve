import Image from "next/image"

const WorkInProgressPlaceHolder = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-8">Work In Progress</h1>
      <div className="relative">
        <Image
          src="/imgs/backgrounds/wip.png"
          className="h-[500px] w-[500px]"
          alt="work in progress - page not fully developed"
          width={1024}
          height={1024}
        />
        <div className="absolute left-0 top-[50%] z-10 h-[50%] w-full bg-gradient-to-b from-transparent to-[#F5F5FB]"></div>
      </div>
    </div>
  )
}

export default WorkInProgressPlaceHolder
