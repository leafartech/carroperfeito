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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WP6PNNC')
        `}} />
      </head>
      <body className={sora.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WP6PNNC"
          height="0" width="0"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
