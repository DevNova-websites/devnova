import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevNova — Desarrollo Web que Convierte",
  description:
    "Agencia de diseño web en Argentina. Creamos sitios modernos, rápidos y a medida. Diseño web, branding y gestión de redes sociales. Solicitá tu presupuesto gratis.",
  keywords: ["desarrollo web", "agencia web", "landing page", "diseño web", "branding", "redes sociales", "DevNova", "diseño web Argentina"],
  authors: [{ name: "DevNova" }],
  openGraph: {
    title: "DevNova — Desarrollo Web que Convierte",
    description: "Creamos sitios web modernos y rápidos diseñados para vender.",
    url: "https://devnova.com",
    siteName: "DevNova",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevNova — Desarrollo Web que Convierte",
    description: "Creamos sitios web modernos y rápidos diseñados para vender.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
