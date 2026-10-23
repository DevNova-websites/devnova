import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import CookieConsent from "@/components/CookieConsent";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "DevNova: Design & Communication",
  description:
    "DevNova is a design and communication studio in Buenos Aires. We build brand systems and put them to work across web, decks, LinkedIn and newsletters.",
  keywords: ["design studio", "brand system", "design system", "web design", "communication design", "Buenos Aires", "DevNova"],
  authors: [{ name: "DevNova" }],
  openGraph: {
    title: "DevNova: Design & Communication",
    description: "One system. Every channel. Nothing off-brand.",
    url: "https://devnova.com.ar",
    siteName: "DevNova",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevNova: Design & Communication",
    description: "One system. Every channel. Nothing off-brand.",
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
      lang="en"
      className={`${syne.variable} ${inter.variable} antialiased`}
    >
      <body>
        <LangProvider>
          {children}
          {/* Google Analytics se carga desde acá, solo después de "Aceptar". */}
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  );
}
