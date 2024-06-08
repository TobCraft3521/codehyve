"use client"

import Loader from "@/components/global/loader"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { actionSignUpUser } from "@/lib/actions/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBrowserClient } from "@supabase/ssr"
import clsx from "clsx"
import { MailCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const SignUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  })

const SignUpPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [submitError, setSubmitError] = useState("")
  const [confirmation, setConfirmation] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    const checkUser = async () => {
      if ((await supabase.auth.getUser()).data.user) {
        router.push("/organization-list")
      }
    }
    checkUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return ""
    return searchParams.get("error_description")
  }, [searchParams])

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx("bg-transparent", {
        "bg-red-500/10": codeExchangeError,
        "border-red-500/50": codeExchangeError,
        "text-red-700": codeExchangeError,
      }),
    [codeExchangeError],
  )
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const isLoading = form.formState.isSubmitting
  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof SignUpFormSchema>) => {
    const { error } = await actionSignUpUser({ email, password })
    if (error) {
      setSubmitError(error.message)
      form.reset()
      return
    }
    setConfirmation(true)
  }
  const signUpWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    })
  }
  const signUpWithGithub = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
    })
  }
  return (
    <Form {...form}>
      <form
        onChange={() => submitError && setSubmitError("")}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-6 sm:w-[400px] sm:justify-center"
      >
        <Link
          href="/"
          className="
          justify-left
          flex
          w-full
          items-center"
        >
          <Image
            src="/codehyve.svg"
            alt="codehyve logo"
            width={1709}
            height={512}
            className="w-36 dark:invert"
          />
        </Link>
        <FormDescription
          className="
        text-neutral-600"
        >
          All you&apos;ll ever need to supercharge your team-productivity
        </FormDescription>
        <div className="mt-4 flex h-[40px] w-full flex-row justify-between gap-4">
          <div
            className="flex w-1/2 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-primary/90"
            onClick={signUpWithGoogle}
          >
            <Image src="/google.svg" alt="google" width={20} height={20} />
          </div>
          <div
            className="flex w-1/2 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-primary/90"
            onClick={signUpWithGithub}
          >
            <Image src="/github.svg" alt="github" width={20} height={20} />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between text-xs text-neutral-600">
          <Separator className="my-4 w-[40%]" />
          OR
          <Separator className="my-4 w-[40%]" />
        </div>
        {!confirmation && !codeExchangeError && (
          <>
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
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
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full p-6" disabled={isLoading}>
              {!isLoading ? "Create Account" : <Loader />}
            </Button>
          </>
        )}

        {submitError && <FormMessage>{submitError}</FormMessage>}
        <span className="self-container">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-600">
            Login
          </Link>
        </span>
        {(confirmation || codeExchangeError) && (
          <>
            <Alert className={confirmationAndErrorStyles}>
              {!codeExchangeError && <MailCheck className="h-4 w-4" />}
              <AlertTitle>
                {codeExchangeError ? "Invalid Link" : "Check your email."}
              </AlertTitle>
              <AlertDescription>
                {codeExchangeError || "An email confirmation has been sent."}
              </AlertDescription>
            </Alert>
          </>
        )}
      </form>
    </Form>
  )
}

export default SignUpPage
