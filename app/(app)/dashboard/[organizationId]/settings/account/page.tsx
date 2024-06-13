"use client"

import Loader from "@/components/global/loader"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { profile, updateUser } from "@/lib/actions/user/profile"
import { UpdateAccountFormSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit3, User } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { ChangeEvent, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

interface AccountSettingsProps {}

const AccountSettings: React.FC<AccountSettingsProps> = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const form = useForm<z.infer<typeof UpdateAccountFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(UpdateAccountFormSchema),
    defaultValues: {
      name: "",
      description: "",
      avatarUrl: "",
      userName: "",
    },
  })
  const isLoading = form.formState.isSubmitting
  const onSubmit: SubmitHandler<
    z.infer<typeof UpdateAccountFormSchema>
  > = async (formData) => {
    const { error } = await updateUser(formData)
    if (error) {
      setSubmitError(error)
      return
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const user = await profile()
      form.setValue("name", user.name)
      form.setValue("description", user.description)
      form.setValue("avatarUrl", user.avatarUrl)
      form.setValue("userName", user.userName)
      setEmail(user.email)
      setLoading(false)
    }
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return (
      <div className="relative flex h-full w-full flex-1 items-center justify-center">
        <div className="absolute top-0 h-[30vh] w-full border-b border-zinc-300 bg-[#EDEDF3] dark:border-zinc-800 dark:bg-[#111015]"></div>
        <div className="relative flex w-full max-w-lg justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm shadow-xl dark:border-gray-800 dark:bg-[#111015] md:rounded-xl md:p-12">
          <Loader />
        </div>
      </div>
    )

  const { name, description, avatarUrl, userName } = form.getValues()

  return (
    <div className="relative flex h-full w-full flex-1 items-center justify-center">
      <div className="absolute top-0 h-[30vh] w-full border-b border-zinc-300 bg-[#EDEDF3] dark:border-zinc-800 dark:bg-[#111015]"></div>
      <Form {...form}>
        <form
          onChange={() => {
            if (submitError) setSubmitError("")
          }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative flex w-full max-w-lg flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm shadow-xl dark:border-gray-800 dark:bg-[#111015] md:rounded-xl md:p-12"
        >
          <div className="flex items-center">
            <Avatar className="mr-4 h-14 w-14">
              <AvatarImage src={avatarUrl}></AvatarImage>
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

          <FormField
            disabled={isLoading}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
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
                        className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        {...field}
                      />
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isLoading}
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <label
                      className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
                      htmlFor="userName"
                    >
                      Username
                    </label>
                    <div className="relative flex items-center">
                      <Edit3 className="absolute left-2 h-5 w-5 text-gray-500" />
                      <input
                        id="userName"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        {...field}
                      />
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isLoading}
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <label
                      className="block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
                      htmlFor="description"
                    >
                      Profile Description
                    </label>
                    <textarea
                      id="description"
                      {...field}
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isLoading}
            control={form.control}
            name="avatarUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <label
                      htmlFor="avatarUrl"
                      className="block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
                    >
                      Avatar URL
                    </label>
                    <input
                      id="avatarUrl"
                      type="text"
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="">
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
              value={email}
              className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-600"
            />
          </div>
          {submitError && <FormMessage>{submitError}</FormMessage>}

          <div className="flex w-full justify-end">
            <Button
              type="submit"
              className="w-full px-8 md:w-auto"
              disabled={isLoading}
            >
              {!isLoading ? "Save" : <Loader />}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AccountSettings
