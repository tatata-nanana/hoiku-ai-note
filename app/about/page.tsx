import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h1 className="text-2xl font-bold text-slate-800">このサイトについて</h1>
          </div>

          <div className="p-6 space-y-6 text-slate-700 leading-relaxed">
            <p>
              保育AIノートは、保育士、幼稚園教諭、保育補助、認定こども園や保育施設で働く方に向けた、
              保育書類の文章作成をサポートするサービスです。保育の現場では、日々の活動記録、ねらい、
              評価・反省、おたより、月案、週案、養護、援助・配慮、環境構成など、
              さまざまな文章を作成する場面があります。
            </p>

            <p>
              保育AIノートでは、年齢、月、活動内容、子どもの様子などをもとに、
              保育の実践に合わせた文章のたたき台を作成できます。
              保育士向けの文章作成ツールとして、書類作成の負担を減らしながら、
              保育の視点を大切にした記録づくりを支えることを目的としています。
            </p>

            <p>
              活動文の書き出しに悩むとき、ねらいの表現がまとまらないとき、
              評価・反省をどう書けばよいか迷うときでも、
              必要な情報を入れることで文章の方向性を整理しやすくなります。
              内容はあるのに文章化に時間がかかる、という保育現場ならではの悩みに寄り添い、
              日々の書類作成を少しでもスムーズに進められるよう設計しています。
            </p>

            <p>
              保育AIノートは、文章を完全に任せるためのサービスではなく、
              保育者が考えている内容を整理し、自分の言葉で整えていくための補助として使える形を大切にしています。
              実際の子どもの姿や園の方針、クラスの実態に合わせて調整しながら使うことで、
              保育の専門性を保ちながら効率よく文章を作成できます。
            </p>

            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
              <h2 className="text-lg font-bold text-slate-800 mb-3">保育AIノートでできること</h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>活動文のたたき台作成</li>
                <li>ねらい、評価・反省の文章作成補助</li>
                <li>おたより向けの文章づくり</li>
                <li>5領域を意識した表現の整理</li>
                <li>養護、援助・配慮、環境構成の文章化</li>
                <li>保育書類の下書き作成の時短</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h2 className="text-lg font-bold text-slate-800 mb-3">こんな方におすすめ</h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>保育日誌や月案の文章作成に時間がかかる方</li>
                <li>活動文やねらいの表現に悩みやすい方</li>
                <li>保育書類の書き方を整理したい方</li>
                <li>保育の視点を残しながら、文章作成を効率化したい方</li>
              </ul>
            </div>

            <p className="text-sm text-slate-500">
              ※ 生成された文章は、実際の子どもの姿や園の方針に合わせて調整しながらご活用ください。
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}