"use client"

import { useAppState } from "@/hooks/use-appstate"
import { useEffect } from "react"

const Notifications = () => {
  const appState = useAppState()
  useEffect(() => {
    appState.setTab("notifications")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="">Notifications</div>
}

export default Notifications
