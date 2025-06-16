import { Boxes, ChevronDown } from "lucide-react"

const CodehyveSelector = () => {
  return (
    <div className="w-full bg-bright h-[36px] rounded-[8px] flex flex-row gap-1 justify-center items-center cursor-pointer">
      <div className="flex gap-1 justify-center items-center font-bold text-[12px]">
        <Boxes className="h-4 w-4 text-foreground" />
        Tobcraft&apos;s codehyve
      </div>
      <ChevronDown className="h-4 w-4" />
    </div>
  )
}

export default CodehyveSelector
