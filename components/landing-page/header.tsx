import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-7 flex flex-row items-center">
      <Image
        src="/codehyve.svg"
        alt="codehyve logo"
        width={1709}
        height={512}
        className="dark:invert w-36"
      />
      <div className="flex pl-12 md:pl-24 text-neutral-400 gap-4 md:gap-12 font-medium">
        <Link href="#pricing">Pricing</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#features" className="hidden sm:inline">
          Features
        </Link>
        <Link href="#about" className="hidden sm:inline">
          {" "}
          About
        </Link>
      </div>
    </div>
  )
}

export default Header
