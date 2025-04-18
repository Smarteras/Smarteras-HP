import Link from "next/link"
import Image from "next/image"
import { Code, BarChart3, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Smarteras_Logo.svg"
              alt="Smarteras Logo"
              width={192}
              height={192}
              className="w-48 h-48 object-contain"
              priority
            />
          </Link>
          <nav className="flex gap-6">
            <Link href="#service" className="text-sm font-medium hover:underline">
              Service
            </Link>
            <Link href="#member" className="text-sm font-medium hover:underline">
              Member
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-0 md:pt-16">
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] relative px-4 pt-16 md:pt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5] opacity-50"></div>
          <div className="container px-4 md:px-6 text-center flex flex-col justify-center min-h-[300px] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] h-[600px]">
              <Image
                src="/images/Smarteras_Icon.svg"
                alt="Smarteras Icon Background"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute left-[-1rem] right-[-1rem] bg-black/70 backdrop-blur-sm h-screen -translate-y-[calc(100vh-70%)] top-0"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-8 relative">
                <Image
                  src="/images/Smarteras_Logo_String.svg"
                  alt="Smarteras"
                  width={400}
                  height={100}
                  className="mx-auto"
                />
              </h1>
              <p className="text-xl text-white relative">世の中をもっとスマートに</p>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="md:inline block">Smarterasが</span>
              <span className="md:inline"> 取り組む課題</span>
            </h2>
            <p className="text-center text-lg text-gray-700 mb-16">私たちは日本の企業の以下のような課題に取り組んでいきます。</p>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                {/* システム・IT関連の課題 */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4 text-center pb-2 border-b border-gray-200">システム・IT</h3>
                  <div className="space-y-4">
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
                  </div>
                </div>

                {/* データ活用の課題 */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4 text-center pb-2 border-b border-gray-200">データ活用</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      <p className="text-gray-700 text-lg">データを使いこなせていない</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      <p className="text-gray-700 text-lg">データ分析のノウハウがない</p>
                    </div>
                  </div>
                </div>

                {/* 先端技術活用の課題 */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4 text-center pb-2 border-b border-gray-200">先端技術活用</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      <p className="text-gray-700 text-lg">生成AIの使い方がわからない</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      <p className="text-gray-700 text-lg">生成AIをうまく活用できない</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#3B4646] text-white p-8 rounded-lg">
                <p className="text-center text-lg leading-relaxed">
                  <span className="inline-block">私たちは、</span>
                  <span className="inline-block">「効率的なシステム開発」、</span>
                  <span className="inline-block">「高度なデータ分析」、</span>
                  <span className="inline-block">「生成AIの導入支援」</span>
                  <span className="inline-block">によって、</span>
                  <span className="inline-block">世の中をさらにスマートにし、</span>
                  <span className="inline-block">未来を照らします。</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200"></div>

        <section id="service" className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Service</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center md:justify-end order-1 md:order-none">
                    <div className="relative w-56 h-56">
                      <Image
                        src="/images/development.jpg"
                        alt="Development Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start md:pl-8 order-2 md:order-none">
                    <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold mb-4">
                      01
                    </div>
                    <h3 className="text-xl font-bold mb-4">システム開発</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      <span className="inline-block">最新の技術を活用して、</span>
                      <span className="inline-block">効率的なシステムを開発します。</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center md:justify-end order-1 md:order-none">
                    <div className="relative w-56 h-56">
                      <Image
                        src="/images/analytics.png"
                        alt="Analytics Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start md:pl-8 order-2 md:order-none">
                    <div className="w-16 h-16 rounded-full bg-[#FCD34D] flex items-center justify-center text-white font-bold mb-4">
                      02
                    </div>
                    <h3 className="text-xl font-bold mb-4">データ分析</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      <span className="inline-block">高度なデータ分析技術で、</span>
                      <span className="inline-block">お客様の経営課題を解決します。</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center md:justify-end order-1 md:order-none">
                    <div className="relative w-56 h-56">
                      <Image
                        src="/images/generativeAI.jpg"
                        alt="Generative AI Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start md:pl-8 order-2 md:order-none">
                    <div className="w-16 h-16 rounded-full bg-[#7DD3FC] flex items-center justify-center text-white font-bold mb-4">
                      03
                    </div>
                    <h3 className="text-xl font-bold mb-4">生成AI導入</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      <span className="inline-block">業務プロセスの効率化に向けて、</span>
                      <span className="inline-block">生成AIの活用を支援します。</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200"></div>

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
                  <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4">
                    <p className="font-medium text-gray-800">成長</p>
                  </div>
                  <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4">
                    <p className="font-medium text-gray-800">簡素化</p>
                  </div>
                  <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4">
                    <p className="font-medium text-gray-800">Data Utilization</p>
                  </div>
                  <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4">
                    <p className="font-medium text-gray-800">真摯</p>
                  </div>
                  <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4 md:col-span-1 col-span-2">
                    <p className="font-medium text-gray-800">普遍化</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="member" className="w-full py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Member</h2>
            <div className="max-w-4xl mx-auto space-y-16 px-2 md:px-8">
              {/* Member 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 md:pl-4">
                <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
                  <Image
                    src="/images/Matsuda.png"
                    alt="松田 光司"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">松田 光司​​​</h3>
                  <p className="text-gray-600 leading-relaxed">
                  <span className="inline-block">代表​取締役(CEO)</span><br/>
                  <span className="inline-block">大阪大学​大学院情報科学研究科専攻修了</span><br/>
                  <span className="inline-block">IT ​メガベンチャー ​データサイエンスティスト</span><br/>
                  <span className="inline-block">​【保有資格】</span><br/>
                  <span className="inline-block">- 応用技術者試験</span><br/>
                  <span className="inline-block">- データベーススペシャリスト​</span><br/>
                  <span className="inline-block">- 統計検定準1級</span><br/>
                  <span className="inline-block">【コメント】</span><br />
                  <span className="inline-block">ビジネスとデータサイエンスの架け橋になりたいと思っています。</span><br/>
                  <span className="inline-block">ITやデータの力を最大限に活かし、スマートな世界作りに貢献します。</span>
                  </p>
                </div>
              </div>

              {/* Member 2 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 md:pl-4">
                <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
                  <Image
                    src="/images/Nishino.png"
                    alt="Member 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">西野 祐希​​​​</h3>
                  <p className="text-gray-600 leading-relaxed">
                  <span className="inline-block">取締役(CTO)</span><br/>
                  <span className="inline-block">大阪大学​大学院情報科学研究科専攻修了</span><br/>
                  <span className="inline-block">大手IT企業 システムエンジニア​</span><br/> 
                  <span className="inline-block">​【保有資格】</span><br/>  
                  <span className="inline-block">- 応用技術者試験​</span><br/>
                  <span className="inline-block">- データベーススペシャリスト​</span><br/>
                  <span className="inline-block">- AWS Clertified Cloud Practitioner</span><br/>
                  <span className="inline-block">- 色彩検定2級​</span><br/>
                  <span className="inline-block">【コメント】</span><br />
                  <span className="inline-block">様々な社会の課題をITの力やデータの力で解決したいと思っています。</span>
                  <span className="inline-block">ワクワクする明日を作りたい。</span>
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
                  <span className="inline-block">「手作業・属人化された作業・</span>
                  <span className="inline-block">無駄な作業 が多い」</span><br />
                  <span className="inline-block">「データをうまく使いこなせない」</span><br />
                  <span className="inline-block">「生成AI興味あるけど、</span>
                  <span className="inline-block">何したらいいかわからない」</span><br />
                  <span className="inline-block">などのお悩みはありませんか？</span>
                </p>
                <p className="text-lg font-medium text-gray-900">
                  <span className="inline-block">まずは、無料でお気軽にご相談ください。</span>
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

