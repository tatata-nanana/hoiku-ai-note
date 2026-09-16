import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "保育の書類作成にAIは使える？活用するときに大切にしたいこと",
  description:
    "保育の月案・日誌・評価や反省などの書類作成にAIは使えるのか。AIに任せられることと、保育士自身が考えるべきことを、保育AIノート運営者の視点から紹介します。",
};

export default function AIAndChildcarePage() {
  return (
    <>
      <SiteHeader />

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
              AIと保育
            </p>

            <h1 className="mt-3 text-3xl font-medium leading-[1.5] tracking-tight text-slate-950 sm:text-4xl">
              保育の書類作成にAIは使えるのか
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
                保育の書類作成とAI
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  最近は、文章を作ったり、情報を整理したりするために
                  AIを使う機会が少しずつ増えてきました。
                </p>

                <p>
                  保育の仕事でも、月案や日誌、評価・反省、援助・配慮など、
                  文章を考える場面はたくさんあります。
                </p>

                <p>
                  そのため、こうした書類作成にもAIを活用できるのではないかと
                  考える方は増えていくと思います。
                </p>

                <p>
                  私自身も、書類作成の負担を少しでも減らせる方法のひとつとして、
                  AIはとても可能性のあるものだと感じています。
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                AIが得意なのは「文章をまとめること」
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  書類を作るときに大変なのは、
                  必ずしも「何も思いつかない」ことだけではありません。
                </p>

                <p>
                  子どもの姿や活動の内容は分かっていても、
                  それを文章としてどのようにまとめればよいのか分からず、
                  手が止まってしまうことがあります。
                </p>

                <p>
                  AIは、こうした頭の中にある情報を整理したり、
                  文章の形にしたりすることを得意としています。
                </p>

                <p>
                  例えば、活動内容や子どもの様子を入力して、
                  文章のたたき台を作るだけでも、
                  最初の一文からすべて自分で考える負担を減らすことができます。
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                AIにすべて任せればよいわけではない
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  一方で、保育の書類をすべてAIに任せればよいとは思っていません。
                </p>

                <p>
                  実際にその子がどのような姿を見せていたのか、
                  どのような気持ちだったのか、
                  保育士がどのような援助をしたのか。
                </p>

                <p>
                  こうした部分は、実際に子どもと関わった保育士だからこそ
                  分かることです。
                </p>

                <p>
                  AIが作った文章が、その日の保育や子どもの姿に
                  本当に合っているのかを確認することは欠かせません。
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                「答え」ではなく「たたき台」として使う
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  私は、保育の書類作成でAIを使う場合、
                  完成した答えを出してもらうというより、
                  文章を考えるための「たたき台」として使うのがよいと思っています。
                </p>

                <p>
                  AIが作った文章をそのまま使うのではなく、
                  実際の子どもの姿に合わせて修正したり、
                  自分なりの言葉を加えたりする。
                </p>

                <p>
                  そうすることで、書類を考える負担を減らしながら、
                  一人ひとりの子どもに合った記録を残しやすくなると思います。
                </p>

                <p>
                  「0から文章を考える」のではなく、
                  「1をもとに自分で整える」だけでも、
                  書類作成にかかる時間は変わってきます。
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                個人情報の入力には注意が必要
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  AIを保育で活用するときには、
                  個人情報の扱いについても考える必要があります。
                </p>

                <p>
                  子どもの氏名や住所など、個人を特定できる情報を
                  安易に入力しないことは大切です。
                </p>

                <p>
                  AIを便利に使うことだけではなく、
                  どのような情報を入力してよいのかを考えながら
                  利用する必要があります。
                </p>

                <p>
                  保育AIノートでも、個人を特定できる情報を入力しなくても
                  文章作成をサポートできるサービスを目指しています。
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                AIで保育士の仕事そのものを置き換えたいわけではない
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育AIノートを作っているのは、
                  AIに保育士の仕事を任せたいからではありません。
                </p>

                <p>
                  子どもの小さな変化に気づいたり、
                  気持ちを受け止めたり、
                  その子に合わせて関わり方を考えたりすることは、
                  保育士だからこそできる大切な仕事だと思っています。
                </p>

                <p>
                  だからこそ、文章をまとめる作業など、
                  AIに手伝ってもらえる部分の負担を少し減らすことで、
                  本当に大切な部分に時間を使えるようになればと思っています。
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                保育AIノートで目指していること
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育AIノートでは、AIにすべてを任せるのではなく、
                  保育士が文章を考えるときのサポート役になることを目指しています。
                </p>

                <p>
                  書類を書くために長い時間悩むのではなく、
                  AIが作った文章を参考にしながら、
                  自分の保育に合った内容へ整えていく。
                </p>

                <p>
                  そんな使い方ができるサービスにしていきたいと思っています。
                </p>

                <p>
                  書類作成にかかる時間が少しでも減り、
                  その分、子どもたちと向き合う時間や、
                  保育について考える時間につながればうれしいです。
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