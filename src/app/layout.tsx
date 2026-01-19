import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // turbo-import
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "IPLANRIO - Catálogo de Produtos",
  description: "Catálogo de produtos e serviços digitais da Prefeitura do Rio de Janeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans.className} ${dmSans.variable} antialiased bg-slate-50 min-h-screen text-slate-900`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
