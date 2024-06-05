import { db } from "@/lib/db"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export const profile = async () => {
  const user = await activeUser()
  if (!user) return redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  })
  if (profile) return profile
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      
    },
  })
  return newProfile
}

export const activeUser = async () => {
  const supabase = createClient()
  const user = await (await supabase.auth.getUser()).data.user
  if (user) return user
  return null
}
