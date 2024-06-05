import { profile } from "@/lib/actions/user/profile"
import { db } from "@/lib/db"
import { createClient } from "@/lib/supabase/server"
import { createServerClient } from "@supabase/ssr"
import { redirect } from "next/navigation"

const DashboardRedirect = async () => {
  const supabase = createClient()
  const user = await profile()
  if (user) {
    const orgs = await db.organization.findMany({
      where: {
        members: {
          some: {
            userId: user.userId,
          },
        },
      },
    })
    if (orgs.length > 0) {
      return redirect("/dashboard/" + orgs[0].id + "")
    }
  } else {
    return redirect("/signup")
  }
}

export default DashboardRedirect
