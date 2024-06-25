"use client"

import { pK } from "@/lib/actions/notifications/public-key"
import {
  saveSubscription,
  sendTestNotification,
} from "@/lib/actions/notifications/web-push"
import { useEffect } from "react"

const Page = () => {
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

    sendTestNotification()
  }, [])
  return <div></div>
}

export default Page
