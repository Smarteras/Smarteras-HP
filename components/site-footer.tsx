import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink py-10 text-center text-white/40">
      <div className="container space-y-4">
        <Image
          src="/images/Smarteras_Logo.svg"
          alt="Smarteras"
          width={732}
          height={256}
          className="mx-auto h-6 w-auto opacity-60"
        />
        <p className="text-xs tracking-wide">© 2026 Smarteras Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
