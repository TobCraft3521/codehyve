import Breadcrumbs from "@/components/global/breadcrumbs"
import Grid from "@/components/hyve/dashboard/grid"
import HyveQuickActions from "@/components/hyve/dashboard/quick-actions"

const HyveHome = () => {
  return (
    <div className="w-full max-w-[1024px] mx-auto flex flex-col mt-[64px] gap-8 px-6 lg:px-0">
      <div className="flex flex-col gap-3">
        <Breadcrumbs />
        <h1 className="font-semibold text-[24px]">
          Welcome back{" "}
          <span className="font-black relative">
            Tobias
            <div className="w-[82px] h-[9px] bg-accentcl mask-[url('/underline.svg')] mask-no-repeat mask-center left-0 absolute -bottom-1" />
          </span>
        </h1>
      </div>
      <HyveQuickActions />
      <Grid />
    </div>
  )
}

export default HyveHome
