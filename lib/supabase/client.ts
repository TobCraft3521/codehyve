import { createBrowserClient } from "@supabase/ssr"

export const queryBrowserClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}

export const auth = async () => {
  const client = queryBrowserClient()
  return await client.auth.getUser()
}
