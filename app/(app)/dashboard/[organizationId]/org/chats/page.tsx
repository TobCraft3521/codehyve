"use client"

import { useAppState } from "@/hooks/use-appstate"
import { useEffect } from "react"

const Chats = () => {
  const appState = useAppState()
  useEffect(() => {
    appState.setTab("chats")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="">Chats</div>
}

export default Chats
