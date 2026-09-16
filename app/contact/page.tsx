import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "お問い合わせ｜保育AIノート",
  description:
    "保育AIノートへのお問い合わせページです。サービスに関するご質問、ご意見・ご感想、不具合のご報告、改善のご要望などを受け付けています。",
};

export default function ContactPage() {
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
            お問い合わせ
          </h1>
        </section>

        {/* お問い合わせについて */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              お問い合わせについて
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                保育AIノートをご利用いただきありがとうございます。
                サービスに関するご質問やご意見、不具合のご報告、
                改善してほしい点などがございましたら、
                メールよりお問い合わせください。
              </p>

              <p>
                サービスの使い方や文章生成についてのご質問、
                表示上の問題や不具合、機能追加についてのご要望など、
                保育AIノートに関するお問い合わせを受け付けています。
              </p>
            </div>
          </div>
        </section>

        {/* メール */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              メールでお問い合わせ
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                下のボタンを押すと、端末のメールアプリが起動します。
                お問い合わせ内容をご記入のうえ、お送りください。
              </p>

              <a
                href="mailto:hoikuainote@gmail.com?subject=保育AIノートについてのお問い合わせ"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                メールでお問い合わせする
              </a>

              <div className="pt-2">
                <p className="text-sm leading-7 text-slate-500">
                  メールアプリが起動しない場合は、下記のメールアドレスへ
                  直接ご連絡ください。
                </p>

                <a
                  href="mailto:hoikuainote@gmail.com"
                  className="mt-2 inline-block text-sm font-medium text-sky-600 transition hover:text-sky-700"
                >
                  hoikuainote@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 返信について */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              お問い合わせへの返信について
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                お送りいただいた内容を確認のうえ、
                必要に応じて返信いたします。
              </p>

              <p>
                お問い合わせの内容によっては、
                回答までにお時間をいただく場合があります。
                また、内容によってはすべてのお問い合わせに
                個別の回答ができない場合がありますので、
                あらかじめご了承ください。
              </p>
            </div>
          </div>
        </section>

        {/* 個人情報 */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
              個人情報について
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[2] text-slate-600 sm:text-base">
              <p>
                お問い合わせの際にお送りいただいたメールアドレスや
                お問い合わせ内容などの情報は、
                お問い合わせへの対応に必要な範囲で利用します。
              </p>

              <p>
                また、サービスに関するご質問や不具合のご報告をいただく際も、
                子どもや保護者の氏名、住所、電話番号など、
                個人を特定できる情報は記載しないようお願いいたします。
              </p>

              <Link
                href="/privacy"
                className="inline-flex pt-1 text-sm font-medium text-sky-600 transition hover:text-sky-700"
              >
                プライバシーポリシーを確認する →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}