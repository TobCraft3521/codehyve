import { createClient } from "@/lib/supabase/server"
import { createServerClient } from "@supabase/ssr"
import { redirect } from "next/navigation"

const DashboardRedirect = async () => {
  const supabase = createClient()
  if ((await supabase.auth.getUser()).data.user) {
    
  }else {
    return redirect("/signup")
  }
}

export default DashboardRedirect
