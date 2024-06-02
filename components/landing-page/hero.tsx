import Link from "next/link"
import GridBg from "./grid-bg"
import CustomTypeWriter from "./typewriter"
import {
  BookText,
  CalendarCheck,
  MessagesSquare,
  NotepadText,
  Video,
} from "lucide-react"
import Features from "./features"

const Hero = () => {
  return (
    <div className="relative z-0 mt-16 min-h-screen w-full md:mt-0">
      <GridBg direction="up" />
      <div className="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center px-8 py-0 md:px-0">
        <div className="mb-8 flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-indigo-600 hover:ring-gray-900/20 dark:text-slate-300 dark:ring-indigo-600">
            What makes us so special{" "}
            <Link href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="mb-16 text-center">
          <h1
            className="text-4xl font-black tracking-tight text-gray-900 drop-shadow-2xl dark:text-slate-100 sm:text-6xl"
            style={{
              lineHeight: "1.1",
            }}
          >
            All You&apos;ll Ever Need
            <br />
            to Supercharge Your
            <span className="relative whitespace-nowrap">
              <span className="absolute -bottom-1 -left-1 -right-1 -top-1 -rotate-1 bg-sky-600 dark:bg-orange-50 md:-bottom-0 md:-left-3 md:-right-3 md:-top-0"></span>
              <span className="relative text-white dark:text-black">
                Team-Collaboration
              </span>
            </span>
          </h1>
          <h2 className="mt-2 flex justify-center gap-2 text-2xl font-medium text-gray-800 dark:text-slate-300 md:mt-4 md:text-3xl">
            <CustomTypeWriter />
          </h2>
          {/* <p className="mt-4 text-lg text-gray-600 dark:text-slate-200 md:mt-6 md:text-xl">
                    Collaborate seamlessly with real-time whiteboards, video
                    conferencing and meeting tracking, task management, and more.
                </p> */}
          <div className="mt-10 flex items-center justify-center gap-x-2 md:gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started for Free
            </Link>
            <Link
              href=""
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
