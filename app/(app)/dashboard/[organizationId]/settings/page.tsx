"use client"
import { redirect, useParams } from "next/navigation"

const Settings = () => {
  const { organizationId } = useParams()
  return redirect(`/dashboard/${organizationId}/settings/account`)
}

export default Settings
