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
    default: "保育AIノート｜月案・日誌・連絡帳の文章作成AI",
    template: "%s｜保育AIノート",
  },
  description:
    "保育AIノートは、保育士向けのAI文章作成ツールです。月案、日誌、連絡帳、活動文、ねらい、評価・反省、養護、援助・配慮、環境構成などのたたき台をかんたんに作成できます。",
  keywords: [
    "保育AIノート",
    "保育士 AI",
    "保育 書類 AI",
    "月案 作成",
    "日誌 作成",
    "連絡帳 文例",
    "保育 ねらい",
    "評価 反省",
    "保育 文章作成",
  ],
  openGraph: {
    title: "保育AIノート｜月案・日誌・連絡帳の文章作成AI",
    description:
      "月案、日誌、連絡帳、ねらい、評価・反省など、保育書類のたたき台をかんたんに作成できます。",
    siteName: "保育AIノート",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "保育AIノート｜月案・日誌・連絡帳の文章作成AI",
    description:
      "保育士向けのAI文章作成ツール。月案、日誌、連絡帳などのたたき台をかんたんに作成できます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}