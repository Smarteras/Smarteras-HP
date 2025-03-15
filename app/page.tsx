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

        <section className="w-full py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Smarteras が取り組む課題</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 mb-16">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">無駄な作業が多い</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">ITの導入ができない</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">IT人材が足りない</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">データを使いこなせていない</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">データ分析のノウハウがない</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">生成AIの使い方がわからない</p>
                </div>
                <div className="flex items-center lg:col-start-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">生成AIをうまく活用しきれない</p>
                </div>
              </div>
              
              <div className="bg-[#3B4646] text-white p-8 rounded-lg">
                <p className="text-center text-lg leading-relaxed">
                  我々は、「効率的なシステム開発」、「高度なデータ分析」、<br />
                  「生成AIなどの最新技術の導入支援」によって、<br />
                  世の中をさらにスマートにしていき、未来を照らします。
                </p>
              </div>
            </div>
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
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Mission */}
              <div className="text-center">
                <h3 className="inline-block text-2xl font-bold px-8 py-2 bg-[#3B4646] text-white rounded-full mb-6">Mission</h3>
                <p className="text-2xl text-gray-800">世の中をもっとスマートに</p>
              </div>

              {/* Vision */}
              <div className="text-center">
                <h3 className="inline-block text-2xl font-bold px-8 py-2 bg-[#FCD34D] text-white rounded-full mb-6">Vision</h3>
                <p className="text-2xl text-gray-800">常に新しいことに挑戦し続ける</p>
              </div>

              {/* Value */}
              <div className="text-center">
                <h3 className="inline-block text-2xl font-bold px-8 py-2 bg-[#7DD3FC] text-white rounded-full mb-8">Value</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-800">成長</p>
                  </div>
                  <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-800">簡素化</p>
                  </div>
                  <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-800">Data Utilization</p>
                  </div>
                  <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-800">真摯</p>
                  </div>
                  <div className="p-4 border-2 border-gray-200 rounded-lg md:col-span-1 col-span-2">
                    <p className="font-medium text-gray-800">普遍化</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Member</h2>
            <div className="max-w-4xl mx-auto space-y-16 px-8 md:px-16">
              {/* Member 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:pl-12">
                <div className="w-48 h-48 relative flex-shrink-0">
                  <Image
                    src="/images/image_1.jpg"
                    alt="Member 1"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">松田光司​​​</h3>
                  <p className="text-gray-600 leading-relaxed">
                  代表​取締役(CEO)<br/>
                  大阪大学​大学院マルチメディア工学専攻修了<br/>
                  IT ​メガベンチャー ​データサイエンスティスト<br/>
                  ​= 保有資格 =<br/>
                  応用技術者試験<br/>
                  データベーススペシャリスト​<br/>
                  統計検定準1級
                  </p>
                </div>
              </div>

              {/* Member 2 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:pl-12">
                <div className="w-48 h-48 relative flex-shrink-0">
                  <Image
                    src="/images/image_2.jpg"
                    alt="Member 2"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">西野祐希​​​​</h3>
                  <p className="text-gray-600 leading-relaxed">
                  取締役(CTO)<br/>
                  大阪大学​大学院マルチメディア工学専攻修了<br/>
                  大手IT企業 システムエンジニア​<br/> 
                  ​= 保有資格 =<br/>  
                  応用技術者試験​<br/>
                  データベーススペシャリスト​<br/>
                  AWS Clertified Cloud Practitioner<br/>
                  色彩検定2級​<br/>
                  様々な社会の課題をITの力やデータの力で解決したいと思っています。
                  ワクワクする明日を作りたい。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  「手作業・属人化された作業・無駄な作業 が多い」<br />
                  「データをうまく使いこなせない」<br />
                  「生成AI興味あるけど、何したらいいかわからない」<br />
                  などのお悩みはありませんか？
                </p>
                <p className="text-lg font-medium text-gray-900">
                  まずは、無料でお気軽にご相談ください。
                </p>
              </div>
              <Button variant="secondary" className="bg-[#2F3437] text-white hover:bg-[#2F3437]/90 px-8 py-6 rounded">
                お問い合わせはこちらへ
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 bg-[#2F3437] text-white/60 text-sm text-center">
        <div className="container px-4 md:px-6">© 2025 Smarteras Inc. All rights reserved.</div>
      </footer>
    </div>
  )
}

