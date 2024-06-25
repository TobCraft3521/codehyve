import { db } from "@/lib/db"
import webpush from "web-push"
export const sendPushMessage = async (message: string) => {
  // TODO: put elsewhere, eg where db is set up, so it only runs once
  webpush.setVapidDetails(
    "mailto:tobcraft@outlook.de",
    process.env.VAPID_PUBLIC_KEY || "",
    process.env.VAPID_PRIVATE_KEY || "",
  )

  const subscriptions = await db.notificationSubscription.findMany()
  subscriptions.forEach(async (sub) => {
    const res = await webpush.sendNotification(
      JSON.parse(sub.subscription),
      message,
    )
    if (res.statusCode === 410 || res.statusCode === 404) {
      await db.notificationSubscription.delete({
        where: {
          id: sub.id,
        },
      })
    }
  })
}
