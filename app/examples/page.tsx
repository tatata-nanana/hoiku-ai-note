import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { ages } from "../lib/examples";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        <section className="rounded-[32px] border border-slate-200 bg-white px-8 py-9 shadow-sm sm:px-10 sm:py-10">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              作例ページ
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              保育の作例を、
              <br className="hidden sm:block" />
              年齢ごとに探せます。
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              月齢・月・内容ごとに作例を確認できます。
              気になる年齢を選んでください。
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-slate-700">年齢から選ぶ</h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ages.map((age) => (
              <Link
                key={age.ageSlug}
                href={`/examples/${age.ageSlug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-bold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                {age.ageLabel}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}