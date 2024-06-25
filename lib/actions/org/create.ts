"use server"

import { db } from "@/lib/db"
import { CreateOrgFormSchema } from "@/lib/types"
import { z } from "zod"
import { profile } from "../user/profile"

export const createOrg = async ({
  name,
  description,
}: z.infer<typeof CreateOrgFormSchema>) => {
  const user = await profile()
  const org = await db.organization.create({
    data: {
      name,
      description,
      adminUserId: user.id, // this is not auth userId but the user id from the user table
    },
  })
  return {
    error: null,
    data: {
      id: org.id,
    },
  }
}

export const updateOrg = async ({
  name,
  description,
  iconUrl,
  id,
}: {
  name?: string
  description?: string
  iconUrl?: string
  id: string
}) => {
  const user = await profile()
  const org = await db.organization.findUnique({
    where: {
      id,
      // ensure that the user is the admin of the organization / not a "hacker"
      adminUserId: user.id, // this is not auth userId but the user id from the user table
    },
  })
  if (!org) throw new Error("Organization not found")
  await db.organization.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      iconUrl,
    },
  })
}
