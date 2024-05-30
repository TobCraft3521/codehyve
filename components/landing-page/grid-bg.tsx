"use client"
import { cn } from "@/lib/utils"
import styles from "./hero.module.css"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const GridBg = () => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null
  return (
    <div
      className={cn(
        "absolute -z-50 h-[100vh] w-full",
        theme === "dark" ? styles["bg-grid-dark"] : styles["bg-grid"],
      )}
    ></div>
  )
}

export default GridBg
