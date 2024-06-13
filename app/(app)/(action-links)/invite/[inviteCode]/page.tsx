import { profile } from "@/lib/actions/user/profile"
import { redirect } from "next/navigation"

interface InviteCodePageProps {
  params: {
    inviteCode: string
  }
}
const InviteCodePage = async ({ params }: InviteCodePageProps) => {
    const user = await profile()
    if(!params.inviteCode) redirect("/dashboard")
    
        
}
