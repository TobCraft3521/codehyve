"use client"

import { useAppState } from "@/hooks/use-appstate"
import { useEffect } from "react"

const Dashboard = () => {
  const appState = useAppState()
  useEffect(() => {
    appState.setTab("dashboard")
  }, [])

  return <div className="">Dashboard</div>
}

export default Dashboard
