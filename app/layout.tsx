import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "DevNova Studio: Design & Communication",
  description:
    "DevNova is a design and communication studio in Buenos Aires. We build brand systems and put them to work across web, decks, LinkedIn and newsletters.",
  keywords: ["design studio", "brand system", "design system", "web design", "communication design", "Buenos Aires", "DevNova"],
  authors: [{ name: "DevNova Studio" }],
  openGraph: {
    title: "DevNova Studio: Design & Communication",
    description: "One system. Every channel. Nothing off-brand.",
    url: "https://devnova.com",
    siteName: "DevNova Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevNova Studio: Design & Communication",
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
      className={`${inter.variable} antialiased`}
    >
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XMT952YT7C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XMT952YT7C');
          `}
        </Script>
        <LangProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LangProvider>
      </body>
    </html>
  );
}
