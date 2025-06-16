"use client"

import { cn } from "@/lib/utils"
import {
  BookText,
  CalendarCheck2,
  Check,
  Megaphone,
  MessagesSquare,
  NotepadText,
  Video,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const pages = 6

const features = [
  {
    title: "Whiteboards",
    longTitle: "Real-time Collaboration Whiteboards",
    description: "Draw, write, insert, and share ideas with your team",
    secondaryTicks: ["Draw", "Write", "Insert"],
    primaryTicks: [
      "Low Latency",
      "High Performance",
      "Real-time Collaboration",
    ],
    icon: <NotepadText size={32} className="" />,
    image: undefined,
  },
  {
    title: "Chats",
    longTitle: "Real-time Chat Messaging",
    description: "Send and Receive Messages with your Team and attach files.",
    secondaryTicks: ["Send", "Receive", "Attach"],
    primaryTicks: ["Low Latency", "High Performance", "Real-time Messaging"],
    icon: <MessagesSquare size={32} className="" />,
    image: undefined,
  },
  {
    title: "Video Calls",
    longTitle: "Video Conferencing and Meeting Planning",
    description:
      "Host and join video calls with your team and share your screen. Plan meetings and export them to your calendar.",
    secondaryTicks: ["Join", "Plan", "Export"],
    primaryTicks: ["Low Latency", "Recording", "Screen Sharing"],
    icon: <Video size={32} className="" />,
    image: undefined,
  },
  {
    title: "Tasks",
    longTitle: "Task Management and Scheduling with Deadlines",
    description:
      "Create, assign, and manage tasks with notes, deadlines and reminders.",
    secondaryTicks: ["Create", "Assign", "Notes"],
    primaryTicks: ["Reminders", "Deadlines", "Custom Notes"],
    icon: <CalendarCheck2 size={32} className="" />,
    image: undefined,
  },
  {
    title: "Docs",
    longTitle: "Documentation and Quick Access to Text based Files",
    description:
      "Create, edit, and share markdown files with your team or the whole company.",
    secondaryTicks: ["Create", "Edit", "Share"],
    primaryTicks: ["Markdown", "Quick Access", "Text Files"],
    icon: <BookText size={32} className="" />,
    image: undefined,
  },
  {
    title: "Alerts",
    longTitle: "Notifications for Important Updates down to the Little Things",
    description:
      "Get notified about important updates and events or just your messages, tasks and meetings.",
    secondaryTicks: ["Events", "Messages", "Tasks"],
    primaryTicks: ["Notifications", "Important Updates", "Meetings"],
    icon: <Megaphone size={32} className="" />,
    image: undefined,
  },
]

const Features = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [featureIndex, setFeatureIndex] = useState(0)
  useEffect(() => {
    const scrollAreaElement = document.getElementById("scroll")
    if (!scrollAreaElement) return

    const fadeInAnimation = async () => {
      // Get the active feature element
      const activeFeatureElement = document.getElementsByClassName(
        "feature"
      )[0] as HTMLDivElement

      if (!activeFeatureElement) return

      // Reset the styles to initial state before applying the animation
      activeFeatureElement.style.transition = "none"
      activeFeatureElement.style.opacity = "0"
      activeFeatureElement.style.transform = "translateY(-20px)"

      // Force a reflow to apply the initial styles
      activeFeatureElement.getBoundingClientRect()

      // Use setTimeout to ensure the reset styles are applied before starting the transition
      setTimeout(() => {
        activeFeatureElement.style.transition = "opacity 0.8s, transform 0.8s"
        activeFeatureElement.style.opacity = "1"
        activeFeatureElement.style.transform = "translateY(0px)"
      }, 0)
    }

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement
      if (!target) return

      const bound = Math.min(
        Math.max(0, target.scrollTop - window.innerHeight),
        pages * window.innerHeight
      )
      // console.log(bound / window.innerHeight)
      // console.log(Math.floor(bound / window.innerHeight))
      // console.log(Math.min(pages - 1, Math.floor(bound / window.innerHeight)))
      setScrollHeight(bound)
      setFeatureIndex(
        Math.min(pages - 1, Math.floor(bound / window.innerHeight))
      )

      if (
        featureIndex !==
        Math.min(pages - 1, Math.floor(bound / window.innerHeight))
      ) {
        fadeInAnimation()
      }
    }

    const viewport = scrollAreaElement.querySelector(
      "[data-radix-scroll-area-viewport]"
    )
    if (viewport) {
      viewport.addEventListener("scroll", handleScroll)
      return () => {
        viewport.removeEventListener("scroll", handleScroll)
      }
    }
  }, [featureIndex])

  const scrollToFeature = (index: number) => {
    const scrollAreaElement = document.getElementById("scroll")
    if (!scrollAreaElement) return

    const viewport = scrollAreaElement.querySelector(
      "[data-radix-scroll-area-viewport]"
    )
    if (viewport) {
      viewport.scrollTo({
        top: index * window.innerHeight + window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="sticky top-0 mx-auto flex h-[100vh] max-w-3xl flex-col tracking-tight lg:max-w-4xl">
      <div className="h-16 md:h-28"></div>
      <div className="relative mx-auto mb-4 w-20 rounded-full px-3 py-0.5 text-center text-sm leading-6 text-gray-600 ring-1 ring-indigo-600 hover:ring-gray-900/20 dark:text-slate-300 dark:ring-indigo-600">
        Features
      </div>
      <h1 className="text-center text-4xl font-black drop-shadow-2xl md:text-6xl">
        Your Solution for{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
          blazingly
        </span>{" "}
        fast Development
      </h1>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center border-b-2">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <div className="relative mx-auto -mb-[3px] mt-16 grid grid-cols-3 justify-center gap-8 border-b-[4px] border-b-neutral-500 transition-all md:grid-cols-6">
            {features.map((feature, index) => (
              <div
                className={cn(
                  "flex h-[64px] w-[83px] cursor-pointer flex-col items-center justify-center truncate pb-2 text-sm font-semibold text-gray-400 transition-all hover:text-neutral-800 dark:text-gray-500 hover:dark:text-neutral-300",
                  index === featureIndex && "text-black dark:text-white "
                )}
                onClick={() => scrollToFeature(index)}
                key={index}
              >
                {feature.icon}
                {feature.title}
              </div>
            ))}
            <div
              className={
                "absolute bottom-0 left-0 mx-auto mb-[-4px] h-[4px] max-w-[762px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
              }
              style={{
                width:
                  (scrollHeight /
                    (typeof window !== "undefined"
                      ? window
                      : { innerHeight: -1 }
                    ).innerHeight /
                    pages) *
                    100 +
                  "%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-1 flex-col items-center justify-between p-8 lg:flex-row">
        <div className="feature h-full lg:mr-16">
          <h1 className="max-w-md text-3xl font-extrabold">
            {features[featureIndex].longTitle}
          </h1>
          <p className="mt-4 max-w-md text-lg text-gray-500">
            {features[featureIndex].description}
          </p>
          <div className="mt-4 flex flex-row gap-8">
            <div className="">
              {features[featureIndex].secondaryTicks.map((tick, index) => (
                <div
                  key={index}
                  className="mt-4 flex items-center text-gray-500 dark:text-slate-300"
                >
                  <Check size={18} className="mr-2" />
                  <span>{tick}</span>
                </div>
              ))}
            </div>
            <div className="">
              {features[featureIndex].primaryTicks.map((tick, index) => (
                <div
                  key={index}
                  className="mt-4 flex items-center font-semibold text-indigo-500"
                >
                  <Check size={18} className="mr-2 text-indigo-600" />
                  <span>{tick}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 hidden h-full lg:mt-0 lg:block">
          <Image
            src={features[featureIndex].image || "/imgs/placeholder.webp"}
            alt="Feature Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Features
