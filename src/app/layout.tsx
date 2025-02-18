import type { Metadata } from "next";
import { Quicksand, Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Frutify",
  description: "Explore nossa coleção de frutas, filtre por características e descubra seus valores nutricionais.",
};

const QuicksandFont = Quicksand({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const InterFont = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${QuicksandFont} ${InterFont}`}>
        {children}
      </body>
    </html>
  );
}
