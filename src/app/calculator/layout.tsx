import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora Nutricional | Frutify",
  description: "Calcule quantos nutrientes você obteve hoje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
