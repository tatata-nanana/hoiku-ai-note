import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "保育AIノート｜保育士の月案・日誌・児童票をAIでかんたん作成",
    template: "%s | 保育AIノート",
  },
  description:
    "保育AIノートは、保育士の書類作成をAIでサポートする文章作成ツールです。年齢・月・活動内容・子どもの様子を入力するだけで、月案・日誌・連絡帳・児童票・ねらい・評価反省・養護・援助配慮・環境構成など、保育現場で必要な文章のたたき台をかんたんに作成できます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6716117111942699"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}