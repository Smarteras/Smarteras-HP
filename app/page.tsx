import Link from "next/link"
import Image from "next/image"
import { Code, BarChart3, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/Smarteras_Logo.svg"
            alt="Smarteras Logo"
            width={300}
            height={75}
            className="h-16 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href="#purpose">
            Purpose
          </Link>
          <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href="#service">
            Service
          </Link>
          <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href="#about">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 bg-[#3B4646] text-white">
          <div className="container px-4 md:px-6 text-center flex flex-col justify-center min-h-[300px]">
            <h1 className="text-5xl font-bold mb-8">
              <Image
                src="/images/Smarteras_Logo_String.svg"
                alt="Smarteras"
                width={400}
                height={100}
                className="mx-auto"
              />
            </h1>
            <p className="text-xl">世の中をもっとスマートに</p>
          </div>
        </section>

        <section id="service" className="w-full py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Service</h2>
            <div className="max-w-3xl mx-auto space-y-24">
              <div className="flex justify-center items-start gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                    01
                  </div>
                  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">システム開発</h3>
                  <p className="text-gray-600">
                    最新の技術を活用して、
                    <br />
                    お客様のニーズに合わせて、
                    <br />
                    効率的にシステムを
                    <br />
                    開発します。
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-start gap-8">
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#FCD34D] flex items-center justify-center text-white font-bold">
                    02
                  </div>
                  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">データ分析</h3>
                  <p className="text-gray-600 leading-relaxed">
                    高度なデータ分析技術と<br />
                    機械学習技術により、<br />
                    お客様の経営課題を<br />
                    解決します。
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-start gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#7DD3FC] flex items-center justify-center text-white font-bold">
                    03
                  </div>
                  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
                    <Brain className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">生成AI導入</h3>
                  <p className="text-gray-600">
                    お客様の業務プロセスを<br />
                    より効率的にするために、<br />
                    生成AIを有効活用できるよう<br />
                    に支援します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">About us</h2>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-400 flex items-center justify-center text-white text-4xl">TBD</div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <Button variant="secondary" className="bg-[#2F3437] text-white hover:bg-[#2F3437]/90 px-8 py-6 rounded">
              お問い合わせはこちらへ
            </Button>
          </div>
        </section>
      </main>
      <footer className="py-6 bg-[#2F3437] text-white/60 text-sm text-center">
        <div className="container px-4 md:px-6">© 2025 Smarteras Inc. All rights reserved.</div>
      </footer>
    </div>
  )
}

