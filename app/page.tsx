"use client";

import React, { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const IconBaby = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12h.01" />
    <path d="M15 12h.01" />
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    <path d="M12 18v3" />
    <path d="M11 21h2" />
  </svg>
);

const IconCalendar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const IconFileText = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const IconCheckCircle = () => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconClipboard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
);

const IconTrash = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const IconLoader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <line x1="12" x2="12" y1="2" y2="6" />
    <line x1="12" x2="12" y1="18" y2="22" />
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
    <line x1="2" x2="6" y1="12" y2="12" />
    <line x1="18" x2="22" y1="12" y2="12" />
    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
  </svg>
);

const sectionButtons = [
  { key: "activity", label: "活動文", icon: "📝" },
  { key: "goal", label: "ねらい", icon: "🎯" },
  { key: "evaluation", label: "評価・反省", icon: "⭐" },
  { key: "newsletter", label: "おたより用", icon: "✉️" },
  { key: "fiveAreas", label: "5領域", icon: "🌐" },
  { key: "care", label: "養護", icon: "🛡️" },
  { key: "support", label: "援助・配慮", icon: "🤝" },
  { key: "environment", label: "環境構成", icon: "🧱" },
] as const;

type SectionKey = (typeof sectionButtons)[number]["key"];

export default function App() {
  const [age, setAge] = useState("5歳児");
  const [month, setMonth] = useState("3月");
  const [content, setContent] = useState("");
  const [behavior, setBehavior] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState("コピー");

  const addSection = async (section: SectionKey, label: string) => {
    if (!content.trim()) {
      alert("「内容」を入力してください。");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          month,
          content,
          behavior,
          section,
          label,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "生成に失敗しました。");
        return;
      }

      const block = `【${label}】\n${data.result}`;
      setResult((prev) => (prev ? `${prev}\n\n${block}` : block));
    } catch (error) {
      console.error(error);
      alert("生成に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const copyResult = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopyStatus("完了！");
      setTimeout(() => setCopyStatus("コピー"), 2000);
    } catch (error) {
      console.error(error);
      alert("コピーに失敗しました。");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <span className="text-slate-500">
              <IconFileText />
            </span>
            <h2 className="font-bold text-slate-700">基本情報</h2>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 ml-1">
                  <IconBaby /> 年齢
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  {["0歳児", "1歳児", "2歳児", "3歳児", "4歳児", "5歳児"].map(
                    (v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 ml-1">
                  <IconCalendar /> 月
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  {Array.from({ length: 12 }, (_, i) => `${i + 1}月`).map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-500 ml-1">
                内容
              </label>
              <textarea
                placeholder="例：園庭でしっぽ取りをした。"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 min-h-[80px] outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-500 ml-1">
                子どもの様子
              </label>
              <textarea
                placeholder="例：自分たちでルールを決めていた。"
                value={behavior}
                onChange={(e) => setBehavior(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 min-h-[80px] outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-700">追加する項目</h2>
            {loading && (
              <div className="flex items-center gap-1.5 text-orange-600 text-xs font-bold animate-pulse">
                <IconLoader /> 生成中...
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sectionButtons.map((btn) => (
              <button
                key={btn.key}
                type="button"
                onClick={() => addSection(btn.key, btn.label)}
                disabled={loading}
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-200 bg-white hover:bg-orange-50 hover:border-orange-200 transition-all gap-1 active:scale-95 disabled:opacity-40"
              >
                <span className="text-xl">{btn.icon}</span>
                <span className="text-[13px] font-bold text-slate-600">
                  {btn.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-600 font-bold">
              <IconCheckCircle /> 記録ノート
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyResult}
                disabled={!result}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-300"
              >
                <IconClipboard /> {copyStatus}
              </button>

              <button
                type="button"
                onClick={() => setResult("")}
                disabled={!result}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-600 disabled:opacity-30"
              >
                <IconTrash /> クリア
              </button>
            </div>
          </div>

          <div className="p-6 bg-slate-50/30">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 min-h-[250px] shadow-inner text-sm leading-relaxed whitespace-pre-wrap text-slate-700">
              {result || (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic py-12">
                  項目を選択して文章を作成してください
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <span className="text-slate-500">📱</span>
            <h2 className="font-bold text-slate-700">公式SNS</h2>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-slate-600">
              保育AIノートの更新情報や使い方、活用例などをSNSで発信しています。
              新機能のお知らせや、保育書類作成のヒントも順次投稿していきます。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://x.com/hoiku_ai_note"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 p-4 hover:border-orange-200 hover:bg-orange-50 transition"
              >
                <div className="text-lg font-bold text-slate-700">X</div>
                <p className="mt-1 text-sm text-slate-500">
                  更新情報や気づき、活用例を気軽に発信
                </p>
              </a>

              <a
                href="https://www.instagram.com/hoiku_ai_note"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 p-4 hover:border-orange-200 hover:bg-orange-50 transition"
              >
                <div className="text-lg font-bold text-slate-700">Instagram</div>
                <p className="mt-1 text-sm text-slate-500">
                  サービス紹介や使い方を画像でわかりやすく紹介
                </p>
              </a>

              <a
                href="https://note.com/hoiku_ai_note"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 p-4 hover:border-orange-200 hover:bg-orange-50 transition"
              >
                <div className="text-lg font-bold text-slate-700">note</div>
                <p className="mt-1 text-sm text-slate-500">
                  作った理由や活用のコツを詳しく発信
                </p>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              最新情報は各SNSで発信中です。ぜひフォローしてください。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}