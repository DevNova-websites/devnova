"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LEGAL } from "@/lib/legal";

/** Layout compartido de la Política de Privacidad y la Política de Cookies. */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-deepspace/60 hover:text-nebula transition-colors mb-12 md:mb-16"
      >
        ← {lang === "es" ? "Volver al inicio" : "Back to home"}
      </Link>

      <p className="section-label block mb-6">Legal</p>
      <h1 className="font-heading font-bold text-4xl md:text-6xl tracking-[-0.02em] text-deepspace mb-6">
        {title}
      </h1>
      <p className="text-base md:text-lg text-deepspace/70 leading-relaxed max-w-2xl">{intro}</p>
      <p className="text-sm text-deepspace/40 mt-6">
        {lang === "es" ? "Última actualización" : "Last updated"}: {LEGAL.lastUpdated[lang]}
      </p>

      <article
        className="hairline mt-12 pt-12 max-w-3xl text-deepspace/80 leading-relaxed
          [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-deepspace [&_h2]:mt-12 [&_h2:first-child]:mt-0 [&_h2]:mb-4
          [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-deepspace [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:font-normal [&_strong]:text-deepspace
          [&_a]:text-nebula [&_a]:underline [&_a]:underline-offset-2
          [&_table]:w-full [&_table]:text-sm [&_table]:mb-6 [&_th]:text-left [&_th]:font-normal [&_th]:text-deepspace
          [&_th]:py-3 [&_th]:pr-4 [&_th]:border-b [&_th]:border-deepspace/20
          [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top [&_td]:border-b [&_td]:border-deepspace/10"
      >
        {children}
      </article>
    </div>
  );
}
