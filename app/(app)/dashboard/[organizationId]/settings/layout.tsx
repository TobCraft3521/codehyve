import SettingsSidebar from "@/components/dashboard/settings/sidebar"

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-row">
      <div className="hidden md:block">
        <SettingsSidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default SettingsLayout
