import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../../components/SiteHeader";
import SiteFooter from "../../../../components/SiteFooter";
import { getExample } from "../../../../lib/examples";

type Props = {
  params: Promise<{
    age: string;
    month: string;
    category: string;
  }>;
};

export default async function ExampleDetailPage({ params }: Props) {
  const { age, month, category } = await params;
  const example = getExample(age, month, category);

  if (!example) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        <section className="rounded-[32px] border border-slate-200 bg-white px-8 py-9 shadow-sm sm:px-10 sm:py-10">
          <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {example.ageLabel} / {example.monthLabel} / {example.categoryLabel}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {example.title}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {example.description}
          </p>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-wrap gap-3 text-sm">
            <Link
              href="/examples"
              className="font-bold text-sky-700 hover:underline"
            >
              作例トップ
            </Link>
            <Link
              href={`/examples/${example.ageSlug}`}
              className="font-bold text-sky-700 hover:underline"
            >
              {example.ageLabel}
            </Link>
            <Link
              href={`/examples/${example.ageSlug}/${example.monthSlug}`}
              className="font-bold text-sky-700 hover:underline"
            >
              {example.monthLabel}
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
            <h2 className="text-lg font-bold text-slate-800">作例本文</h2>
            <div className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">
              {example.body}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}