import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import {
  ages,
  getExampleByAgeAndMonth,
  getMonthsByAge,
} from "../../../lib/examples";

type Props = {
  params: Promise<{
    age: string;
    month: string;
  }>;
};

const monthlyPoints: Record<
  string,
  {
    season: string;
    focus: string;
    writing: string;
  }
> = {
  "1": {
    season:
      "年始の生活リズムを整えながら、冬ならではの遊びや季節の変化を楽しむ時期です。",
    focus:
      "休み明けの子どもの体調や生活リズムに配慮し、安心して園生活に戻れるようにします。",
    writing:
      "年始の子どもの様子や冬の自然、友だちとの遊びの広がりなど、実際に見られた姿を具体的に入れると文章がまとめやすくなります。",
  },
  "2": {
    season:
      "寒さが続く中でも、戸外で体を動かしたり、冬の自然に触れたりする経験を楽しむ時期です。",
    focus:
      "寒暖差や感染症に注意しながら、子どもの体調に合わせて無理なく活動できるようにします。",
    writing:
      "寒い季節ならではの遊びや、友だちと一緒に楽しむ姿、活動への意欲などを具体的に記録するとよいでしょう。",
  },
  "3": {
    season:
      "年度のまとめの時期となり、一年間の成長を感じながら進級や就学への期待を持つ時期です。",
    focus:
      "一人ひとりの成長を認め、自信を持って次の生活へ進めるように関わります。",
    writing:
      "できるようになったことや友だちとの関わりの変化など、一年間の育ちが伝わる具体的な姿を入れることが大切です。",
  },
  "4": {
    season:
      "新しい環境や友だち、保育者との生活が始まり、期待と不安の両方が見られやすい時期です。",
    focus:
      "一人ひとりが安心して新しい環境に慣れ、自分の居場所を感じられるようにします。",
    writing:
      "新しい環境でどのように過ごしているか、保育者や友だちとどのように関わっているかを丁寧に捉えます。",
  },
  "5": {
    season:
      "新しい生活に少しずつ慣れ、好きな遊びを見つけたり、友だちとの関わりが広がったりする時期です。",
    focus:
      "子どもの興味や「やってみたい」という気持ちを大切にしながら、遊びを十分に楽しめるようにします。",
    writing:
      "興味を持っている遊びや、友だちとの関わりの変化、自分から行動する姿などを具体的に記録します。",
  },
  "6": {
    season:
      "梅雨の時期となり、室内で過ごす時間が増える一方、雨や水、自然への興味も広がる時期です。",
    focus:
      "室内でも十分に体を動かしたり、雨の日ならではの自然に触れたりできる環境を整えます。",
    writing:
      "室内遊びでの工夫や、雨・水・生き物などに興味を示す姿を取り入れると季節感のある文章になります。",
  },
  "7": {
    season:
      "気温が高くなり、水遊びや夏ならではの遊びを楽しむ機会が増える時期です。",
    focus:
      "十分な休息や水分補給を取りながら、安全に夏の遊びを楽しめるようにします。",
    writing:
      "水や泥などの感触を楽しむ姿や、夏の遊びにどのように関わっていたかを具体的に書くとよいでしょう。",
  },
  "8": {
    season:
      "暑い日が続くため、体調管理を大切にしながら、夏ならではの経験を楽しむ時期です。",
    focus:
      "暑さによる疲れに十分配慮し、一人ひとりの体調に合わせて無理なく過ごせるようにします。",
    writing:
      "水遊びや室内遊び、休息の様子など、夏の生活の中で見られた子どもの姿を丁寧に記録します。",
  },
  "9": {
    season:
      "夏から秋へ季節が移り変わり、過ごしやすい日には戸外で十分に体を動かせる時期です。",
    focus:
      "夏の疲れに配慮しながら、戸外で体を動かす心地よさや秋の自然に触れる経験を大切にします。",
    writing:
      "体を動かす遊びへの意欲や、季節の変化に気づく姿などを具体的に入れるとまとめやすくなります。",
  },
  "10": {
    season:
      "秋の自然が豊かになり、戸外遊びや運動、自然物を使った遊びを楽しめる時期です。",
    focus:
      "体を十分に動かすとともに、木の実や落ち葉など秋の自然への興味を広げられるようにします。",
    writing:
      "運動遊びへの取り組みや友だちとの協力、自然物を使って遊ぶ姿などを具体的に記録します。",
  },
  "11": {
    season:
      "秋が深まり、自然の変化を感じながら、友だちとの遊びや活動もさらに広がっていく時期です。",
    focus:
      "子ども同士のやり取りを大切にしながら、共通のイメージを持って遊ぶ経験につなげます。",
    writing:
      "友だちとの会話や役割分担、遊びを発展させるために工夫した姿などを入れるとよいでしょう。",
  },
  "12": {
    season:
      "冬の訪れや年末の行事に触れながら、季節の変化や行事を楽しむ時期です。",
    focus:
      "寒さに配慮しつつ、冬ならではの自然や行事に親しめるようにします。",
    writing:
      "行事への期待や冬の自然への興味、友だちと一緒に活動を楽しむ姿などを具体的に記録します。",
  },
};

