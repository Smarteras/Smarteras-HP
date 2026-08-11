import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

// トップページ以外からも辿れるよう、アンカーは "/" 起点で持つ
const NAV_LINKS = [
  { href: "/#service", label: "Service" },
  { href: "/#about", label: "About" },
  { href: "/#member", label: "Member" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.06]">
      <div className="container flex h-16 sm:h-20 md:h-24 items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/Smarteras_Logo.svg"
            alt="Smarteras"
            width={732}
            height={256}
            className="h-9 sm:h-11 md:h-14 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-5 md:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-block font-montserrat text-[10px] sm:text-[13px] font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-deep transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-none bg-ink px-5 text-xs tracking-[0.15em] text-white hover:bg-brand-deep"
          >
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
