"use client";

import { useParams } from "next/navigation";
import PriceClient from "./PriceClient";

const allowedSlugs = [
  "bil-korekort",
  "trailer-korekort",
  "traktor-korekort",
  "generhvervelse-korekort",
] as const;

type ProductSlug = (typeof allowedSlugs)[number];

export default function Page() {
  const { slug } = useParams() as { slug?: string };

  if (!slug || !allowedSlugs.includes(slug as ProductSlug)) {
    return <div className="p-6">Ikke fundet</div>;
  }

  const typedSlug = slug as ProductSlug;

  const seoData: Record<ProductSlug, { title: string; description: string }> = {
    "bil-korekort": {
      title: "Bil kørekort – Priser & forløb",
      description: "Se pris og forløb for bilkørekort hos os.",
    },
    "trailer-korekort": {
      title: "Trailer kørekort – Pris og detaljer",
      description: "Få overblik over dit trailerkørekortforløb.",
    },
    "traktor-korekort": {
      title: "Traktor kørekort",
      description: "Priser og indhold for kørekort til traktor.",
    },
    "generhvervelse-korekort": {
      title: "Generhvervelse",
      description: "Sådan generhverver du dit kørekort.",
    },
  };

  const seo = seoData[typedSlug];

  return <PriceClient slug={typedSlug} />;
}
