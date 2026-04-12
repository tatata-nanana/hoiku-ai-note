import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h1 className="text-2xl font-bold text-slate-800">お問い合わせ</h1>
            <p className="mt-2 text-sm text-slate-500">
              ご質問やご意見がありましたら、下のボタンからご連絡ください。
            </p>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-slate-600">
              保育AIノートに関するご質問、ご感想、不具合のご連絡などを受け付けています。
            </p>

            <a
              href="mailto:hoikuainote@gmail.com?subject=保育AIノートについてのお問い合わせ"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition"
            >
              メールでお問い合わせする
            </a>

            <p className="text-xs text-slate-400">
              メールアプリが起動しない場合は、hoikuainote@gmail.com 宛に直接ご連絡ください。
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}