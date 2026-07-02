import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dao De Jing For Founders",
  description:
    "A founder compass that uses the Dao De Jing and Taoist philosophy to help AI founders think through product, timing, leverage, and restraint.",
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
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
