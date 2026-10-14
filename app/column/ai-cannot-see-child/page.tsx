import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "AIには実際の子どもの姿までは分からない",
  description:
    "AIが分かるのは入力された情報だけです。同じ行動でも子どもによって意味は異なります。AIが作った文章をそのまま使わず、実際の姿に合った記録へ整える大切さと、書類作成でAIを活用するときの考え方を紹介します。",
};

export default function AIChildObservationPage() {
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
              AIには実際の子どもの姿までは分からない
            </h1>

            {/* 投稿日・製作者 */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400 sm:text-sm">
              <time dateTime="2026-10-14">2026.10.14</time>
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
                AIが分かるのは、入力された情報だけ
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  文章を作ったり、情報を整理したりするAIは、月案や日誌などの
                  書類作成でも活用できるようになってきました。
                </p>

                <p>
                  活動内容や子どもの様子を入力すると、ねらいや評価・反省、
                  援助・配慮などの文章を短い時間で作ることができます。
                </p>

                <p>
                  一方で、AIが作った文章を見て「きれいにまとまっているから、
                  このまま使っても大丈夫」と感じることもあるかもしれません。
                </p>

                <p>
                  しかし、AIには実際の子どもの姿までは分かりません。
                  AIが分かるのは、入力された情報だけです。その場にいたわけでも、
                  子どもの表情や声を見聞きしたわけでもありません。
                </p>

                <p>
                  だからこそ、書類作成にAIを取り入れるときには、AIにできることと、
                  保育士にしかできないことを分けて考える必要があります。
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                同じ行動でも、その子にとっての意味は違う
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  例えば、AIに「友だちと一緒に遊んでいた」と入力したとします。
                </p>

                <p>
                  AIは、その情報をもとに「友だちとの関わりを楽しんでいた」
                  「一緒に遊ぶ中で協調性が育っている」といった文章を
                  作るかもしれません。
                </p>

                <p>
                  文章としては自然に見えますが、本当にそうだったかどうかは、
                  入力した内容だけでは分かりません。
                </p>

                <p>
                  自分から友だちを誘ったのかもしれません。誘われて少し迷いながら
                  加わったのかもしれません。保育士に支えてもらいながら、
                  初めて一緒に遊べたのかもしれません。
                </p>

                <p>
                  同じ「友だちと遊んでいた」という姿でも、そこに至るまでの過程や、
                  その子にとっての意味は異なります。AIは文章を整えられますが、
                  その違いを自動的に知ることはできません。
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                これまでの姿を知っているから気づけること
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  子どもの姿を見るときは、目に見える行動だけでなく、
                  その子のこれまでの様子や変化も大切です。
                </p>

                <p>
                  普段から友だちとの遊びを楽しんでいる子が一緒に遊ぶ姿と、
                  これまで一人で過ごすことが多かった子が自分から輪に入る姿では、
                  同じ行動でも受け取る意味が変わります。
                </p>

                <p>
                  製作に取り組んでいる姿も同じです。集中して作ることを
                  楽しんでいたのか、思うようにできず何度も試していたのか、
                  保育士の言葉をきっかけに挑戦できたのかによって、
                  記録に残したい内容は異なります。
                </p>

                <p>
                  その子の普段の姿を知り、今日の姿との違いに気づけるのは、
                  日々そばで関わっている保育士です。
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                表情や声、その場の空気は文章だけでは伝わりきらない
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  子どもの姿を理解するための情報は、言葉にしやすいもの
                  ばかりではありません。
                </p>

                <p>
                  うれしそうな表情、少し不安そうな声、友だちを見つめる様子、
                  できたときの誇らしそうな姿。そうした小さな変化も、
                  その日の出来事を振り返るうえで大切な情報です。
                </p>

                <p>
                  しかし、AIはその場の空気を感じることができません。
                  入力されていない表情や声、前後の出来事まで理解して
                  文章にすることはできないのです。
                </p>

                <p>
                  AIが作る文章に具体性を持たせるためには、保育士が実際に
                  見たことや感じたことを、できる範囲で入力する必要があります。
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                見ていない姿が文章に含まれることもある
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  AIは、入力された情報から自然な文章を作ろうとします。
                </p>

                <p>
                  そのため、情報が少ない場合には、実際には確認していない
                  子どもの気持ちや成長まで、もっともらしい表現で
                  補ってしまうことがあります。
                </p>

                <p>
                  例えば、「楽しんでいた」という入力から「達成感を味わっていた」
                  「友だちと協力する喜びを感じていた」と表現されても、
                  本当にそのような姿が見られたとは限りません。
                </p>

                <p>
                  読みやすい文章であっても、書かれている内容が事実とは限りません。
                  記録に残す前に「この姿は実際に見られたか」「この表現は
                  その子に合っているか」を、保育士自身が確認することが大切です。
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                子どもの姿を具体的に伝えると、文章も変わる
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  AIを使うときは、難しい文章を書く必要はありません。
                </p>

                <p>
                  「何をしていたか」だけでなく、表情や言葉、その前に見られた姿、
                  保育士がどのように関わったか、以前と比べて何が変わったかなどを
                  短い言葉で加えると、その子の姿に近い文章を作りやすくなります。
                </p>

                <p>
                  例えば、「友だちと遊んでいた」だけでなく、
                  「これまでは一人で遊ぶことが多かったが、今日は自分から
                  友だちに声をかけ、一緒に積み木の家を作っていた」と入力します。
                </p>

                <p>
                  少し具体的にするだけで、AIが作る文章も、その子らしい姿を
                  反映しやすくなります。
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                最後に文章を完成させるのは保育士
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  AIが作った文章を確認したり、書き直したりすることを、
                  余計な作業のように感じることもあるかもしれません。
                </p>

                <p>
                  しかし、その確認は単なる文章の修正ではありません。
                  実際の子どもの姿を思い返し、「この表現でよいか」
                  「本当に残したいことは何か」を考えることは、
                  その日の関わりを振り返る時間でもあります。
                </p>

                <p>
                  AIが文章のたたき台を作り、保育士が実際の姿に合わせて整える。
                </p>

                <p>
                  この役割分担によって、一から文章を考える負担を減らしながら、
                  子どもの姿に合った記録を残すことができます。
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-medium leading-relaxed text-slate-950">
                保育AIノートが目指していること
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  AIには、子どもの姿を見つけることはできません。小さな変化に
                  気づくことも、その子の気持ちを想像しながら関わることも、
                  日々の積み重ねの中で育まれた関係を理解することもできません。
                </p>

                <p>
                  一方で、保育士が気づいたことを整理し、文章の形にすることは
                  手伝えます。最初の一文を作る、別の言い方を提案する、
                  頭の中にある考えを読みやすい順番に整えるといった使い方です。
                </p>

                <p>
                  保育AIノートは、AIだけで記録を完成させるためのサービスでは
                  ありません。保育士が実際に見た子どもの姿や、そのときの
                  関わりについて考えたことを、文章としてまとめるための
                  サポートを目指しています。
                </p>

                <p>
                  AIが作った文章を答えにするのではなく、考えるための
                  たたき台にする。そして最後は、目の前の子どもを知っている
                  保育士が、自分の言葉で整える。
                </p>

                <p>
                  AIの便利さを取り入れながらも、子どもの姿を丁寧に見ることは
                  手放さない。そのような使い方を、保育AIノートでは
                  大切にしていきたいと思っています。
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
