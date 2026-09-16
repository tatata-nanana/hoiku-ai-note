"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl space-y-5 px-4 py-8">
        {/* サイト内リンク */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link
            href="/column"
            className="text-slate-500 transition hover:text-sky-500"
          >
            製作者コラム
          </Link>

          <Link
            href="/about"
            className="text-slate-500 transition hover:text-sky-500"
          >
            このサイトについて
          </Link>

          <Link
            href="/contact"
            className="text-slate-500 transition hover:text-sky-500"
          >
            お問い合わせ
          </Link>

          <Link
            href="/privacy"
            className="text-slate-500 transition hover:text-sky-500"
          >
            プライバシーポリシー
          </Link>
        </div>

        {/* SNS */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a
            href="https://x.com/hoiku_ai_note"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-sky-500"
          >
            X
          </a>

          <a
            href="https://www.instagram.com/hoiku_ai_note"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-sky-500"
          >
            Instagram
          </a>

          <a
            href="https://note.com/hoiku_ai_note"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-sky-500"
          >
            note
          </a>
        </div>

        {/* コピーライト */}
        <div className="pt-2 text-center">
          <p className="text-sm font-bold tracking-wide text-slate-500">
            © 保育AIノート
          </p>
        </div>
      </div>
    </footer>
  );
}