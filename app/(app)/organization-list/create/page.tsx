"use client"
import Loader from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createOrg, updateOrg } from "@/lib/actions/org/create"
import { queryBrowserClient } from "@/lib/supabase/client"
import { CreateOrgFormSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { LucideBuilding } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const CreateOrg = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()

  const supabase = queryBrowserClient()
  const form = useForm<z.infer<typeof CreateOrgFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(CreateOrgFormSchema),
    defaultValues: {
      name: "",
      description: "",
      img: "",
    },
  })
  const isLoading = form.formState.isSubmitting
  const onSubmit: SubmitHandler<z.infer<typeof CreateOrgFormSchema>> = async (
    formData,
  ) => {
    console.log(formData)
    const { error, data } = await createOrg({
      name: formData.name,
      description: formData.description,
    })
    if (error) {
      setSubmitError(error)
      return
    }
    const image = formData.img?.[0]
    // await supabase.auth.getUser()
    const { data: imgData, error: imgError } = await supabase.storage
      .from("org-icons")
      .upload("org-icon." + data.id, image, {
        upsert: true,
      })
    if (imgError || !imgData.path) throw new Error()
    const path = supabase.storage.from("org-icons").getPublicUrl(imgData?.path)
      .data.publicUrl
    await updateOrg({
      id: data.id,
      iconUrl: path,
    })
    router.push("/dashboard/" + data.id)
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
          <h1 className="flex items-center gap-2 text-xl font-bold">
            <LucideBuilding className="h-5 w-5" />
            Create an organization
          </h1>

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
                    <Input type="text" placeholder="Name" {...field} />
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
                      className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <Input type="text" placeholder="Description" {...field} />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isLoading}
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <label
                      className="mb-2 block text-sm font-medium tracking-wide text-gray-900 dark:text-zinc-400"
                      htmlFor="img"
                    >
                      Image
                    </label>
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="image"
                      {...form.register("img", {
                        required: "Please select an image",
                      })}
                    />
                  </>
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
