import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "保育AIノートをもっと使いやすくするために｜開発と改善について",
  description:
    "保育AIノートをより使いやすいサービスにするために、現在考えていることや改善していきたいこと、これから目指しているサービスの形について紹介します。",
};

export default function ImprovingHoikuAINotePage() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-900">
        {/* 記事ヘッダー */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <Link
              href="/column"
              className="text-sm font-medium text-sky-500 transition hover:text-sky-600"
            >
              ← 製作者コラムへ戻る
            </Link>

            <p className="mt-10 text-sm font-medium text-sky-500">
              開発・改善
            </p>

            <h1 className="mt-3 text-3xl font-medium leading-[1.5] tracking-tight text-slate-950 sm:text-4xl">
              保育AIノートをもっと
              <br className="sm:hidden" />
              使いやすくするために
            </h1>

            {/* 投稿日・製作者 */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400 sm:text-sm">
              <time dateTime="2026-08-31">2026.08.31</time>
              <span>｜</span>
              <span>保育AIノート運営者</span>
            </div>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="mx-auto max-w-3xl px-5 pb-16 pt-4 sm:px-8 sm:pb-20 sm:pt-6">
          <div className="space-y-14">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                作って終わりではなく、少しずつ改善していきたい
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育AIノートは、保育の書類作成にかかる負担を
                  少しでも減らしたいという思いから作り始めました。
                </p>

                <p>
                  ただ、サービスは一度作れば完成というものではないと思っています。
                </p>

                <p>
                  実際に作って自分で使ってみると、
                  「ここはもう少し分かりやすくしたい」
                  「もっと簡単に文章を作れるようにしたい」など、
                  改善したいところが次々に見えてきます。
                </p>

                <p>
                  少しずつ改善を重ねながら、
                  本当に保育士の負担を減らせるサービスにしていきたいと考えています。
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                迷わず使えるシンプルさを大切にしたい
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育AIノートを作るうえで大切にしていることのひとつが、
                  できるだけ迷わず使えることです。
                </p>

                <p>
                  便利な機能がたくさんあっても、
                  使い方を覚えること自体が負担になってしまっては、
                  書類作成を楽にするという目的から離れてしまいます。
                </p>

                <p>
                  年齢や月を選び、活動内容や子どもの様子を入力して、
                  必要な文章を作る。
                </p>

                <p>
                  初めて使う方でも、
                  「ここに入力すればいいんだ」と自然に分かるような
                  シンプルなサービスにしていきたいと思っています。
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                文章の質も改善していきたい
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  見た目や使いやすさだけではなく、
                  生成される文章の内容も大切です。
                </p>

                <p>
                  保育では、同じ活動をしていても、
                  年齢や月、その日の子どもの姿によって
                  必要な援助や振り返りは変わります。
                </p>

                <p>
                  そのため、ただ一般的な文章を作るのではなく、
                  入力された内容をできるだけ反映しながら、
                  実際の書類作成の参考にしやすい文章を作れるようにしたいと考えています。
                </p>

                <p>
                  「少し直せば使える」
                  「自分では思いつかなかった表現の参考になった」
                  と思ってもらえる文章を目指して改善していきます。
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                必要な文章をもっと作れるように
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育の仕事では、さまざまな文章を書く必要があります。
                </p>

                <p>
                  活動文やねらいだけではなく、
                  評価・反省、養護、援助・配慮、環境構成など、
                  書類によって考える内容も変わります。
                </p>

                <p>
                  保育AIノートでは、
                  こうした保育に必要な文章をひとつの場所で作れるようにし、
                  「文章に困ったらここを使おう」と思ってもらえるサービスを
                  目指しています。
                </p>

                <p>
                  実際に使う中で必要だと感じる機能についても、
                  今後少しずつ追加していきたいと考えています。
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                便利になっても、大切にしたいこと
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  これから機能を増やしていくとしても、
                  AIにすべてを任せるサービスにはしたくありません。
                </p>

                <p>
                  子どもの姿を見て、
                  その子に必要な関わりや援助を考えるのは、
                  実際に子どもと向き合っている保育士です。
                </p>

                <p>
                  保育AIノートが担いたいのは、
                  その考えを文章にする部分をサポートすることです。
                </p>

                <p>
                  AIが作った文章を参考にしながら、
                  実際の子どもの姿に合わせて保育士自身が整えていく。
                  そのための道具として使ってもらえるサービスにしたいと思っています。
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                保育AIノートをこれから育てていく
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育AIノートは、まだ改善していきたいところがたくさんあります。
                </p>

                <p>
                  使いやすさや文章の質、必要な機能など、
                  実際に使う人の立場を考えながら、
                  少しずつ良くしていきたいと思っています。
                </p>

                <p>
                  書類作成で手が止まったときに、
                  気軽に開いて使える。
                </p>

                <p>
                  そして、書類に使っていた時間を少しでも減らし、
                  子どもたちと向き合う時間につなげる。
                </p>

                <p>
                  そんなサービスを目指して、
                  これからも保育AIノートを育てていきます。
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}