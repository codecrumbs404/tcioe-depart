import { NextRequest } from "next/server";
import { API_BASE, API_PUBLIC_PREFIX } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Properly construct the URL by ensuring correct path concatenation
  const baseUrl = API_BASE.replace(/\/$/, "");
  const prefix = API_PUBLIC_PREFIX.startsWith("/")
    ? API_PUBLIC_PREFIX
    : `/${API_PUBLIC_PREFIX}`;
  const target = `${baseUrl}${prefix}/departments/${slug}`;

  try {
    // Validate URL construction
    new URL(target);

    const res = await fetch(target, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    const body = await res.text();
    const ct = res.headers.get("content-type") || "application/json";
    return new Response(body, {
      status: res.status,
      statusText: res.statusText,
      headers: { "content-type": ct },
    });
  } catch (error) {
    console.error("Failed to construct or fetch URL:", target, error);
    return new Response(
      JSON.stringify({ error: "Invalid URL configuration", target }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}
