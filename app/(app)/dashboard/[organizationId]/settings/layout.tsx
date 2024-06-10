import SettingsSidebar from "@/components/dashboard/settings/sidebar"

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-row">
      <SettingsSidebar />
      <div className="h-full">{children}</div>
    </div>
  )
}

export default SettingsLayout
