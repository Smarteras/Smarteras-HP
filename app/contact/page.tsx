import type { Metadata } from "next"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { Eyebrow } from "@/components/eyebrow"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "お問い合わせ | Smarteras",
  description:
    "システム開発・データ分析・生成AI導入に関するご相談を承っています。まずは無料でお気軽にご相談ください。",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ヘッダーが fixed のため、その高さ分だけ余白を確保する */}
      <main className="flex-1 bg-[#FAFAF9] pt-16 sm:pt-20 md:pt-24">
        <section className="w-full py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Get in Touch</Eyebrow>
              <h1 className="mb-6 font-serif text-3xl md:text-4xl text-ink">Contact Us</h1>
              <p className="mb-14 text-ink/60">
                以下のフォームよりお気軽にご相談ください。ご相談は無料です。
              </p>
            </div>

            <ContactForm />

            <div className="mx-auto mt-16 max-w-xl border-t border-black/10 pt-8">
              <p className="text-center text-xs leading-loose text-ink/40">
                ご入力いただいた個人情報は、お問い合わせへの回答のみに利用します。
                <br />
                内容を確認のうえ、数営業日以内に担当者よりご返信いたします。
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="font-montserrat text-xs tracking-[0.2em] uppercase text-ink/40 underline underline-offset-4 transition-colors hover:text-brand-deep"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
