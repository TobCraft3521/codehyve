import SideBar from "@/components/dashboard/sidebar/sidebar"
import PushProvider from "@/lib/providers/push-provider"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full flex-col">
      <div className="flex w-full flex-1 flex-row">
        <SideBar className="hidden lg:flex" hideContent />
        <div className="flex min-h-screen flex-1 flex-col p-4 pl-0 pt-8">
          <div className="flex flex-1 overflow-hidden bg-[#F5F5FB] dark:bg-[#151419] md:rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
