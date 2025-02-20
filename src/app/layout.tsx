import type { Metadata } from "next";
import { Quicksand, Inter } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Frutify",
  description: "Explore nossa coleção de frutas, filtre por características e descubra seus valores nutricionais.",
};

const QuicksandFont = Quicksand({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-quicksand",
})

const InterFont = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${QuicksandFont.variable} ${InterFont.variable}`}>
      <body className="flex flex-col h-screen bg-emerald-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
