"use server"
import { db } from "@/lib/db"
import { auth, createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export const profile = async () => {
  const user = await activeUser()
  if (!user) return redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  })
  // console.log(user.user_metadata)
  if (profile) return profile
  const {
    full_name: name,
    avatar_url: avatarUrl,
    user_name: userName,
  } = user.user_metadata
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name,
      avatarUrl,
      userName,
      email: user.email,
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

export const updateUser = async ({
  name,
  userName,
  avatarUrl,
  description,
}: {
  name: string
  userName: string
  avatarUrl: string
  description: string
}) => {
  const user = await activeUser()
  if (!user) return redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  })
  if (!profile) return redirect("/login")
  await db.profile.update({
    where: {
      id: profile.id,
    },
    data: {
      name,
      userName,
      avatarUrl,
      description,
    },
  })
  return {
    error: null,
  }
}

export const orgMember = async (organizationId: string) => {
  const user = await auth()
  if (!user?.id) return redirect("/login")
  const member = await db.member.findUnique({
    where: {
      organizationId_userId: {
        organizationId,
        userId: user.id,
      },
    },
  })
  if (member) return member
  // right now, only create members when invited or when the user creates an organization
  // so roles can be assignd and you cant just join an organization per api / server action
  // return db.member.create({
  //   data: {
  //     organizationId,
  //     userId: user.id,

  //   },
  // })
}
