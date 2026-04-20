import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { ages, getExampleByAgeAndMonth } from "../../../lib/examples";

type Props = {
  params: Promise<{
    age: string;
    month: string;
  }>;
};

export default async function MonthPage({ params }: Props) {
  const { age, month } = await params;

  const ageInfo = ages.find((item) => item.ageSlug === age);
  const example = getExampleByAgeAndMonth(age, month);

  if (!ageInfo || !example) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        <section className="rounded-[32px] border border-slate-200 bg-white px-8 py-9 shadow-sm sm:px-10 sm:py-10">
          <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {example.ageLabel} / {example.monthLabel}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {example.title}
          </h1>

          {example.description && (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {example.description}
            </p>
          )}
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <Link
              href={`/examples/${age}`}
              className="text-sm font-bold text-sky-700 hover:underline"
            >
              ← {ageInfo.ageLabel} の月一覧へ戻る
            </Link>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <h2 className="text-lg font-bold text-slate-800">ねらい</h2>
              <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {example.goal}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <h2 className="text-lg font-bold text-slate-800">5領域</h2>
              <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {example.fiveAreas}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <h2 className="text-lg font-bold text-slate-800">養護</h2>
              <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {example.care}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <h2 className="text-lg font-bold text-slate-800">援助</h2>
              <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {example.support}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <h2 className="text-lg font-bold text-slate-800">配慮</h2>
              <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {example.consideration}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <h2 className="text-lg font-bold text-slate-800">環境構成</h2>
              <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {example.environment}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}