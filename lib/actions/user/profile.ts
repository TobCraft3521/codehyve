import { createClient } from "@/lib/supabase/server"

export const profile = async () => {
    const user = await activeUser()
    
}

export const activeUser = async () => {
  const supabase = createClient()
  return (await supabase.auth.getUser()).data.user
}
