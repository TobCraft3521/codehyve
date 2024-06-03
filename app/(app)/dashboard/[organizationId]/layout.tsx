import SideBar from "@/components/dashboard/sidebar/sidebar"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full flex-col">
      <div className="flex w-full flex-1 flex-row">
        <SideBar className="hidden lg:flex" />
        <div className="flex min-h-screen flex-1 flex-col pl-0 pt-8">
          <div className="flex flex-1 bg-[#F5F5FB] p-8 dark:bg-[#151419] md:rounded-tl-2xl">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
