// src/SEO/generate-sitemap.mjs
// Gera dist/sitemap.xml para o domínio https://rafalex.dev
// usando a lista de slugs em src/SEO/projects-slugs.json

import fs from "node:fs";
import path from "node:path";

const rootUrl = "https://rafalex.dev";

const distDir = path.resolve(process.cwd(), "dist");
const outputPath = path.join(distDir, "sitemap.xml");

const slugsPath = path.resolve(
  process.cwd(),
  "src/SEO/projects-slugs.json"
);

function isoToday() {
  return new Date().toISOString().split("T")[0];
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry(loc, changefreq = "monthly", priority = "0.7") {
  return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${isoToday()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function ensureDist() {
  if (!fs.existsSync(distDir)) {
    console.error("❌ Pasta dist não existe. Rode `npm run build` antes.");
    process.exit(1);
  }
}

function readSlugs() {
  if (!fs.existsSync(slugsPath)) {
    console.error("❌ Não achei src/SEO/projects-slugs.json");
    process.exit(1);
  }

  try {
    const raw = fs.readFileSync(slugsPath, "utf-8");
    const data = JSON.parse(raw);

    if (!data?.slugs || !Array.isArray(data.slugs)) {
      console.error(
        '❌ projects-slugs.json precisa ter o formato { "slugs": ["projeto-1", "projeto-2"] }'
      );
      process.exit(1);
    }

    return data.slugs
      .filter(Boolean)
      .map(String)
      .map((slug) => slug.trim())
      .filter(Boolean);
  } catch (error) {
    console.error("❌ Erro ao ler projects-slugs.json:", error.message);
    process.exit(1);
  }
}

function buildSitemapXml(slugs) {
  const urls = [];

  // Home
  urls.push(urlEntry(`${rootUrl}/`, "weekly", "1.0"));

  // Páginas individuais de projeto
  for (const slug of slugs) {
    const encodedSlug = encodeURIComponent(slug);

    urls.push(
      urlEntry(
        `${rootUrl}/projeto/${encodedSlug}`,
        "monthly",
        "0.8"
      )
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`✅ Sitemap gerado em: ${filePath}`);
}

function main() {
  ensureDist();

  const slugs = readSlugs();
  const xml = buildSitemapXml(slugs);

  writeFile(outputPath, xml);

  console.log(`✅ ${slugs.length + 1} URLs adicionadas ao sitemap.`);
  console.log(`🌐 Domínio utilizado: ${rootUrl}`);
}

main();