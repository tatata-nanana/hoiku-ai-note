"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
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
                    className={`block px-4 py-3 text-sm transition ${
                      pathname === item.href
                        ? "bg-orange-50 text-orange-600 font-bold"
                        : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                    }`}
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
  );
}