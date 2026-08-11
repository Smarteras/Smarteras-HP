"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const FORM_NAME = "contact"

const schema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().optional(),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式が正しくありません"),
  message: z.string().min(10, "お問い合わせ内容を10文字以上で入力してください"),
  // ハニーポット。人間には見えないので、値が入っていればbotとみなす
  "bot-field": z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const fieldClassName =
  "rounded-none border-x-0 border-t-0 border-b border-black/15 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-brand-deep transition-colors"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", email: "", message: "", "bot-field": "" },
  })

  async function onSubmit(values: FormValues) {
    setStatus("idle")

    // Netlify Formsはローカルでは送信を受け付けられないため、開発時はモックする
    if (process.env.NODE_ENV === "development") {
      console.log("[contact form] dev mock submit:", values)
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus("success")
      form.reset()
      return
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": FORM_NAME, ...values } as Record<string, string>),
      })

      if (!response.ok) throw new Error(`送信に失敗しました (${response.status})`)

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-md border border-black/10 bg-white px-8 py-12 text-center">
        <p className="font-serif text-xl text-ink">お問い合わせありがとうございます</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/60">
          内容を確認のうえ、担当者より数営業日以内にご返信いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs tracking-[0.15em] text-ink/40 underline underline-offset-4 transition-colors hover:text-brand-deep"
        >
          続けて問い合わせる
        </button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-xl space-y-8 text-left"
        noValidate
      >
        {/* ハニーポット: 実ユーザーには見えない */}
        <div className="hidden" aria-hidden="true">
          <label>
            Do not fill this out
            <input type="text" tabIndex={-1} autoComplete="off" {...form.register("bot-field")} />
          </label>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-montserrat text-xs tracking-[0.2em] uppercase text-ink/40">
                お名前 <span className="text-brand-deep">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className={fieldClassName} autoComplete="name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-montserrat text-xs tracking-[0.2em] uppercase text-ink/40">
                会社名
              </FormLabel>
              <FormControl>
                <Input {...field} className={fieldClassName} autoComplete="organization" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-montserrat text-xs tracking-[0.2em] uppercase text-ink/40">
                メールアドレス <span className="text-brand-deep">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="email" className={fieldClassName} autoComplete="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-montserrat text-xs tracking-[0.2em] uppercase text-ink/40">
                お問い合わせ内容 <span className="text-brand-deep">*</span>
              </FormLabel>
              <FormControl>
                <Textarea {...field} rows={6} className={`${fieldClassName} resize-none`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === "error" && (
          <p className="text-sm text-red-600">
            送信に失敗しました。時間をおいて再度お試しください。
          </p>
        )}

        <div className="pt-4 text-center">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="rounded-none bg-ink px-10 py-6 text-sm tracking-[0.15em] text-white transition-colors hover:bg-brand-deep disabled:opacity-50"
          >
            {form.formState.isSubmitting ? "送信中..." : "この内容で送信する"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
