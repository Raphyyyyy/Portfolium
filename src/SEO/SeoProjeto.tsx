import { useMemo } from "react";
import { Helmet } from "react-helmet-async";

type SeoProjetoProps = {
  slug?: string;
  title: string;
  tagsPrincipais?: string[];
  tagsExtras?: string[];
  metadata?: any;

  // quando for mudar o dominio pra (AWS), muda num lugar só.
  siteOrigin?: string; // ex: https://raphyyyyy.github.io
};

export default function SeoProjeto({
  slug,
  title,
  tagsPrincipais = [],
  tagsExtras = [],
  metadata,
  siteOrigin = "https://raphyyyyy.github.io",
}: SeoProjetoProps) {
  const basePathSemBarraFinal = (import.meta.env.BASE_URL || "/").replace(
    /\/$/,
    ""
  );

  const canonicalUrl = slug
    ? `${siteOrigin}${basePathSemBarraFinal}/projeto/${slug}`
    : `${siteOrigin}${basePathSemBarraFinal}`;

  const stripHtml = (html: string) =>
    html
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const descricaoSeo = useMemo(() => {
    const seodescRaw =
      metadata?.seodesc || metadata?.descricaoSeo || metadata?.texto1 || "";

    const limpa = stripHtml(String(seodescRaw || ""));
    const fallback = `Projeto ${title} desenvolvido com ${[
      ...tagsPrincipais,
      ...tagsExtras,
    ]
      .filter(Boolean)
      .slice(0, 8)
      .join(", ")}.`;

    return (limpa || fallback).slice(0, 160);
  }, [metadata, title, tagsPrincipais, tagsExtras]);

  const tituloSeo = `${title} | Rafael Nunes (React, TypeScript, Web Design)`;

  const ogImage = metadata?.iconimage
    ? `${siteOrigin}${basePathSemBarraFinal}${
        String(metadata.iconimage).startsWith("/") ? "" : "/"
      }${metadata.iconimage}`
    : `${siteOrigin}${basePathSemBarraFinal}/assets/pc.png`;

  const schemaProjeto = useMemo(() => {
    const todasTags = [...tagsPrincipais, ...tagsExtras].filter(Boolean);

    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: title,
      description: descricaoSeo,
      url: canonicalUrl,
      keywords: todasTags.join(", "),
      author: {
        "@type": "Person",
        name: "Rafael Nunes",
        url: "https://www.linkedin.com/in/rafael-nunes-a078ba158/",
      },
    };
  }, [title, descricaoSeo, canonicalUrl, tagsPrincipais, tagsExtras]);

  return (
    <Helmet>
      <title>{tituloSeo}</title>
      <meta name="description" content={descricaoSeo} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={tituloSeo} />
      <meta property="og:description" content={descricaoSeo} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={tituloSeo} />
      <meta name="twitter:description" content={descricaoSeo} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(schemaProjeto)}
      </script>
    </Helmet>
  );
}