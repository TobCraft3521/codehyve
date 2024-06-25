"use client"

import { useEffect } from "react"
import { saveSubscription } from "../actions/notifications/web-push"
import { pK } from "../actions/notifications/public-key"

export const dynamic = "force-dynamic"

const PushProvider = () => {
  useEffect(() => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(async (registration) => {
        const result = await Notification.requestPermission()
        if (result !== "granted") {
          return
        }
        const pushSubcripton = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: pK,
        })
        await saveSubscription(JSON.stringify(pushSubcripton))
      })
  }, [])
  return <></>
}

export default PushProvider
