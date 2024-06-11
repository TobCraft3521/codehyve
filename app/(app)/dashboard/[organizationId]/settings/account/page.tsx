"use client"

import React, { useState, ChangeEvent } from "react"
import { User, Edit3 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AccountSettingsProps {}

const AccountSettings: React.FC<AccountSettingsProps> = () => {
  const [name, setName] = useState<string>("John Doe")
  const [description, setDescription] = useState<string>(
    "This is a profile description.",
  )

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value)

  return (
    <div className="relative flex h-full w-full flex-1 items-center justify-center">
      <div className="absolute top-0 h-[30vh] w-full border-b border-zinc-300 bg-[#EDEDF3] dark:border-zinc-800 dark:bg-[#111015]"></div>

      <div className="relative max-w-lg w-full rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-xl dark:border-gray-800 dark:bg-[#111015] md:rounded-xl md:p-12">
        <div className="mb-6 flex items-center">
          <Avatar className="mr-4 h-14 w-14">
            <AvatarImage src="/github.svga"></AvatarImage>
            <AvatarFallback>
              <User className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Account Settings
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Edit your account details
            </p>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
            htmlFor="name"
          >
            Name
          </label>
          <div className="relative flex items-center">
            <Edit3 className="absolute left-2 h-5 w-5 text-gray-500" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
            htmlFor="description"
          >
            Profile Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows={4}
            className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="avatarUrl"
            className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
          >
            Avatar URL
          </label>
          <input
            id="avatarUrl"
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            disabled
            value={"email@provider.com"}
            className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400"
          />
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
