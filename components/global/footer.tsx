// components/Footer.jsx
import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-200 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className=" flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="mx-auto w-80 max-w-full flex-shrink-0 text-center md:mx-0 md:text-left">
            <Image
              src="/codehyve.svg"
              alt="codehyve logo"
              width={1709}
              height={512}
              className="w-36 dark:invert"
            />
            <p className="mt-4 text-sm">
              All you&apos;ll ever need to supercharge your team-collaboration.
            </p>
            <p className="mt-1 text-sm">Copyright &copy; 2024 CodeHyve</p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-24 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title text-base-content mb-3 text-sm font-semibold tracking-widest md:text-left">
                LINKS
              </div>
              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                <Link href="/about">About</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/affiliates">Affiliates</Link>
                <Link href="https://tobcraft.xyz">Tobcraft.xyz</Link>
                <Link href="/">Home</Link>
                <Link href="#features">Features</Link>
                <Link href="#testimonials">Testimonials</Link>
                <Link href="/dashboard">App</Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title text-base-content mb-3 text-sm font-semibold tracking-widest md:text-left">
                LEGAL
              </div>
              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                <Link href="/tos">Terms of services</Link>
                <Link href="/privacypolicy">Privacy policy</Link>
                <Link href="/licences">Licences</Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title text-base-content mb-3 text-sm font-semibold tracking-widest md:text-left">
                MORE
              </div>
              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                <Link href="/newsletter">Newsletter</Link>
                <Link href="/blog">Blog</Link>
                <Link href="https://tobcraft.xyz">Tobcraft.xyz</Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title text-base-content mb-3 text-sm font-semibold tracking-widest md:text-left">
                Contact
              </div>
              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                <Link href="/contact">Contact</Link>
                <Link href="/support">Support</Link>
                <Link href="/affiliates">Affiliates</Link>
                <Link href="https://tobcraft.xyz">Tobcraft.xyz</Link>
                <Link href="/discord">Discord</Link>
                <Link href="/twitter">X profile</Link>
                <Link href="/facebook">Facebook</Link>
                <Link href="/instagram">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
