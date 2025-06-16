import Link from "next/link"
import GridBg from "./grid-bg"
import CustomTypeWriter from "./typewriter"
import { ChevronRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative z-0 mt-16 min-h-screen w-full md:mt-0">
      <GridBg direction="up" />
      <div className="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center px-8 py-0 md:px-0">
        <div className="mb-8 flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-primary ring-1 ring-muted">
            What makes us so special{" "}
            <Link href="#" className="font-semibold text-accentcl">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="mb-16 text-center">
          <h1
            className="text-4xl font-black tracking-tight text-foreground drop-shadow-2xl sm:text-6xl"
            style={{
              lineHeight: "1.1",
            }}
          >
            All You&apos;ll Ever Need
            <br />
            to Supercharge Your
            <span className="relative whitespace-nowrap">
              <span className="absolute -bottom-1 -left-1 -right-1 -top-1 -rotate-1 bg-sky-600 dark:bg-primary md:-bottom-0 md:-left-3 md:-right-3 md:-top-0"></span>
              <span className="relative text-white dark:text-primary-foreground">
                Team-Collaboration
              </span>
            </span>
          </h1>
          <h2 className="mt-2 flex justify-center gap-2 text-2xl font-medium text-foreground md:mt-4 md:text-3xl">
            <CustomTypeWriter />
          </h2>
          {/* <p className="mt-4 text-lg text-gray-600 dark:text-slate-200 md:mt-6 md:text-xl">
                    Collaborate seamlessly with real-time whiteboards, video
                    conferencing and meeting tracking, task management, and more.
                </p> */}
          <div className="mt-10 flex items-center justify-center gap-x-2 md:gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-accentcl px-3.5 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:brightness-125 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-1"
            >
              Get started for Free <ChevronRight className="inline h-4 w-4" />
            </Link>
            <Link
              href=""
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
