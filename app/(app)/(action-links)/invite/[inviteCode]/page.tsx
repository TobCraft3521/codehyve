import { profile } from "@/lib/actions/user/profile"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

interface InviteCodePageProps {
  params: {
    inviteCode: string
  }
}
const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const user = await profile()
  if (!params.inviteCode) redirect("/dashboard")

  const invitation = await db.invitation.findUnique({
    where: {
      token: params.inviteCode,
    },
  })

  if (!invitation) redirect("/dashboard")

  const { token, organizationId } = invitation
}
