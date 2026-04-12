"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link
            href="/about"
            className="text-slate-500 hover:text-orange-600 transition"
          >
            このサイトについて
          </Link>

          <Link
            href="/contact"
            className="text-slate-500 hover:text-orange-600 transition"
          >
            お問い合わせ
          </Link>

          <Link
            href="/privacy"
            className="text-slate-500 hover:text-orange-600 transition"
          >
            プライバシーポリシー
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a
            href="https://x.com/hoiku_ai_note"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-orange-600 transition"
          >
            X
          </a>

          <a
            href="https://www.instagram.com/hoiku_ai_note"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-orange-600 transition"
          >
            Instagram
          </a>

          <a
            href="https://note.com/hoiku_ai_note"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-orange-600 transition"
          >
            note
          </a>
        </div>

        <div className="pt-2 text-center">
          <p className="text-sm font-bold text-slate-500 tracking-wide">
            ©保育AIノート
          </p>
        </div>
      </div>
    </footer>
  );
}