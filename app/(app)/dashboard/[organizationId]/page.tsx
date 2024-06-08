import { profile } from "@/lib/actions/user/profile"
import { redirect } from "next/navigation"

const DashboardPageRedirect = ({
  params,
}: {
  params: {
    organizationId: string
  }
}) => {
  const user = profile()
  if (!user) return redirect("/login")
    return redirect(`/dashboard/${params.organizationId}/team`)
}

export default DashboardPageRedirect
