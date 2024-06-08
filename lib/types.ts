import { z } from "zod"

export const LoginFormSchema = z.object({
  email: z.string().describe("Email").email({
    message: "Please enter a valid email address",
  }),
  password: z.string().describe("Password").min(1, {
    message: "Please enter a password",
  }),
})

export const CreateOrgFormSchema = z.object({
  name: z.string().describe("Name").min(1, {
    message: "Please enter a name",
  }),
  description: z.string().min(1, {
    message: "Please enter a description",
  }),
})
