import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "创业心法顾问",
  description: "用道德经、道家思想和 AI 创业实战解答创业困惑。",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
