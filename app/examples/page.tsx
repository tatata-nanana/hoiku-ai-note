import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { ages } from "../lib/examples";

export const metadata: Metadata = {
  title: "保育士向け月案・日誌・連絡帳の作例集｜保育AIノート",
  description:
    "0歳児から5歳児まで、保育士向けの月案・日誌・連絡帳などに使える文章作例を年齢別・月別に掲載しています。ねらい、5領域、養護、援助・配慮、環境構成、評価・反省など、保育書類を考えるときの参考にできます。",
};

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        {/* 下層ページ見出し */}
        <section
          style={{
            width: "100%",
            height: "110px",
            backgroundColor: "#a9ddf5",
          }}
          className="flex items-center justify-center"
        >
          <h1 className="text-2xl font-medium tracking-tight text-black">
            作例
          </h1>
        </section>

        {/* 年齢 */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-slate-950 sm:text-3xl">
                年齢から作例を探す
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-2 sm:gap-3">
              {ages.map((age) => (
                <Link
                  key={age.ageSlug}
                  href={`/examples/${age.ageSlug}`}
                  className="group flex min-h-[90px] items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-4 transition hover:border-sky-200 hover:bg-sky-50/50 sm:min-h-[120px] sm:px-5 sm:py-6"
                >
                  <span className="text-base font-medium text-slate-900 transition group-hover:text-sky-600 sm:text-3xl">
                    {age.ageLabel}
                  </span>

                  <span className="text-sm text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-500 sm:text-lg">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}