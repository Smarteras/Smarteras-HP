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
  title: 'Smarteras',
  description: 'SmarterasはITやデータの活用を通じて、スマートな世界を作り、未来を照らします。',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/images/Smarteras_Icon.svg' },
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32' },
      { url: '/images/favicons/favicon.ico' }
    ],
    apple: [
      { url: '/images/favicons/apple-touch-icon.png', sizes: '180x180' }
    ]
  }
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
