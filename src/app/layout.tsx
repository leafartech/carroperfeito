import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Página de inscrição | Jornada VCA | Carro Perfeito",
  description: "Jornada VCA - Carro Perfeito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
