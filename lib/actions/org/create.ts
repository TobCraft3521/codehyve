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
  await db.organization.create({
    data: {
      name,
      description,
      adminUserId: user.id, // this is not auth userId but the user id from the user table
    },
  })
  return { error: null }
}
