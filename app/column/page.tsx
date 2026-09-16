import Link from "next/link";
import type { Metadata } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "製作者コラム｜保育AIノート",
  description:
    "保育AIノートの製作者が、サービスを作った理由や保育士としての経験、保育の書類作成、AIとの向き合い方、サービスづくりについて発信するコラムです。",
};

type ColumnData = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  slug: string;
};

async function getColumns(): Promise<ColumnData[]> {
  const columnDirectory = path.join(process.cwd(), "app", "column");

  const entries = await fs.readdir(columnDirectory, {
    withFileTypes: true,
  });

  const columns = await Promise.all(
    entries
      .filter(
        (entry) =>
          entry.isDirectory() &&
          !entry.name.startsWith("[") &&
          !entry.name.startsWith("_")
      )
      .map(async (entry) => {
        try {
          const metadataPath = path.join(
            columnDirectory,
            entry.name,
            "column.json"
          );

          const file = await fs.readFile(metadataPath, "utf8");

          const data = JSON.parse(file) as Omit<ColumnData, "slug">;

          return {
            ...data,
            slug: entry.name,
          };
        } catch {
          return null;
        }
      })
  );

  return columns
    .filter((column): column is ColumnData => column !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );
}

export default async function ColumnPage() {
  const columns = await getColumns();

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white">
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
            コラム
          </h1>
        </section>

        {/* コラム一覧 */}
        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-medium text-slate-950 sm:text-3xl">
              最新のコラム
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {columns.map((column, index) => (
              <Link
                key={column.slug}
                href={`/column/${column.slug}`}
                className="group block py-9 transition sm:py-10"
              >
                <div className="grid gap-4 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <div>
                    <span className="text-sm font-medium text-slate-300">
                      {String(columns.length - index).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-sky-500">
                      {column.category}
                    </p>

                    <h3 className="mt-2 text-xl font-medium leading-8 text-slate-900 transition group-hover:text-sky-500 sm:text-2xl">
                      {column.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      {column.description}
                    </p>

                    <p className="mt-5 text-sm font-medium text-slate-700">
                      記事を読む →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}