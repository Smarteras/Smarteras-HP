import Link from "next/link"
import Image from "next/image"
import { Code, BarChart3, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/eyebrow"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const CHALLENGES = [
  {
    title: "システム・IT",
    items: ["無駄な作業が多い", "ITの導入ができない", "IT人材が足りない"],
  },
  {
    title: "データ活用",
    items: ["データを使いこなせていない", "データ分析のノウハウがない"],
  },
  {
    title: "先端技術活用",
    items: ["生成AIの使い方がわからない", "生成AIをうまく活用できない"],
  },
]

const SERVICES = [
  {
    index: "01",
    icon: Code,
    image: "/images/development.jpg",
    title: "システム開発",
    description: "最新の技術を活用して、効率的なシステムを開発します。",
  },
  {
    index: "02",
    icon: BarChart3,
    image: "/images/analytics.png",
    title: "データ分析",
    description: "高度なデータ分析技術で、お客様の経営課題を解決します。",
  },
  {
    index: "03",
    icon: Brain,
    image: "/images/generativeAI.jpg",
    title: "生成AI導入",
    description: "業務プロセスの効率化に向けて、生成AIの活用を支援します。",
  },
]

const VALUES = [
  { en: "Growth", ja: "成長", description: "自らと組織の限界を決めない" },
  { en: "Simplicity", ja: "簡素化", description: "複雑さを削ぎ落とし、本質を追求する" },
  { en: "Data-Driven", ja: "データ活用", description: "直感に頼らず、データで未来を証明する" },
  { en: "Integrity", ja: "真摯", description: "全てのステークホルダーに誠実に向き合う" },
  { en: "Universality", ja: "普遍化", description: "一過性ではなく、長く愛される価値を届ける" },
  { en: "Agility", ja: "俊敏", description: "考えながら動く。速さは誠実さの一形態である" },
]

