import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from "next/font/google";
import { Noto_Serif_JP } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${montserrat.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
