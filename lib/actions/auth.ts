"use server"

import { z } from "zod"
import { CookieOptions, createServerClient } from "@supabase/ssr"
import { LoginFormSchema } from "../types"
import { cookies } from "next/headers"

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof LoginFormSchema>) {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    },
  )
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return {
    error: response.error?.message || undefined,
  }
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof LoginFormSchema>) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    },
  )

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)

  if (data?.length) return { error: "User already exists" }
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}api/auth/callback`,
    },
  })
  return {
    error: response.error?.message || undefined,
  }
}
