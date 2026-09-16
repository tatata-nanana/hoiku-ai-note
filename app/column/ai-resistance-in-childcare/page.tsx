import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "保育現場ではAIに抵抗がある？広がる活用と残る不安",
  description:
    "保育現場ではAIに抵抗があるのでしょうか。保育士のAI利用に関する調査をもとに、生成AIへの不安や期待、保育でAIを活用するときに大切にしたいことを考えます。",
};

export default function AIResistanceInChildcarePage() {
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
              保育現場ではAIに抵抗がある？
              <br className="sm:hidden" />
              広がる活用と残る不安
            </h1>

            {/* 投稿日・製作者 */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400 sm:text-sm">
              <time dateTime="2026-09-17">2026.09.17</time>
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
                保育現場ではAIにまだ抵抗があるのか
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育とAIについて考えていると、
                  「保育の仕事にAIを使っても大丈夫なのか」
                  「なんとなく不安」と感じる方もまだ少なくないと思います。
                </p>

                <p>
                  実際に、保育現場を対象にした調査を見ると、
                  AIに対して不安を感じている人がいることが分かります。
                </p>

                <p>
                  2024年に株式会社コドモンが、
                  同社のサービスを利用する全国の保育施設436件を対象に行った調査では、
                  生成AIを利用しているという回答は全体の20％でした。
                </p>

                <p>
                  また、生成AIを利用していない人の71.7％が、
                  保育現場での生成AI利用について
                  「不安を感じる」と回答しています。
                </p>

                <p>
                  この結果だけを見ると、
                  保育現場ではAIに対する抵抗感がまだあるようにも見えます。
                </p>

                <p>
                  ただ、詳しく見ていくと、
                  単純に「AIを使いたくない」ということではないように思います。
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                不安の中心は「AIを信用してよいのか」
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  同じ調査では、生成AIを利用していない人が
                  不安に感じることとして、
                  「AIが出す情報の正確性・偏り」が69.3％で
                  最も多く挙げられています。
                </p>

                <p>
                  次に多かったのが、
                  「保育者の考える時間、問題解決能力の減少」で59％でした。
                </p>

                <p>
                  すでに生成AIを利用している人でも、
                  「AIが出す情報の正確性・偏り」は50.6％、
                  「情報漏洩・セキュリティ」は39.1％、
                  「保育者の生成AIへの依存」は32.2％が
                  不安として挙げられています。
                </p>

                <p>
                  つまり、AIそのものを嫌っているというより、
                  「出てきた文章をそのまま信用してよいのか」
                  「情報を入力して大丈夫なのか」
                  「頼りすぎてしまわないか」といった、
                  使い方に対する不安が大きいのではないかと思います。
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                一方で、AIを使ってみたい人も多い
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  興味深いのは、AIを利用していない人でも、
                  AIそのものを否定しているわけではないことです。
                </p>

                <p>
                  コドモンの調査では、
                  生成AIを利用していない人の61.9％が、
                  今後について「活用したい」と回答しています。
                </p>

                <p>
                  不安はある。
                  でも、業務が少し楽になるのであれば使ってみたい。
                </p>

                <p>
                  保育現場のAIに対する現在の感覚は、
                  「抵抗がある」という言葉だけでまとめるよりも、
                  こうした状態に近いのではないかと思います。
                </p>

                <p>
                  新しいものだからこそ不安はあるけれど、
                  どのように使えるのか知りたいという気持ちもある。
                </p>

                <p>
                  その両方があるのではないでしょうか。
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                AIは少しずつ保育現場にも入ってきている
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  2026年3月にユニファ株式会社が実施した調査では、
                  全国の保育士・幼稚園教諭・保育関係者1,209人のうち、
                  33.4％に生成AIの利用経験がありました。
                </p>

                <p>
                  主な使い方として多かったのは、
                  「書類作成・文書・文章の下書き作成」が45.3％、
                  「表現の言い換え・文章校正」が42.6％でした。
                </p>

                <p>
                  また、一部の業務への導入も含めると、
                  AIの導入意向があるという回答は76.2％でした。
                </p>

                <p>
                  2024年のコドモンの調査とは、
                  調査対象や質問方法が異なるため、
                  数字をそのまま比較することはできません。
                </p>

                <p>
                  それでも、文章作成を中心に、
                  AIが保育の仕事の中で使われ始めていることは分かります。
                </p>

                <p>
                  特に書類作成は、
                  AIを活用しやすい仕事のひとつなのかもしれません。
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                保育だからこそ、慎重になることも大切
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  私は、保育現場でAIに対して慎重になること自体は、
                  悪いことではないと思っています。
                </p>

                <p>
                  保育では、子どもの姿や成長、
                  家庭に関する情報などを扱うことがあります。
                </p>

                <p>
                  また、AIが作った文章が、
                  実際の子どもの姿と合っているとは限りません。
                </p>

                <p>
                  個人情報保護委員会も、
                  生成AIサービスに個人情報を入力するときには、
                  サービスの利用規約やプライバシーポリシーなどを確認し、
                  入力する情報について適切に判断する必要があるとしています。
                </p>

                <p>
                  AIは便利だから何でも入力してよい、
                  出てきた文章だから正しい、
                  というものではありません。
                </p>

                <p>
                  便利さと同時に、
                  どこまで使うのかを考えることが大切だと思います。
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                AIを使うこと自体が目的ではない
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育現場にAIを取り入れることが、
                  目的になってしまう必要はありません。
                </p>

                <p>
                  AIを使うことで仕事が余計に複雑になったり、
                  確認する作業が増えたりするのであれば、
                  無理に使う必要もないと思います。
                </p>

                <p>
                  一方で、文章を考えるために長い時間悩んでいるのであれば、
                  その一部をAIに手伝ってもらうことで
                  負担を減らせる可能性があります。
                </p>

                <p>
                  子どもの姿を見ること、
                  その子に必要な援助を考えること、
                  日々の保育を振り返ること。
                </p>

                <p>
                  こうした部分までAIに任せるのではなく、
                  保育士が考えたことを文章として整理する部分を
                  AIに手伝ってもらう。
                </p>

                <p>
                  そのくらいの距離感から始めてもよいのではないかと思います。
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                まずは「文章のたたき台」から
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  保育でAIを使ってみたいけれど不安がある場合は、
                  まず文章のたたき台を作るところから始めるのが
                  使いやすいと思います。
                </p>

                <p>
                  活動の内容や子どもの様子を、
                  個人が特定できない形で入力し、
                  ねらいや評価・反省などの文章を考える参考にする。
                </p>

                <p>
                  そして、出てきた文章をそのまま使うのではなく、
                  実際の子どもの姿や自分の保育に合わせて整えていく。
                </p>

                <p>
                  保育AIノートも、
                  そのような使い方ができるサービスを目指しています。
                </p>

                <p>
                  AIへの抵抗感を無理になくす必要はありません。
                </p>

                <p>
                  できることとできないことを知ったうえで、
                  自分の仕事の中で役立つ部分だけを使う。
                </p>

                <p>
                  これから保育現場でAIが広がっていくうえでは、
                  そうした使い方が大切なのではないかと思います。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="border-t border-slate-200 pt-10">
              <h2 className="text-xl font-medium text-slate-950">
                参考にした資料
              </h2>

              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-500">
                <p>
                  <a
                    href="https://www.codmon.co.jp/newsletter/10708/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-sky-500"
                  >
                    株式会社コドモン「保育現場における『生成AI』利用に関するアンケート」
                  </a>
                </p>

                <p>
                  <a
                    href="https://unifa-e.com/news/release/20260410-hoiuai_survey_report2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-sky-500"
                  >
                    ユニファ株式会社「保育士・幼稚園教諭のAI活用に関する実態調査 2026」
                  </a>
                </p>

                <p>
                  <a
                    href="https://www.ppc.go.jp/news/careful_information/230602_AI_utilize_alert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-sky-500"
                  >
                    個人情報保護委員会「生成AIサービスの利用に関する注意喚起等について」
                  </a>
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