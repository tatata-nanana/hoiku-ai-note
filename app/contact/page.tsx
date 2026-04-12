"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const IconSparkles = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

const menuItems = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "このサイトについて" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
              <IconSparkles />
            </div>
            <h1 className="text-xl font-bold">保育AIノート</h1>
          </Link>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-orange-200 hover:text-orange-600 transition"
              aria-label="メニューを開く"
            >
              <IconMenu />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 text-sm font-bold text-slate-700">
                  メニュー
                </div>
                <nav className="py-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h1 className="text-2xl font-bold text-slate-800">お問い合わせ</h1>
            <p className="mt-2 text-sm text-slate-500">
              ご質問やご意見がありましたら、下のボタンからご連絡ください。
            </p>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-slate-600">
              保育AIノートに関するご質問、ご感想、不具合のご連絡などを受け付けています。
            </p>

            <a
              href="mailto:hoikuainote@gmail.com?subject=保育AIノートについてのお問い合わせ"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition"
            >
              メールでお問い合わせする
            </a>

            <p className="text-xs text-slate-400">
              メールアプリが起動しない場合は、hoikuainote@gmail.com 宛に直接ご連絡ください。
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-slate-700">保育AIノート</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                更新情報や使い方、活用のヒントなどを公式SNSで発信しています。
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
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

            <div className="flex flex-wrap gap-3">
              <a
                href="https://x.com/hoiku_ai_note"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-orange-200 hover:text-orange-600 transition"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/hoiku_ai_note"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-orange-200 hover:text-orange-600 transition"
              >
                Instagram
              </a>
              <a
                href="https://note.com/hoiku_ai_note"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-orange-200 hover:text-orange-600 transition"
              >
                note
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
            © {new Date().getFullYear()} 保育AIノート
          </div>
        </div>
      </footer>
    </div>
  );
}