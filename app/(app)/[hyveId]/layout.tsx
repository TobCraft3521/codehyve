import SidebarProvider from "@/components/hyve/sidebar/sidebar-provider"
import React from "react"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <SidebarProvider>{children}</SidebarProvider>
}

export default Layout
