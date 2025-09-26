export const USE_PROXY =
  (process.env.NEXT_PUBLIC_USE_PROXY || "").toLowerCase() === "true";

export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "https://api-staging.tcioe.edu.np";
export const API_PUBLIC_PREFIX =
  process.env.NEXT_PUBLIC_API_PUBLIC_PREFIX || "/api/v1/public/department-mod";
export const API_NOTICE_PUBLIC_PREFIX =
  process.env.NEXT_PUBLIC_API_NOTICE_PUBLIC_PREFIX || "/api/v1/public/notice-mod";

export const DEPARTMENT_CODE = (
  process.env.NEXT_PUBLIC_DEPARTMENT || "doas"
).toLowerCase();

export function getPublicApiUrl(path: string) {
  // When using Next.js route proxy, prepend /api/proxy
  if (USE_PROXY) return `/api/proxy${path.startsWith("/") ? "" : "/"}${path}`;
  const base = API_BASE.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}
