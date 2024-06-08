"use client"

import DashboardComponent from "@/components/dashboard/dashboard/dashboard"
import { useAppState } from "@/hooks/use-appstate"
import { useEffect } from "react"

const Dashboard = () => {
  const appState = useAppState()
  useEffect(() => {
    appState.setTab("dashboard")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <DashboardComponent />
}

export default Dashboard
