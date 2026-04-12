import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 保育AIノート",
  description:
    "保育AIノートのプライバシーポリシー。お問い合わせ時に取得する情報の取り扱いについてご案内します。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h1 className="text-2xl font-bold text-slate-800">
              プライバシーポリシー
            </h1>
          </div>

          <div className="p-6 space-y-6 text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                1. 個人情報の利用目的
              </h2>
              <p>
                保育AIノートでは、お問い合わせへの対応や必要なご連絡のために、
                お名前、メールアドレス、お問い合わせ内容などの情報を利用する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                2. 取得する情報
              </h2>
              <p>
                お問い合わせページの利用時に、お名前、メールアドレス、
                お問い合わせ内容などの情報を取得する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                3. 第三者提供について
              </h2>
              <p>
                法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                4. 安全管理について
              </h2>
              <p>
                取得した情報については、不正アクセス、漏えい、改ざんなどを防ぐため、
                適切な管理に努めます。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                5. 本ポリシーの変更
              </h2>
              <p>
                本ポリシーの内容は、必要に応じて見直し、予告なく変更する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-800">
                6. お問い合わせ
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}