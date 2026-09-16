"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

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

const IconArrow = () => (
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
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const sectionButtons = [
  { key: "activity", label: "活動文" },
  { key: "goal", label: "ねらい" },
  { key: "evaluation", label: "評価・反省" },
  { key: "newsletter", label: "おたより用" },
  { key: "fiveAreas", label: "5領域" },
  { key: "care", label: "養護" },
  { key: "support", label: "援助・配慮" },
  { key: "environment", label: "環境構成" },
] as const;

const columns = [
  {
    href: "/column/why-i-made-hoiku-ai-note",
    date: "2026.08.31",
    title: "保育AIノートを作った理由",
    description:
      "8年間の保育士経験を通して感じた、書類作成の負担とサービスを作ったきっかけについて。",
  },
  {
    href: "/column/ai-and-childcare",
    date: "2026.08.31",
    title: "保育の書類作成にAIは使えるのか",
    description:
      "AIに任せられることと、保育者自身が大切にしたいことについて考えます。",
  },
  {
    href: "/column/improving-hoiku-ai-note",
    date: "2026.08.31",
    title: "保育AIノートをもっと使いやすくするために",
    description:
      "サービスを作って終わりにせず、これから改善していきたいことについて。",
  },
];

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

      setTimeout(() => {
        setCopyStatus("コピー");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("コピーに失敗しました。");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      {/* ファーストビュー */}
      <section className="bg-[#a9ddf5]">
        {/* PC */}
        <div className="hidden lg:block">
          <div className="mx-auto grid h-[calc(100vh-88px)] min-h-[620px] max-h-[820px] max-w-[1240px] grid-cols-[1.05fr_0.95fr] items-center gap-10 px-12 xl:px-16">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-[clamp(48px,4.4vw,72px)] font-black leading-[1.08] tracking-[-0.04em] text-black">
                書類制作の負担を、
                <br />
                もっと少なく。
              </h1>

              <p className="mt-8 text-[clamp(16px,1.2vw,20px)] font-medium leading-[1.75] text-black">
                年齢・月・活動内容・子どもの様子を入力するだけ。
                <br />
                保育に必要な書類の文章づくりをAIがサポートします。
              </p>

              <div className="mt-10">
                <a
                  href="#generator"
                  className="inline-flex min-w-[240px] items-center justify-center rounded-[14px] bg-white px-9 py-5 text-lg font-medium text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  文章を作成する
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 text-black">
                <a
                  href="https://www.instagram.com/hoiku_ai_note"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition hover:opacity-60"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <a
                  href="https://x.com/hoiku_ai_note"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="transition hover:opacity-60"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>

                <a
                  href="https://note.com/hoiku_ai_note"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="note"
                  className="flex h-8 items-center text-[20px] font-bold tracking-[-0.08em] text-black transition hover:opacity-60"
                >
                  note
                </a>
              </div>
            </div>

            <div className="flex h-full items-center justify-end overflow-hidden">
              <Image
                src="/hero-phone-transparent.png"
                alt="保育AIノートの入力画面"
                width={900}
                height={1600}
                priority
                className="h-[88%] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* スマホ・タブレット */}
        <div className="mx-auto flex min-h-[680px] max-w-2xl flex-col justify-center px-6 py-14 sm:px-10 lg:hidden">
          <h1 className="text-left text-[38px] font-black leading-[1.08] tracking-[-0.04em] text-black sm:text-[50px]">
            書類制作の負担を、
            <br />
            もっと少なく。
          </h1>

          <p className="mt-8 text-left text-[15px] font-medium leading-[1.8] text-black sm:text-[17px]">
            年齢・月・活動内容・子どもの様子を入力するだけ。
            <br />
            保育に必要な書類の文章づくりをAIがサポートします。
            <br />
            毎日の書類作成を、もっとスムーズに。
          </p>

          <div className="mt-10">
            <a
              href="#generator"
              className="inline-flex min-h-[58px] min-w-[220px] items-center justify-center rounded-[14px] bg-white px-7 text-base font-medium text-black shadow-sm"
            >
              文章を作成する
            </a>
          </div>

          <div className="mt-12 flex items-center gap-7 text-black">
            <a
              href="https://www.instagram.com/hoiku_ai_note"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://x.com/hoiku_ai_note"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>

            <a
              href="https://note.com/hoiku_ai_note"
              target="_blank"
              rel="noreferrer"
              aria-label="note"
              className="text-[18px] font-bold tracking-[-0.08em]"
            >
              note
            </a>
          </div>
        </div>
      </section>

      {/* サービスについて */}
      <section className="border-y border-sky-100 bg-sky-50/60 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold leading-[1.5] tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              保育の書類作成を、もっとスムーズに。
            </h2>

            <div className="mx-auto mt-6 max-w-3xl space-y-5 text-[15px] leading-[1.9] text-slate-600 sm:mt-8 sm:text-base sm:leading-8">
              <p>
                保育AIノートは、保育士の書類作成をサポートするサービスです。
                <br className="hidden sm:block" />
                年齢や月、活動内容、子どもの様子を入力すると、その内容をもとに、
                <br className="hidden lg:block" />
                ねらいや評価・反省、援助・配慮など、保育に必要な文章を作成できます。
              </p>

              <p>
                「何を書けばいいか分からない」というときだけでなく、
                <br className="hidden sm:block" />
                伝えたい内容は決まっていても、文章としてまとめるのに時間がかかるときにも活用できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方 */}
      <section
        id="howto"
        className="border-b border-slate-200 bg-[#fffdfb] py-16 sm:py-18 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-medium tracking-[0.08em] text-sky-500">
            
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              使い方
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.8] text-slate-600 sm:text-base sm:leading-7">
              必要な情報を入力して、作りたい文章を選ぶだけ。
              <br className="hidden sm:block" />
              初めてでも迷わず使えるシンプルな設計です。
            </p>
          </div>

          {/* PC */}
          <div className="mt-10 hidden space-y-5 lg:block">
            {/* 01 */}
            <div className="relative flex min-h-[190px] items-center overflow-hidden rounded-[26px] border border-rose-100 bg-rose-50/70 px-8 py-7">
              <div className="flex items-start gap-7">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-200 text-2xl font-semibold text-white">
                  01
                </span>
                <div className="relative z-10 pt-1">
                  <h3 className="text-2xl font-semibold text-slate-950">年齢と月を選ぶ</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">クラスの年齢と、作成したい月を選択します。</p>
                </div>
              </div>
              <Image src="/howto-step01.png" alt="" width={180} height={180} className="pointer-events-none absolute bottom-0 right-10 h-auto w-[150px] object-contain" />
            </div>

            {/* 02 */}
            <div className="relative flex min-h-[190px] items-center overflow-hidden rounded-[26px] border border-emerald-100 bg-emerald-50/70 px-8 py-7">
              <div className="flex items-start gap-7">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-2xl font-semibold text-white">
                  02
                </span>
                <div className="relative z-10 pt-1">
                  <h3 className="text-2xl font-semibold text-slate-950">内容を入力する</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">その月の活動内容と、子どもの様子を入力します。<br />短い文章でも大丈夫です。</p>
                </div>
              </div>
              <Image src="/howto-step02.png" alt="" width={180} height={180} className="pointer-events-none absolute bottom-0 right-10 h-auto w-[160px] object-contain" />
            </div>

            {/* 03 */}
            <div className="relative flex min-h-[190px] items-center overflow-hidden rounded-[26px] border border-violet-100 bg-violet-50/70 px-8 py-7">
              <div className="flex items-start gap-7">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-violet-300 text-2xl font-semibold text-white">03</span>
                <div className="relative z-10 pt-1">
                  <h3 className="text-2xl font-semibold text-slate-950">作りたい文章を選ぶ</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">ねらいや評価・反省など、必要な項目を選ぶと、<br />入力内容に合わせた文章が作成されます。</p>
                </div>
              </div>
              <img src="/howto-step03-new.png" alt="" className="pointer-events-none absolute bottom-0 right-10 h-auto w-[160px] object-contain" />
            </div>
          </div>

          {/* スマホ・タブレット */}
          <div className="mt-10 space-y-5 lg:hidden">
            {[
              { number: "01", title: "年齢と月を選ぶ", text: "クラスの年齢と、作成したい月を選択します。", box: "border-rose-100 bg-rose-50/70", numberColor: "bg-rose-200", image: "/howto-step01.png" },
              { number: "02", title: "内容を入力する", text: "その月の活動内容と、子どもの様子を入力します。短い文章でも大丈夫です。", box: "border-emerald-100 bg-emerald-50/70", numberColor: "bg-emerald-300", image: "/howto-step02.png" },
              { number: "03", title: "作りたい文章を選ぶ", text: "ねらいや評価・反省など、必要な項目を選ぶと、入力内容に合わせた文章が作成されます。", box: "border-violet-100 bg-violet-50/70", numberColor: "bg-violet-300", image: "/howto-step03-new.png" },
            ].map((step) => (
              <div key={step.number} className={`relative min-h-[175px] overflow-hidden rounded-[24px] border px-5 py-5 sm:px-6 ${step.box}`}>
                <div className="flex items-start gap-4 pr-24 sm:pr-28">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white ${step.numberColor}`}>{step.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{step.text}</p>
                  </div>
                </div>
                {step.number === "03" ? (
                  <img src={step.image} alt="" className="pointer-events-none absolute bottom-0 right-3 h-auto w-[96px] object-contain sm:right-5 sm:w-[110px]" />
                ) : (
                  <Image src={step.image} alt="" width={120} height={120} className="pointer-events-none absolute bottom-0 right-3 h-auto w-[96px] object-contain sm:right-5 sm:w-[110px]" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI生成 */}
      <section id="generator" className="border-b border-slate-200 bg-slate-100/70 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="mt-3 text-2xl font-medium text-slate-950 sm:text-3xl">
              保育の文章を作成する
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              活動内容を入力し、必要な文章を選択してください。
              文章は何度でも追加できます。
            </p>
          </div>

          <div className="space-y-6">
            {/* 入力 */}
            <section className="rounded-3xl border border-slate-300 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">
                  <IconFileText />
                </span>

                <h3 className="text-lg font-medium text-slate-900">
                  活動内容と様子
                </h3>
              </div>

              <div className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <IconBaby />
                      年齢
                    </label>

                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base outline-none transition focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-500/10"
                    >
                      {[
                        "0歳児",
                        "1歳児",
                        "2歳児",
                        "3歳児",
                        "4歳児",
                        "5歳児",
                      ].map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <IconCalendar />
                      月
                    </label>

                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base outline-none transition focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-500/10"
                    >
                      {Array.from(
                        { length: 12 },
                        (_, i) => `${i + 1}月`
                      ).map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500">
                    活動内容
                  </label>

                  <textarea
                    placeholder="例：園庭でしっぽ取りをした。"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[110px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base outline-none transition placeholder:text-slate-300 focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-500/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500">
                    子どもの様子
                  </label>

                  <textarea
                    placeholder="例：友だちと声を掛け合いながら楽しんでいた。"
                    value={behavior}
                    onChange={(e) => setBehavior(e.target.value)}
                    className="min-h-[110px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base outline-none transition placeholder:text-slate-300 focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-500/10"
                  />
                </div>

                <div className="rounded-2xl bg-sky-50 px-4 py-3 text-xs leading-6 text-sky-800">
                  子どもの氏名、住所、電話番号など、
                  個人を特定できる情報は入力しないでください。
                </div>
              </div>
            </section>

            {/* 選択 */}
            <section className="rounded-3xl border border-slate-300 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium text-slate-900">
                    作成する文章を選ぶ
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    必要な項目だけ選べます。
                  </p>
                </div>

                {loading && (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-sky-600">
                    <IconLoader />
                    生成中...
                  </div>
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {sectionButtons.map((btn) => (
                  <button
                    key={btn.key}
                    type="button"
                    onClick={() => addSection(btn.key, btn.label)}
                    disabled={loading}
                    className="flex min-h-[88px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-sky-200 hover:bg-sky-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="text-[13px] font-medium text-slate-700">
                      {btn.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* 結果 */}
            <section className="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div className="flex items-center gap-2 font-medium text-slate-900">
                  <span className="text-emerald-500">
                    <IconCheckCircle />
                  </span>
                  作成結果
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={copyResult}
                    disabled={!result}
                    className="flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-300"
                  >
                    <IconClipboard />
                    {copyStatus}
                  </button>

                  <button
                    type="button"
                    onClick={() => setResult("")}
                    disabled={!result}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-50 disabled:opacity-30"
                  >
                    <IconTrash />
                    クリア
                  </button>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="min-h-[240px] whitespace-pre-wrap rounded-2xl bg-slate-50 p-5 text-sm leading-8 text-slate-700">
                  {result || (
                    <div className="flex min-h-[200px] items-center justify-center text-center text-sm text-slate-400">
                      入力後、作成したい項目を選んでください。
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* 作例・コラム */}
      <section className="border-b border-sky-100 bg-sky-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium leading-[1.5] tracking-tight text-slate-950 sm:text-4xl">
              作例・コラム
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              実際の文章例を確認したいときや、
              保育AIノートの使い方・考え方を知りたいときにご覧ください。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/examples"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
            >
              <h3 className="text-xl font-medium text-slate-950">
                作例を見る
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                年齢や月に合わせた、ねらい・評価・反省などの文章例を確認できます。
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
                作例ページへ
                <IconArrow />
              </span>
            </Link>

            <Link
              href="/column"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
            >
              <h3 className="text-xl font-medium text-slate-950">
                コラムを読む
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                保育AIノートを作った理由や、保育の書類作成とAIについてまとめています。
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
                コラム一覧へ
                <IconArrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 注意 */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-medium text-slate-900">
              ご利用にあたって
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-500">
              <p>
                保育AIノートで生成された文章は、そのまま使用するのではなく、
                実際の子どもの姿や園の方針、
                クラスの状況に合わせて確認・修正してご利用ください。
              </p>

              <p>
                また、子どもの氏名、住所、電話番号など、
                個人を特定できる情報は入力しないでください。
              </p>
            </div>

            <Link
              href="/privacy"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-600 transition hover:text-sky-700"
            >
              プライバシーポリシー
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}