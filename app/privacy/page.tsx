"use client";

import Link from "next/link";
import type { Metadata } from "next";
import React, { useEffect, useRef, useState } from "react";

const metadataValue: Metadata = {
  title: "プライバシーポリシー | 保育AIノート",
  description:
    "保育AIノートのプライバシーポリシー。お問い合わせ時に取得する情報の取り扱いについてご案内します。",
};

export const metadata = metadataValue;

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

export default function PrivacyPage() {
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
              aria-expanded={menuOpen}
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

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h1 className="text-2xl font-bold text-slate-800">
              プライバシーポリシー
            </h1>
          </div>

          <div className="p-6 space-y-6 text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                1. 個人情報の利用目的
              </h2>
              <p>
                保育AIノートでは、お問い合わせへの対応や必要なご連絡のために、
                お名前、メールアドレス、お問い合わせ内容などの情報を利用する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                2. 取得する情報
              </h2>
              <p>
                お問い合わせページの利用時に、お名前、メールアドレス、
                お問い合わせ内容などの情報を取得する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                3. 第三者提供について
              </h2>
              <p>
                法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                4. 安全管理について
              </h2>
              <p>
                取得した情報については、不正アクセス、漏えい、改ざんなどを防ぐため、
                適切な管理に努めます。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                5. 本ポリシーの変更
              </h2>
              <p>
                本ポリシーの内容は、必要に応じて見直し、予告なく変更する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                6. お問い合わせ
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-slate-700">保育AIノート</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                更新情報や使い方、活用のヒントなどを公式SNSで発信しています。
              </p>
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