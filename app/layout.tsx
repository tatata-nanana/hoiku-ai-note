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
  metadataBase: new URL("https://hoikuainote.com"),

  title: {
    default:
      "保育AIノート｜保育士の月案・日誌・書類作成をAIでサポート",
    template: "%s｜保育AIノート",
  },

  description:
    "保育AIノートは、保育士の月案や日誌などの書類作成をサポートするサービスです。年齢・月・活動内容・子どもの様子を入力すると、ねらい、評価・反省、養護、援助・配慮、環境構成など、必要な文章のたたき台をAIで作成できます。",

  applicationName: "保育AIノート",

  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "保育AIノート",
    title:
      "保育AIノート｜保育士の月案・日誌・書類作成をAIでサポート",
    description:
      "保育AIノートは、保育士の月案や日誌などの書類作成をサポートするサービスです。年齢・月・活動内容・子どもの様子を入力すると、ねらい、評価・反省、養護、援助・配慮、環境構成など、必要な文章のたたき台をAIで作成できます。",
    url: "https://hoikuainote.com",
  },

  robots: {
    index: true,
    follow: true,
  },
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