import React from "react"
import GridBg from "./grid-bg"
import { Check } from "lucide-react"

const Pricing = () => {
  const freePerks = ["Basic access", "Up to 3 members", "1 Team"]

  const startUpPerks = [
    "Extended access",
    "Up to 15 members",
    "5 Teams",
    "Notifications",
  ]

  const smePerks = [
    "Advanced access",
    "Up to 100 members",
    "25 Teams",
    "More roles",
    "Notifications",
  ]

  const enterprisePerks = [
    "Full access to all features",
    "Up to 500 members",
    "100 Teams",
    "More roles",
    "Notifications",
    "Expandable on request",
  ]

  return (
    <div
      className="relative z-0 flex min-h-screen w-screen flex-col items-center justify-center bg-white py-16 text-gray-900 dark:bg-black dark:text-white xl:py-0"
      id="pricing"
      //   style={{
      //     backgroundImage: "url('/imgs/backgrounds/bg-gradient.png')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <GridBg direction="down" />
      <h2 className="mb-12 text-center text-4xl font-extrabold">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Free Card */}
        <div className="min-h-[430px] w-full min-w-[300px] rounded-2xl border border-gray-300 bg-white p-8 drop-shadow-2xl dark:border-gray-800 dark:bg-gray-950 md:w-1/5">
          <h3 className="text mb-4 inline-block rounded-full border border-gray-500 px-4 py-1 font-semibold">
            Hobby
          </h3>{" "}
          <p className="mb-6 ml-1 text-2xl font-bold">FREE</p>
          <button className="w-full rounded-md border border-indigo-600 px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-indigo-600 hover:text-white dark:text-white">
            Get Started
          </button>
          <ul className="mt-6">
            {freePerks.map((perk, index) => (
              <li key={index} className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-20 min-h-[430px] w-full min-w-[300px] rounded-2xl border-2 border-indigo-600 bg-white p-8 drop-shadow-2xl dark:bg-gray-950 md:w-1/5">
          <div className="absolute top-0 hidden h-32 w-full rounded-full bg-purple-900 blur-[120px] dark:block" />
          <div className="flex flex-row justify-between">
            <h3 className="text mb-4 inline-block rounded-full border border-gray-500 px-4 py-1 font-semibold">
              Start Up
            </h3>
            <div className="flex h-full justify-center text-sm font-semibold text-indigo-600">
              Popular
            </div>
          </div>

          <p className="mb-6 ml-1 text-2xl font-bold">
            $149 <small className="text-md text-gray-400">/month</small>
          </p>
          <button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-semibold text-white transition-all hover:from-purple-600 hover:to-[#df00be]">
            Upgrade Now
          </button>
          <ul className="mt-6">
            {startUpPerks.map((perk, index) => (
              <li key={index} className="mb-2 flex items-center">
                <Check className="mr-2 h-6 w-6 text-sky-500" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-[430px] w-full min-w-[300px] rounded-2xl border border-gray-300 bg-white p-8 drop-shadow-2xl dark:border-gray-800 dark:bg-gray-950 md:w-1/5">
          <h3 className="text mb-4 inline-block rounded-full border border-gray-500 px-4 py-1 font-semibold">
            SME
          </h3>{" "}
          <p className="mb-6 ml-1 text-2xl font-bold">
            $799 <small className="text-md text-gray-400">/month</small>
          </p>{" "}
          <button className="w-full rounded-md border border-indigo-600 px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-indigo-600 hover:text-white dark:text-white">
            Buy Plan
          </button>
          <ul className="mt-6">
            {smePerks.map((perk, index) => (
              <li key={index} className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-[430px] w-full min-w-[300px] rounded-2xl border border-gray-300 bg-white p-8 drop-shadow-2xl dark:border-gray-800 dark:bg-gray-950 md:w-1/5">
          <h3 className="text mb-4 inline-block rounded-full border border-gray-500 px-4 py-1 font-semibold">
            Enterprise
          </h3>{" "}
          <p className="mb-6 ml-1 text-2xl font-bold">
            $3299 <small className="text-md text-gray-400">/month</small>
          </p>{" "}
          <button className="w-full rounded-md border border-indigo-600 px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-indigo-600 hover:text-white dark:text-white">
            Buy Plan
          </button>
          <ul className="mt-6">
            {enterprisePerks.map((perk, index) => (
              <li key={index} className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
