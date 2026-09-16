import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜保育AIノート",
  description:
    "保育AIノートにおける個人情報の取り扱い、Cookie、アクセス解析、広告配信、Google AdSenseなどの外部サービスの利用について定めたプライバシーポリシーです。",
};

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>
        </section>

        {/* はじめに */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-[15px] leading-[2] text-slate-600 sm:text-base">
              保育AIノートでは、利用者の情報を適切に取り扱うため、
              以下のとおりプライバシーポリシーを定めます。
            </p>
          </div>
        </section>

        {/* 1 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              1. 個人情報の利用目的
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、お問い合わせへの対応や、
                サービスに関する必要なご連絡などのために、
                お名前、メールアドレス、お問い合わせ内容などの
                情報を取得する場合があります。
              </p>

              <p>
                取得した情報は、お問い合わせへの回答、
                サービスの運営・改善、不正利用の防止、
                その他サービス提供に必要な範囲で利用します。
              </p>
            </div>
          </div>
        </section>

        {/* 2 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              2. 取得する情報
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、サービスの利用状況に応じて、
                以下の情報を取得する場合があります。
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>お問い合わせ時に入力されたお名前</li>
                <li>メールアドレス</li>
                <li>お問い合わせ内容</li>
                <li>IPアドレス</li>
                <li>ブラウザや端末に関する情報</li>
                <li>閲覧したページや利用状況に関する情報</li>
                <li>Cookieなどを利用して取得される情報</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              3. AI機能の利用について
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、入力された活動内容や子どもの様子などをもとに、
                AIを利用して文章作成をサポートする機能を提供しています。
              </p>

              <p>
                AI機能を利用する際は、子どもの氏名、住所、電話番号、
                園児を特定できる情報など、
                個人を特定できる情報を入力しないようお願いいたします。
              </p>

              <p>
                生成された文章については、
                実際の子どもの姿や園の方針、クラスの状況などに合わせて、
                利用者自身で内容を確認・修正したうえでご利用ください。
              </p>
            </div>
          </div>
        </section>

        {/* 4 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              4. Cookieについて
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、サービスの利便性向上、
                利用状況の把握、広告配信などを目的として、
                Cookieを使用する場合があります。
              </p>

              <p>
                Cookieとは、Webサイトを利用した際に、
                ブラウザに保存される小さな情報ファイルです。
                Cookieそのものによって、氏名や住所などの
                個人情報を直接特定するものではありません。
              </p>

              <p>
                利用者はブラウザの設定により、
                Cookieを無効にすることができます。
                ただし、Cookieを無効にした場合、
                サービスの一部が正常に利用できない場合があります。
              </p>
            </div>
          </div>
        </section>

        {/* 5 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              5. 広告配信について
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、今後、
                第三者配信の広告サービス
                「Google AdSense（グーグルアドセンス）」を
                利用する場合があります。
              </p>

              <p>
                Googleなどの第三者配信事業者は、
                利用者の興味に応じた広告を表示するため、
                Cookieを使用する場合があります。
              </p>

              <p>
                Googleが広告Cookieを使用することにより、
                当サイトや他のWebサイトへのアクセス情報をもとに、
                Googleおよびそのパートナーが広告を表示する場合があります。
              </p>

              <p>
                また、広告配信に伴い、
                第三者が利用者のブラウザにCookieを保存したり、
                Cookieを読み取ったり、
                ウェブビーコンやIPアドレスなどを利用して
                情報を収集する場合があります。
              </p>

              <p>
                Googleによるデータの取り扱いや広告設定については、
                Googleが提供する各種ポリシーや広告設定ページをご確認ください。
              </p>

              <div className="space-y-3 pt-1">
                <div>
                  <a
                    href="https://policies.google.com/technologies/partner-sites?hl=ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-sky-600 transition hover:text-sky-700"
                  >
                    Googleがパートナーサイトから収集した情報を使用する方法 →
                  </a>
                </div>

                <div>
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-sky-600 transition hover:text-sky-700"
                  >
                    Google広告設定 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              6. アクセス解析について
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、サービスの利用状況を把握し、
                サイトの改善に役立てるため、
                アクセス解析サービスを利用する場合があります。
              </p>

              <p>
                アクセス解析サービスでは、
                Cookieなどを利用して、
                閲覧したページ、利用しているブラウザや端末、
                IPアドレスなどの情報が取得される場合があります。
              </p>

              <p>
                これらの情報は、
                サイトの利用状況の分析やサービス改善などに利用します。
              </p>
            </div>
          </div>
        </section>

        {/* 7 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              7. 第三者への情報提供
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、法令に基づく場合などを除き、
                本人の同意なく個人情報を第三者へ提供することはありません。
              </p>

              <p>
                ただし、サービス運営に必要な範囲で、
                外部サービスや業務委託先を利用する場合があります。
                その場合も、必要な範囲で適切な情報管理に努めます。
              </p>
            </div>
          </div>
        </section>

        {/* 8 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              8. 個人情報の安全管理
            </h2>

            <div className="mt-7 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、
                取得した情報への不正アクセス、
                情報の紛失、漏えい、改ざんなどを防止するため、
                必要かつ適切な安全管理に努めます。
              </p>
            </div>
          </div>
        </section>

        {/* 9 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              9. 外部リンクについて
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートには、
                外部のWebサイトやサービスへのリンクが含まれる場合があります。
              </p>

              <p>
                外部サイトで提供される情報やサービス、
                個人情報の取り扱いについては、
                各サイトのプライバシーポリシー等をご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* 10 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              10. 免責事項
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートでは、
                掲載情報やAIによって生成された文章について、
                できる限り適切な内容となるよう努めていますが、
                正確性、完全性、有用性などを保証するものではありません。
              </p>

              <p>
                当サービスを利用したことによって生じた損害等については、
                法令上責任を負う場合を除き、
                当サイトでは責任を負いかねます。
              </p>

              <p>
                保育に関する最終的な判断については、
                実際の子どもの状況や園の方針などを踏まえて、
                利用者自身の判断で行ってください。
              </p>
            </div>
          </div>
        </section>

        {/* 11 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              11. プライバシーポリシーの変更
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                本ポリシーは、
                法令やサービス内容の変更などに応じて、
                必要に応じて内容を見直し、
                変更する場合があります。
              </p>

              <p>
                変更後のプライバシーポリシーは、
                本ページに掲載した時点から適用されるものとします。
              </p>
            </div>
          </div>
        </section>

        {/* 12 */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xl font-medium text-slate-950 sm:text-2xl">
              12. お問い合わせ
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                本ポリシーや個人情報の取り扱いに関するお問い合わせは、
                お問い合わせページよりご連絡ください。
              </p>

              <Link
                href="/contact"
                className="inline-flex text-sm font-medium text-sky-600 transition hover:text-sky-700"
              >
                お問い合わせページへ →
              </Link>
            </div>
          </div>
        </section>

        {/* 制定日 */}
        <section className="border-t border-slate-100 bg-white py-12">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="text-sm leading-7 text-slate-500">
              <p>制定日：2026年8月31日</p>
              <p className="mt-1">運営：保育AIノート運営者</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}