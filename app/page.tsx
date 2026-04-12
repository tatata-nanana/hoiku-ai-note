"use client";

import Link from "next/link";
import { useState } from "react";

const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

const IconSpark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3L7.5 7.5l3.3-1.2L12 3z" />
    <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
    <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14z" />
  </svg>
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <IconSpark />
            </div>

            <div className="leading-none">
              <p className="text-[28px] font-bold tracking-tight text-slate-900">
                保育AIノート
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setOpen(false)}>
          <div
            className="absolute right-4 top-24 w-[260px] rounded-3xl border border-slate-200 bg-white p-3 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50"
              >
                ホーム
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50"
              >
                サイトについて
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50"
              >
                お問い合わせ
              </Link>

              <Link
                href="/privacy"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50"
              >
                プライバシーポリシー
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}