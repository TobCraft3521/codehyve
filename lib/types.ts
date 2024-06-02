import { z } from "zod"

export const FormSchema = z.object({
  email: z.string().describe("Email").email({
    message: "Please enter a valid email address",
  }),
  password: z.string().describe("Password").min(1, {
    message: "Please enter a password",
  }),
})
