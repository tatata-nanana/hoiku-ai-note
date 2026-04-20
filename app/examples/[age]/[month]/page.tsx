import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import {
  ages,
  getMonthsByAge,
  getCategoriesByAgeAndMonth,
} from "../../../lib/examples";

type Props = {
  params: Promise<{
    age: string;
    month: string;
  }>;
};

export default async function MonthPage({ params }: Props) {
  const { age, month } = await params;

  const ageInfo = ages.find((item) => item.ageSlug === age);

  if (!ageInfo) {
    notFound();
  }

  const monthInfo = getMonthsByAge(age).find(
    (item) => item.monthSlug === month
  );

  if (!monthInfo) {
    notFound();
  }

  const categories = getCategoriesByAgeAndMonth(age, month);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        <section className="rounded-[32px] border border-slate-200 bg-white px-8 py-9 shadow-sm sm:px-10 sm:py-10">
          <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {ageInfo.ageLabel} / {monthInfo.monthLabel}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {ageInfo.ageLabel} {monthInfo.monthLabel} の
            <br className="hidden sm:block" />
            作例一覧
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            見たい内容を選んでください。
          </p>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <Link
              href={`/examples/${age}`}
              className="text-sm font-bold text-sky-700 hover:underline"
            >
              ← {ageInfo.ageLabel} の月一覧へ戻る
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.categorySlug}
                href={`/examples/${age}/${month}/${category.categorySlug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <p className="text-base font-bold text-slate-800">
                  {category.categoryLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}