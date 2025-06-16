import { NextResponse } from "next/server";
import { getAllNews } from "@/lib/server/actions";

interface NewsRow {
  id: number;
  company: string;
  desc: string;
  desc_translated: string | null;
  source_lang: string;
  city: string;
  country: string;
  country_translated: string | null;
  contact: string;
  image: string | null;
  creator_id: string;
  created_at: string;
  website: string | null;
}

interface NewsResponse {
  id: number;
  company: string;
  city: string;
  contact: string;
  image: string | null;
  creator_id: string;
  created_at: string;
  desc: string;
  country: string;
  website: string | null;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") ?? "1", 10);
    const uiLang = url.searchParams.get("lang") === "en" ? "en" : "da";

    const { news, total } = await getAllNews(page);
    const raw = news as NewsRow[];

    const transformed: NewsResponse[] = raw.map((c) => {
      const desc =
        c.source_lang === uiLang ? c.desc : c.desc_translated ?? c.desc;
      const country =
        uiLang === "en" ? c.country_translated ?? c.country : c.country;
      return {
        id: c.id,
        company: c.company,
        city: c.city,
        contact: c.contact,
        image: c.image,
        creator_id: c.creator_id,
        created_at: c.created_at,
        desc,
        country,
        website: c.website,
      };
    });

    return NextResponse.json({ cases: transformed, total }, { status: 200 });
  } catch (err: unknown) {
    console.error("API GET /api/news error:", err);
    const message =
      err instanceof Error ? err.message : "Unknown error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
