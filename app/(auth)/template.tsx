import GridBg from "@/components/landing-page/grid-bg"

interface TemplateProps {
  children: React.ReactNode
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div className="relative flex h-screen justify-center p-6">
      <GridBg direction="up" />
      {children}
    </div>
  )
}

export default Template
