import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/shared/presentation/layout/header/header";
import Content from "@/shared/presentation/layout/content/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poplin Pokédex",
  description: "List of pokemons extracted from the PokéAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <Content>
          {children}
        </Content>
      </body>
    </html>
  );
}
