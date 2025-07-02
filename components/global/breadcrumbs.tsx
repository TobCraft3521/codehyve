import { ChevronRight } from "lucide-react"

const Breadcrumbs = () => {
  return (
    <div className="flex flex-row gap-1 text-base text-mutedcl items-center">
        Tobcraft&apos;s codehyve
        <ChevronRight className="h-4 w-4" />
        Home
    </div>
  )
}

export default Breadcrumbs