function getMonthNumber(monthSlug: string, monthLabel: string) {
  const slugMatch = monthSlug.match(/\d+/);

  if (slugMatch) {
    return String(Number(slugMatch[0]));
  }

  const labelMatch = monthLabel.match(/\d+/);

  if (labelMatch) {
    return String(Number(labelMatch[0]));
  }

  return "";
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { age, month } = await params;

  const ageInfo = ages.find((item) => item.ageSlug === age);
  const example = getExampleByAgeAndMonth(age, month);

  if (!ageInfo || !example) {
    return {};
  }

  return {
    title: `${example.ageLabel}${example.monthLabel}の月案・ねらい・援助配慮の作例｜保育AIノート`,
    description: `${example.ageLabel}${example.monthLabel}の保育書類作例です。ねらい、5領域、養護、援助、配慮、環境構成など、月案や日誌を考えるときに参考にできる文章例を掲載しています。`,
  };
}

export default async function MonthPage({ params }: Props) {
  const { age, month } = await params;

  const ageInfo = ages.find((item) => item.ageSlug === age);
  const example = getExampleByAgeAndMonth(age, month);

  if (!ageInfo || !example) {
    notFound();
  }

  const months = getMonthsByAge(age);

  const currentMonthIndex = months.findIndex(
    (item) => item.monthSlug === month
  );

  const previousMonth =
    currentMonthIndex > 0 ? months[currentMonthIndex - 1] : null;

  const nextMonth =
    currentMonthIndex >= 0 && currentMonthIndex < months.length - 1
      ? months[currentMonthIndex + 1]
      : null;

  const monthNumber = getMonthNumber(
    example.monthSlug ?? month,
    example.monthLabel
  );

  const point = monthlyPoints[monthNumber];

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
          <p className="text-2xl font-medium tracking-tight text-black">
            {example.ageLabel} {example.monthLabel}
          </p>
        </section>

        {/* タイトル */}
        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h1 className="text-3xl font-medium leading-relaxed tracking-tight text-slate-950 sm:text-4xl">
              {example.title}
            </h1>

            {example.description && (
              <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base">
                {example.description}
              </p>
            )}
          </div>
        </section>

        {/* 月のポイント */}
        {point && (
          <section className="border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <article className="border-b border-slate-200 py-8">
                <h2 className="text-lg font-medium text-slate-950">
                  季節と子どもの姿
                </h2>

                <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                  {point.season}
                </p>
              </article>

              <article className="py-8">
                <h2 className="text-lg font-medium text-slate-950">
                  保育で意識したいこと
                </h2>

                <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                  {point.focus}
                </p>
              </article>
            </div>
          </section>
        )}

        {/* 作例 */}
        <section className="border-t border-slate-100 bg-slate-50/50 py-12 sm:py-14">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium text-slate-950">
              文章作例
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <article className="border-b border-slate-200 px-6 py-7 sm:px-8">
                <h3 className="text-lg font-medium text-slate-950">
                  ねらい
                </h3>

                <div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-600 sm:text-base">
                  {example.goal}
                </div>
              </article>

              <article className="border-b border-slate-200 px-6 py-7 sm:px-8">
                <h3 className="text-lg font-medium text-slate-950">
                  5領域
                </h3>

                <div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-600 sm:text-base">
                  {example.fiveAreas}
                </div>
              </article>

              <article className="border-b border-slate-200 px-6 py-7 sm:px-8">
                <h3 className="text-lg font-medium text-slate-950">
                  養護
                </h3>

                <div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-600 sm:text-base">
                  {example.care}
                </div>
              </article>

              <article className="border-b border-slate-200 px-6 py-7 sm:px-8">
                <h3 className="text-lg font-medium text-slate-950">
                  援助
                </h3>

                <div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-600 sm:text-base">
                  {example.support}
                </div>
              </article>

              <article className="border-b border-slate-200 px-6 py-7 sm:px-8">
                <h3 className="text-lg font-medium text-slate-950">
                  配慮
                </h3>

                <div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-600 sm:text-base">
                  {example.consideration}
                </div>
              </article>

              <article className="px-6 py-7 sm:px-8">
                <h3 className="text-lg font-medium text-slate-950">
                  環境構成
                </h3>

                <div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-600 sm:text-base">
                  {example.environment}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 書き方ポイント */}
        {point && (
          <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <h2 className="text-xl font-medium text-slate-950">
                文章を書くときのポイント
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {point.writing}
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                掲載している文章をそのまま使用するのではなく、
                実際の子どもの様子や園の方針、
                その日に見られた姿を加えて調整することで、
                より自然で具体的な記録になります。
              </p>
            </div>
          </section>
        )}

        {/* 前後の月 */}
        <section className="border-t border-slate-100 bg-slate-50/50 py-12 sm:py-14">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950">
              他の月の作例を見る
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {previousMonth ? (
                <Link
                  href={`/examples/${age}/${previousMonth.monthSlug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-200 hover:bg-sky-50/50"
                >
                  <p className="text-xs text-slate-400">
                    ← 前の月
                  </p>

                  <p className="mt-2 font-medium text-slate-800 transition group-hover:text-sky-600">
                    {previousMonth.monthLabel}の作例
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextMonth && (
                <Link
                  href={`/examples/${age}/${nextMonth.monthSlug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-right transition hover:border-sky-200 hover:bg-sky-50/50"
                >
                  <p className="text-xs text-slate-400">
                    次の月 →
                  </p>

                  <p className="mt-2 font-medium text-slate-800 transition group-hover:text-sky-600">
                    {nextMonth.monthLabel}の作例
                  </p>
                </Link>
              )}
            </div>

            <div className="mt-6">
              <Link
                href={`/examples/${age}`}
                className="text-sm font-medium text-sky-600 transition hover:text-sky-700"
              >
                ← {ageInfo.ageLabel}の月別作例一覧へ戻る
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}