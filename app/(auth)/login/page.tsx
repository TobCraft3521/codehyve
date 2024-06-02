"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "@/lib/types"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loader from "@/components/global/loader"
import { actionLoginUser } from "@/lib/actions/auth"
import { Separator } from "@/components/ui/separator"

const LoginPage = () => {
  const router = useRouter()
  const [submitError, setSubmitError] = useState("")

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const signInWithGoogle = () => {}

  const isLoading = form.formState.isSubmitting
  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData,
  ) => {
    const { error } = await actionLoginUser(formData)
    if (error) {
      setSubmitError(error.message)
      return
    }
    router.push("/dashboard")
  }
  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("")
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-6 sm:w-[400px] sm:justify-center"
      >
        <Link href="/" className="justify-left flex w-full items-center">
          <Image
            src="/codehyve.svg"
            alt="codehyve logo"
            width={1709}
            height={512}
            className="w-36 dark:invert"
          />
        </Link>
        <FormDescription className="text-neutral-600">
          All you&apos;ll ever need to supercharge your team-productivity
        </FormDescription>
        <div className="mt-4 flex h-[40px] w-full flex-row justify-between gap-4">
          <div className="flex w-1/2 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-primary/90">
            <Image src="/google.svg" alt="google" width={20} height={20} />
          </div>
          <div className="flex w-1/2 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-primary/90">
            <Image src="/github.svg" alt="github" width={20} height={20} />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between text-xs text-neutral-600">
          <Separator className="my-4 w-[40%]" />
          OR
          <Separator className="my-4 w-[40%]" />
        </div>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          className="w-full p-6"
          size="lg"
          disabled={isLoading}
        >
          {!isLoading ? "Login" : <Loader />}
        </Button>
        <span className="self-container">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-orange-600">
            Sign up
          </Link>
        </span>
      </form>
    </Form>
  )
}

export default LoginPage
