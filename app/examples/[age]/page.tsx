import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { ages, getMonthsByAge } from "../../lib/examples";

type Props = {
  params: {
    age: string;
  };
};

export default function AgePage({ params }: Props) {
  const ageInfo = ages.find((item) => item.ageSlug === params.age);

  if (!ageInfo) {
    notFound();
  }

  const months = getMonthsByAge(params.age);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        <section className="rounded-[32px] border border-slate-200 bg-white px-8 py-9 shadow-sm sm:px-10 sm:py-10">
          <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {ageInfo.ageLabel} の作例
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {ageInfo.ageLabel} の
            <br className="hidden sm:block" />
            月別作例一覧
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            見たい月を選んでください。
          </p>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <Link
              href="/examples"
              className="text-sm font-bold text-sky-700 hover:underline"
            >
              ← 作例トップへ戻る
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {months.map((month) => (
              <Link
                key={month.monthSlug}
                href={`/examples/${params.age}/${month.monthSlug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-bold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                {month.monthLabel}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}