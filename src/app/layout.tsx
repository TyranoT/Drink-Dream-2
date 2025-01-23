import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: "./fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Drink Dream",
  description: "Seu sonho de drinks.",
  creator: "Italo Monteiro Leite",
  keywords: "Receitas, Drinks, Bebidas, Coquiteis, Bar, Barman, Bartender, Refrescante, Alcool, Sem Alcool",
  authors: [{ name: "Italo Monteiro Leite", url: "https://www.linkedin.com/in/italo-monteiro-leite" }],
  icons: "icon/favicon_drin.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased bg-[url('/images/background_layout.jpg')] bg-cover bg-center bg-fixed min-h-screen max-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
