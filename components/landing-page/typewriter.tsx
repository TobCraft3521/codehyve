"use client"
import TypeWriter, { TypewriterClass } from "typewriter-effect"

const CustomTypeWriter = () => {
  const setupTypewriter = (typewriter: TypewriterClass) => {
    typewriter
      .changeDelay(40)
      .changeDeleteSpeed(20)

      .typeString(
        "through realtime collaboration <span class='font-black'>whiteboards</span>",
      )
      .pauseFor(1000)
      .deleteChars(34)
      .pauseFor(1000)
      .typeString(
        "realtime <span class='font-black'>chats</span> and <span class='font-black'>video conferencing</span>",
      )
      .pauseFor(1000)
      .deleteChars(37)
      .pauseFor(1000)
      .typeString(
        "<span class='font-black'>task management</span> and <span class='font-black'>project tracking</span>",
      )
      .pauseFor(1000)
      .deleteChars(36)
      .pauseFor(1000)
      .typeString(
        "<span class='font-black'>meeting tracking</span> for efficient organization",
      )
      .pauseFor(1000)
      .deleteChars(44)
      .pauseFor(1000)
      .typeString(
        "project <span class='font-black'>documentation</span> for clarity",
      )
      .pauseFor(1000)
      .deleteChars(33)
      .pauseFor(1000)
      .typeString("organization in <span class='font-black'>teams</span>")
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
