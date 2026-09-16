import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "このサイトについて｜保育AIノート",
  description:
    "保育AIノートは、保育士や幼稚園教諭など、保育に関わる方の書類作成をサポートするサービスです。年齢や月、活動内容、子どもの様子から、保育に必要な文章のたたき台を作成できます。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        {/* ページタイトル */}
        <section
          style={{
            width: "100%",
            height: "110px",
            backgroundColor: "#a9ddf5",
          }}
          className="flex items-center justify-center"
        >
          <h1 className="text-2xl font-medium tracking-tight text-black">
            このサイトについて
          </h1>
        </section>

        {/* 保育AIノートとは */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              保育AIノートとは
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートは、保育士や幼稚園教諭、保育補助など、
                子どもの育ちに関わる方の書類作成をサポートするサービスです。
              </p>

              <p>
                年齢や月、活動内容、子どもの様子を入力すると、
                活動文、ねらい、評価・反省、5領域、養護、援助・配慮、
                環境構成など、保育書類に必要な文章のたたき台を作成できます。
              </p>

              <p>
                また、年齢別・月別の文章作例や、
                保育とAI、書類作成について考えるコラムも掲載しています。
                文章を作成するだけでなく、
                「どう書けばいいのだろう」と迷ったときに
                ヒントを探せる場所としても利用していただけます。
              </p>
            </div>
          </div>
        </section>

        {/* 保育の書類について */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              保育の書類と向き合う時間を、
              <br className="hidden sm:block" />
              少しでも軽くしたい
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育の仕事では、日々の活動記録や日誌だけでなく、
                月案や週案、ねらい、評価・反省、おたよりなど、
                さまざまな文章を書く機会があります。
              </p>

              <p>
                こうした記録や計画は、
                子どもの姿や成長を振り返り、
                これからの保育を考えていくための大切なものです。
                その一方で、日々の保育をしながら
                一つひとつの文章を考え、言葉にしていくことには
                時間も労力もかかります。
              </p>

              <p>
                「書きたい内容は頭の中にあるけれど、文章にまとまらない」
                「いつも同じような表現になってしまう」
                「書き出しを考えているうちに時間が過ぎてしまう」
                ということもあると思います。
              </p>

              <p>
                保育AIノートは、
                そうした文章を考える最初の部分をサポートすることで、
                書類作成にかかる負担を少しでも減らしたいという思いから
                作っています。
              </p>
            </div>
          </div>
        </section>

        {/* できること */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              保育AIノートでできること
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、
                年齢や月、活動内容、子どもの様子を入力することで、
                その内容に合わせた保育文章を作成できます。
              </p>

              <p>
                活動の様子をまとめた文章をはじめ、
                ねらい、評価・反省、おたより向けの文章、
                5領域を意識した表現、養護、援助・配慮、
                環境構成など、日々の保育で必要になる
                さまざまな文章づくりに活用できます。
              </p>

              <p>
                何もない状態から文章を一から考えるのではなく、
                まずはたたき台を作り、
                そこから実際の子どもの姿やクラスの様子に合わせて
                自分の言葉に整えていく。
                そのための最初の一歩を手伝うことが、
                保育AIノートの役割だと考えています。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめ */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              こんなときに使ってください
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                日誌や月案を書こうとしても、
                なかなか文章が浮かばないとき。
                子どもの姿は思い浮かんでいるけれど、
                どのような言葉で表せばよいか迷ったとき。
                ねらいや評価・反省の表現が
                いつも似た文章になってしまうとき。
              </p>

              <p>
                そんなときに、
                保育AIノートを文章づくりのきっかけとして
                使っていただけたらと思っています。
              </p>

              <p>
                忙しい時間の中で書類を完成させることだけを目的にするのではなく、
                子どもの姿を振り返りながら、
                自分の保育を自分の言葉で記録していくための
                補助として利用できるサービスを目指しています。
              </p>
            </div>
          </div>
        </section>

        {/* AIについて */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              AIにすべてを任せるための
              <br className="hidden sm:block" />
              サービスではありません
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                同じ年齢、同じ月、同じ活動であっても、
                子どもの姿やクラスの様子は一つとして同じではありません。
              </p>

              <p>
                そのため、AIが作った文章を
                そのまま正解として使用するのではなく、
                実際に目の前で見た子どもの姿や、
                保育者自身が感じたこと、園の方針などを加えながら
                内容を整えていただくことを大切にしています。
              </p>

              <p>
                保育者の代わりにAIが考えるのではなく、
                保育者が考えていることを整理し、
                言葉にする部分をAIが手伝う。
                保育AIノートは、そんな使い方ができるサービスで
                ありたいと考えています。
              </p>
            </div>
          </div>
        </section>

        {/* 運営 */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              運営について
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートは、
                8年間の保育士経験をもつ運営者が制作・運営しています。
              </p>

              <p>
                保育士として働く中で、
                子どもと過ごす時間だけでなく、
                日誌や月案、評価・反省など、
                多くの書類と向き合ってきました。
              </p>

              <p>
                書かなければならない内容は分かっていても、
                うまく文章にならなかったり、
                忙しい中で言葉を考えることに時間がかかったりすることがあります。
                そうした経験が、
                保育AIノートを作るきっかけの一つになっています。
              </p>

              <p>
                実際に保育の仕事を経験してきたからこそ、
                単に文章を自動で作るだけではなく、
                保育に関わる方が無理なく使えて、
                日々の書類作成を少しでも楽にできるサービスを
                目指して開発・改善を続けています。
              </p>

              <p>
                サービスを作った理由や、
                保育とAIについて考えていること、
                開発しながら感じたことなどは
                コラムでも発信しています。
              </p>

              <Link
                href="/column"
                className="inline-flex pt-1 text-sm font-medium text-sky-600 transition hover:text-sky-700"
              >
                コラムを読む →
              </Link>
            </div>
          </div>
        </section>

        {/* 利用上の注意 */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              ご利用にあたって
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートで作成される文章は、
                保育書類を考えるためのたたき台です。
                内容が実際の子どもの姿やクラスの状況、
                園の保育方針などと合っているかを確認し、
                必要に応じて修正してからご利用ください。
              </p>

              <p>
                また、サービスを利用する際は、
                子どもや保護者の氏名、住所、電話番号など、
                個人を特定できる情報は入力しないようお願いいたします。
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}