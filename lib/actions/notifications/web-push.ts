"use server"
import { db } from "@/lib/db"
import webpush from "web-push"
import { sendPushMessage } from "./push-server"

export const sendTestNotification = async () => {
  await sendPushMessage("This is a test message #121212")
}

export const saveSubscription = async (sub: string) => {
  try {
    await db.notificationSubscription.create({
      data: {
        subscription: sub,
      },
    })
  } catch (error) {
    // called again -> in layout, unique constraint failed
    // subscription is already saved
  }
}
