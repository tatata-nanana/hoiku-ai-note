import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title:
    "保育AIノートを作った理由｜8年間の保育士経験から感じた書類作成の負担",
  description:
    "8年間の保育士経験を通して感じた、月案・日誌・記録などの書類作成の負担。保育AIノートを作ろうと思ったきっかけや、サービスに込めた思いについて紹介します。",
};

export default function WhyIMadeHoikuAINotePage() {
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
              製作について
            </p>

            <h1 className="mt-3 text-3xl font-medium leading-[1.5] tracking-tight text-slate-950 sm:text-4xl">
              保育AIノートを作った理由
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
                保育士として働く中で感じていたこと
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  私はこれまで、8年間保育士として働いてきました。
                </p>

                <p>
                  子どもと関わる時間はとても大切で、日々やりがいも感じていました。
                </p>

                <p>
                  その一方で、書類に追われる大変さもずっと感じていました。
                </p>

                <p>
                  保育の仕事は、子どもと関わるだけではなく、その姿を記録し、
                  振り返り、次の援助につなげていくことも大切です。
                </p>

                <p>
                  だからこそ書類は必要なものですが、毎日の業務の中で
                  大きな負担になることも多かったです。
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                書類を書くことへの苦手意識
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  特に私は、書類を書くことに苦手意識がありました。
                </p>

                <p>
                  活動の内容や子どもの姿は頭の中にあっても、それを文章として
                  まとめるところで手が止まってしまうことがよくありました。
                </p>

                <p>
                  活動文、ねらい、評価・反省、養護、援助・配慮、環境構成など、
                  考えなければいけないことは多く、毎回
                  「どう書けばよいのだろう」と悩むことも少なくありませんでした。
                </p>

                <p>
                  何を書くか分からないというより、内容はあるのに、
                  言葉としてうまくまとまらない。
                </p>

                <p>
                  そんな難しさを何度も感じてきました。
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                テンプレートを頼りにしていた現場の姿
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  また、自分だけでなく、周りの保育士の姿を見ていても、
                  同じように書類づくりに苦労している人は多かったように思います。
                </p>

                <p>
                  本やネットに載っている文例やテンプレートを参考にしながら、
                  何とか書類を作っている場面もよくありました。
                </p>

                <p>
                  もちろん、参考になる表現や言い回しに助けられることは
                  たくさんあります。
                </p>

                <p>
                  ただ、その参考になるものを探すこと自体に時間がかかったり、
                  自分のクラスや子どもの姿に合うように直したりする中で、
                  さらに時間がかかってしまうこともありました。
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                書類が残業につながることもあった
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  気がつけば、書類に時間を取られて残業になってしまうこともありました。
                </p>

                <p>
                  保育の仕事は本来、子どもたちとの時間を大切にしたいと思う一方で、
                  書類もきちんと仕上げなければならない。
                </p>

                <p>
                  その両方を大切にしたいからこそ、
                  時間に追われるような感覚になることもありました。
                </p>

                <p>
                  必要な仕事だと分かっているからこそ、
                  書類の負担が大きくなりすぎてしまうことに、
                  ずっともどかしさを感じていました。
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                そうした経験から保育AIノートを作りました
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  そうした経験があったからこそ、書類づくりの負担を
                  少しでも軽くできるものがあればと思い、
                  保育AIノートを作りました。
                </p>

                <p>
                  保育AIノートは、書類をすべて任せるためのものではありません。
                </p>

                <p>
                  文章を考え始めるまでの負担を減らしたり、
                  最初の一文や方向性を考える助けになったりするものとして
                  使えるようにしたいと思っています。
                </p>

                <p>
                  書類で手が止まりやすい保育士の方に、
                  少しでも役立つものになればうれしいです。
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