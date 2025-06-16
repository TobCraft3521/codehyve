import { SidebarProvider as SBProvider } from "@/components/ui/sidebar"
import Sidebar from "./sidebar"

interface SidebarProviderProps {
  children?: React.ReactNode
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  return (
    <SBProvider>
      <Sidebar />
      {children}
    </SBProvider>
  )
}

export default SidebarProvider
