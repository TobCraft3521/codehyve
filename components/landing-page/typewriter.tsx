"use client"
import TypeWriter, { TypewriterClass } from "typewriter-effect"

const CustomTypeWriter = () => {
  const setupTypewriter = (typewriter: TypewriterClass) => {
    typewriter
      .changeDelay(40)
      .changeDeleteSpeed(20)

      .typeString(
        "through Realtime Collaboration <span class='font-black'>Whiteboards</span>",
      )
      .pauseFor(1000)
      .deleteChars(34)
      .pauseFor(1000)
      .typeString(
        "Realtime <span class='font-black'>Chats</span> and <span class='font-black'>Video Conferencing</span>",
      )
      .pauseFor(1000)
      .deleteChars(37)
      .pauseFor(1000)
      .typeString(
        "<span class='font-black'>Task Management</span> and <span class='font-black'>Project Tracking</span>",
      )
      .pauseFor(1000)
      .deleteChars(36)
      .pauseFor(1000)
      .typeString(
        "<span class='font-black'>Meeting tracking</span> for efficient organization",
      )
      .pauseFor(1000)
      .deleteChars(44)
      .typeString(
        "Project <span class='font-black'>Documentation</span> for clarity",
      )
      .pauseFor(1000)
      .deleteChars(33)
      .pauseFor(1000)
      .typeString("Organization in <span class='font-black'>Teams</span>")
      .pauseFor(1000)
      .deleteAll()

      .start()
  }
  return (
    <div className="">
      <div className="inline-block">
        <TypeWriter
          onInit={(typewriter) => setupTypewriter(typewriter)}
          options={{ loop: true }}
        />
      </div>
    </div>
  )
}

export default CustomTypeWriter
