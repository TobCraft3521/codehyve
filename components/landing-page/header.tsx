import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../global/mode-toggle"

const Header = () => {
  return (
    <div className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-7">
        <div className="flex flex-row items-center">
          <Image
            src="/codehyve.svg"
            alt="codehyve logo"
            width={1709}
            height={512}
            className="w-36 dark:invert"
          />
          <div className="fontmedium flex gap-4 pl-12 text-neutral-400 md:gap-12 md:pl-24">
            <Link href="#pricing" className="hidden hover:underline sm:inline">
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="hidden hover:underline sm:inline"
            >
              Testimonials
            </Link>
            <Link href="#features" className="hidden hover:underline lg:inline">
              Features
            </Link>
            <Link href="#about" className="hidden hover:underline lg:inline">
              About
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 md:gap-8">
          <Link
            href="/sign-up"
            className="rounded-md bg-indigo-600 px-2 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:px-3.5 md:py-2 md:text-sm"
          >
            Get started
          </Link>
          <div className="text-xs font-medium md:text-sm">Login</div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
