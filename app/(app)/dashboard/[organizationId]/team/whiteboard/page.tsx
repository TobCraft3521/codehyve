"use client"

import { useAppState } from "@/hooks/use-appstate"
import { useEffect } from "react"

const Whiteboard = () => {
  const appState = useAppState()
  useEffect(() => {
    appState.setTab("whiteboard")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="">Whiteboard</div>
}

export default Whiteboard