const MEMBERS = [
  {
    image: "/images/Matsuda.png",
    name: "松田 光司",
    role: "代表取締役 (CEO)",
    lines: ["大阪大学大学院情報科学研究科専攻修了", "ITメガベンチャー データサイエンティスト"],
    certifications: ["応用技術者試験", "データベーススペシャリスト", "統計検定準1級"],
    comment:
      "ビジネスとデータサイエンスの架け橋となり、ITやデータの力をもっと多くの人の手に。誰もが恩恵を受けられる、スマートな世界を創りたい。",
  },
  {
    image: "/images/Nishino.png",
    name: "西野 祐希",
    role: "取締役 (CTO)",
    lines: ["大阪大学大学院情報科学研究科専攻修了", "大手IT企業 システムエンジニア"],
    certifications: ["応用技術者試験", "データベーススペシャリスト", "AWS Certified Cloud Practitioner", "AWS Certified AI Practitioner", "色彩検定1級"],
    comment: "ITやデータの力を最大限活用し、多くの社会課題を解決し、多くの人の笑顔づくりに貢献します。ワクワクする未来をつくる。",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink px-4">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
            <div className="relative w-[120%] max-w-[900px] aspect-[280/353]">
              <Image
                src="/images/Smarteras_Icon.svg"
                alt=""
                fill
                aria-hidden="true"
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="mb-8 font-montserrat text-[11px] md:text-xs tracking-[0.4em] uppercase text-brand">
              IT × Data × Generative AI
            </span>
            <Image
              src="/images/Smarteras_Logo_String.svg"
              alt="Smarteras"
              width={662}
              height={258}
              className="mb-8 h-auto w-56 md:w-80"
              priority
            />
            <div className="mb-8 h-px w-16 bg-white/25" />
            <p className="font-serif text-2xl md:text-4xl tracking-wide text-white/90">
              世の中をもっとスマートに
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/40">
            <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="h-8 w-px animate-pulse bg-white/30 motion-reduce:animate-none" />
          </div>
        </section>

        {/* Challenges */}
        <section className="w-full bg-[#FAFAF9] py-28 md:py-36">
          <div className="container">
            <div className="mb-16 text-center">
              <Eyebrow>Challenges</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5">
                Smarterasが取り組む課題
              </h2>
              <p className="text-ink/60 text-base md:text-lg">
                私たちは日本の企業の以下のような課題に取り組んでいきます。
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="mb-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-black/[0.06] md:grid-cols-3">
                {CHALLENGES.map((group) => (
                  <div key={group.title} className="bg-white p-8 md:p-10">
                    <h3 className="mb-6 border-b border-black/[0.06] pb-4 text-center text-base font-semibold tracking-wide text-ink">
                      {group.title}
                    </h3>
                    <ul className="space-y-4">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/60">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-deep" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-ink p-10 text-white md:p-12">
                <p className="text-center text-base md:text-lg font-light leading-loose">
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

        {/* Service */}
        <section id="service" className="w-full bg-white py-28 md:py-36">
          <div className="container">
            <div className="mb-20 text-center">
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">Service</h2>
            </div>

            <div className="mx-auto max-w-5xl divide-y divide-black/[0.06]">
              {SERVICES.map((service, i) => {
                const Icon = service.icon
                const reversed = i % 2 === 1
                return (
                  <div
                    key={service.index}
                    className="grid grid-cols-1 items-center gap-10 py-14 first:pt-0 last:pb-0 md:grid-cols-2 md:gap-16"
                  >
                    <div
                      className={`flex justify-center ${reversed ? "md:order-2 md:justify-start" : "md:justify-end"}`}
                    >
                      <div className="relative h-48 w-48 md:h-56 md:w-56">
                        <Image
                          src={service.image}
                          alt={`${service.title}のイメージ`}
                          fill
                          sizes="(min-width: 768px) 224px, 192px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div
                      className={`flex flex-col items-center text-center md:items-start md:text-left ${
                        reversed ? "md:order-1 md:items-end md:pr-6 md:text-right" : "md:pl-6"
                      }`}
                    >
                      <span className="mb-1 font-serif text-5xl leading-none text-ink/10">
                        {service.index}
                      </span>
                      <div className={`mb-3 flex items-center gap-2 ${reversed ? "md:flex-row-reverse" : ""}`}>
                        <Icon className="h-4 w-4 text-brand-deep" strokeWidth={1.5} />
                        <h3 className="text-xl font-semibold tracking-wide text-ink">{service.title}</h3>
                      </div>
                      <p className="text-ink/60 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="w-full bg-[#FAFAF9] py-28 md:py-36">
          <div className="container">
            <div className="mb-20 text-center">
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">About us</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-20">
              <div className="text-center">
                <span className="mb-4 inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-ink/40">
                  Mission
                </span>
                <p className="font-serif text-2xl md:text-3xl text-ink">世界をスマートに、すべての人へ。</p>
                <p className="text-pretty mx-auto mt-5 max-w-md text-sm leading-loose text-ink/60 md:text-base">
                  ITとAIが持つ力を、一部の人だけでなくあらゆる人・組織が自然に享受できる世の中をつくる。テクノロジーをシンプルに、使いやすく、意味のある形で届け続ける。
                </p>
                <div className="mx-auto mt-5 h-px w-10 bg-brand-deep" />
              </div>

              <div className="text-center">
                <span className="mb-4 inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-ink/40">
                  Vision
                </span>
                <p className="font-serif text-2xl md:text-3xl text-ink">最先端を、すべての人へつなぐ架け橋になる。</p>
                <p className="text-pretty mx-auto mt-5 max-w-md text-sm leading-loose text-ink/60 md:text-base">
                  最前線のテクノロジーを、業界・規模・知識に関わらずあらゆる人と組織が使いこなせる形で届ける。ITとビジネスの間に立ち、信頼で結ばれた架け橋として社会に根付く会社になる。
                </p>
                <div className="mx-auto mt-5 h-px w-10 bg-brand-deep" />
              </div>

              <div className="text-center">
                <span className="mb-8 inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-ink/40">
                  Value
                </span>
                <div className="grid gap-4 sm:grid-cols-2">
                  {VALUES.map((value) => (
                    <div
                      key={value.en}
                      className="rounded-2xl border border-black/10 px-6 py-5 text-left"
                    >
                      <p className="font-serif text-lg text-ink">
                        {value.en}
                        <span className="ml-2 text-xs font-montserrat tracking-wider text-ink/40">
                          {value.ja}
                        </span>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Member */}
        <section id="member" className="w-full bg-white py-28 md:py-36">
          <div className="container">
            <div className="mb-20 text-center">
              <Eyebrow>Team</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">Member</h2>
            </div>

            <div className="mx-auto max-w-4xl space-y-20 px-2 md:px-8">
              {MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14"
                >
                  <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full ring-1 ring-black/[0.06] md:h-44 md:w-44">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 768px) 176px, 144px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-1 font-serif text-2xl text-ink">{member.name}</h3>
                    <p className="mb-6 font-montserrat text-xs tracking-[0.2em] uppercase text-brand-deep">
                      {member.role}
                    </p>
                    <div className="space-y-1 text-[15px] leading-relaxed text-ink/60">
                      {member.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-5">
                      <p className="mb-1 font-montserrat text-[11px] tracking-[0.2em] uppercase text-ink/35">
                        Certifications
                      </p>
                      <p className="text-[15px] leading-relaxed text-ink/60">
                        {member.certifications.join(" ／ ")}
                      </p>
                    </div>
                    <div className="mt-5">
                      <p className="mb-1 font-montserrat text-[11px] tracking-[0.2em] uppercase text-ink/35">
                        Comment
                      </p>
                      <p className="text-[15px] leading-relaxed text-ink/60">{member.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full bg-[#FAFAF9] py-28 md:py-36">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Get in Touch</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10">Contact Us</h2>
              <div className="mb-8 space-y-2 text-base md:text-lg leading-relaxed text-ink/60">
                <p>「手作業・属人化された作業・無駄な作業が多い」</p>
                <p>「データをうまく使いこなせない」</p>
                <p>「生成AI興味あるけど、何したらいいかわからない」</p>
                <p>などのお悩みはありませんか？</p>
              </div>
              <p className="mb-10 font-medium text-ink">まずは、無料でお気軽にご相談ください。</p>
              <Button
                asChild
                className="rounded-none bg-ink px-10 py-6 text-sm tracking-[0.15em] text-white transition-colors hover:bg-brand-deep"
              >
                <Link href="/contact">お問い合わせはこちらへ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
