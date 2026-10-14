import type { MetadataRoute } from "next";
import { examples } from "./lib/examples";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hoikuainote.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/examples`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/column`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 年齢別ページ
  const agePages: MetadataRoute.Sitemap = Array.from(
    new Map(
      examples.map((example) => [
        example.ageSlug,
        {
          url: `${baseUrl}/examples/${example.ageSlug}`,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        },
      ])
    ).values()
  );

  // 年齢 × 月別の作例ページ
  const examplePages: MetadataRoute.Sitemap = examples.map((example) => ({
    url: `${baseUrl}/examples/${example.ageSlug}/${example.monthSlug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 製作者コラム
  const columnPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/column/why-i-made-hoiku-ai-note`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/column/ai-and-childcare`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/column/ai-cannot-see-child`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/column/improving-hoiku-ai-note`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [
    ...staticPages,
    ...agePages,
    ...examplePages,
    ...columnPages,
  ];
}