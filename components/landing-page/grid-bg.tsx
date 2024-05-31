"use client"
import { cn } from "@/lib/utils"
import styles from "./hero.module.css"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const GridBg = ({ direction }: { direction: "up" | "down" }) => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null
  return (
    <div
      className={cn(
        "absolute left-0 top-0 -z-50 h-[100vh] w-screen",
        direction === "down"
          ? theme === "dark"
            ? styles["bg-grid-dark"]
            : styles["bg-grid"]
          : theme === "dark"
            ? styles["bg-grid-dark-up"]
            : styles["bg-grid-up"],
      )}
    ></div>
  )
}

export default GridBg
