import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { ages, getMonthsByAge } from "../../lib/examples";

type Props = {
  params: Promise<{
    age: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { age } = await params;
  const ageInfo = ages.find((item) => item.ageSlug === age);

  if (!ageInfo) {
    return {};
  }

  return {
    title: `${ageInfo.ageLabel}の月案・日誌・ねらい作例集｜保育AIノート`,
    description: `${ageInfo.ageLabel}の月案・日誌などに使える文章作例を月別に掲載しています。ねらい、評価・反省、援助・配慮、環境構成など、${ageInfo.ageLabel}の保育書類を考えるときの参考としてご活用ください。`,
  };
}

export default async function AgePage({ params }: Props) {
  const { age } = await params;

  const ageInfo = ages.find((item) => item.ageSlug === age);

  if (!ageInfo) {
    notFound();
  }

  const months = getMonthsByAge(age);

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
            {ageInfo.ageLabel}
          </h1>
        </section>

        {/* 月別一覧 */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-slate-950 sm:text-3xl">
                月から作例を探す
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
              {months.map((month) => (
                <Link
                  key={month.monthSlug}
                  href={`/examples/${age}/${month.monthSlug}`}
                  className="group flex min-h-[90px] items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-4 transition hover:border-sky-200 hover:bg-sky-50/50 sm:min-h-[120px] sm:px-5 sm:py-6"
                >
                  <span className="text-lg font-medium text-slate-900 transition group-hover:text-sky-600 sm:text-3xl">
                    {month.monthLabel}
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