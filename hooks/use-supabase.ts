"use client"
import { createContext, use, useEffect, useState } from "react"

type SupabaseContextType = {
  supabase: any | null
}

const SupabaseContext = createContext<SupabaseContextType>({
  supabase: null
})

export const useSupabase = () => {
  return use(SupabaseContext)
}

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [supabase, setSupabase] = useState()

  // useEffect(() => {
    
  // }, []) 

  return (
    <SupabaseContext.Provider value={{ supabase }}>
       {children}
    </SupabaseContext.Provider>
  )
}
