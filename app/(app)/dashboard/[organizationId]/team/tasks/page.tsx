"use client"

import { useAppState } from "@/hooks/use-appstate"
import { useEffect } from "react"

const Tasks = () => {
  const appState = useAppState()
  useEffect(() => {
    appState.setTab("tasks")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="">Tasks</div>
}

export default Tasks
