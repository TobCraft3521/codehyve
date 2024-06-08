"use client"
import Loader from "@/components/global/loader"
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
import { createOrg } from "@/lib/actions/org/create"
import { CreateOrgFormSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const CreateOrg = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()
  const form = useForm<z.infer<typeof CreateOrgFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(CreateOrgFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })
  const isLoading = form.formState.isSubmitting
  const onSubmit: SubmitHandler<z.infer<typeof CreateOrgFormSchema>> = async (
    formData,
  ) => {
    const { error } = await createOrg(formData)
    if (error) {
      setSubmitError(error)
      return
    }
    router.push("/dashboard")
  }
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Form {...form}>
        <form
          onChange={() => {
            if (submitError) setSubmitError("")
          }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col space-y-4 sm:w-[400px] sm:justify-center"
        >
          <h1 className="text-xl font-bold">Create an organization</h1>
          <FormField
            disabled={isLoading}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Name" {...field} />
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
                  <Input type="text" placeholder="Description" {...field} />
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
            {!isLoading ? "Create" : <Loader />}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateOrg
