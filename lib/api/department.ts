import type { QueryParams } from '@/lib/api/fetch'
import type {
  DepartmentDetail,
  DepartmentDownload,
  DepartmentEvent,
  DepartmentPlan,
  DepartmentProgram,
  DepartmentStaff,
  EventGalleryItem,
  Paginated,
} from '@/lib/types/department'

function buildQuery(params?: QueryParams) {
  if (!params) return ''
  const usp = new URLSearchParams()
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null) return
    usp.set(k, String(v))
  })
  const qs = usp.toString()
  return qs ? `?${qs}` : ''
}

function absolutize(path: string) {
  if (typeof window !== 'undefined') return path
  // Server-side: build an absolute URL for relative API routes
  if (/^https?:\/\//i.test(path)) return path
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined
  const site = process.env.NEXT_PUBLIC_SITE_URL
  const base = site || vercel || 'http://localhost:3000'
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

async function getJson<T>(path: string, params?: QueryParams): Promise<T> {
  const url = absolutize(`${path}${buildQuery(params)}`)
  const res = await fetch(url, { next: { revalidate: 60 }, headers: { accept: 'application/json' } })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`GET ${url} failed: ${res.status} ${res.statusText} ${text}`)
  }
  return (await res.json()) as T
}

export function getDepartment(slug: string): Promise<DepartmentDetail> {
  return getJson<DepartmentDetail>(`/api/department/${slug}`)
}

export function listDepartmentDownloads(
  slug: string,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<DepartmentDownload>> {
  return getJson<Paginated<DepartmentDownload>>(`/api/department/${slug}/downloads`, params)
}

export function listDepartmentEvents(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentEvent>> {
  return getJson<Paginated<DepartmentEvent>>(`/api/department/${slug}/events`, params)
}

export function listDepartmentPlans(
  slug: string,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<DepartmentPlan>> {
  return getJson<Paginated<DepartmentPlan>>(`/api/department/${slug}/plans`, params)
}

export function listDepartmentPrograms(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentProgram>> {
  return getJson<Paginated<DepartmentProgram>>(`/api/department/${slug}/programs`, params)
}

export function listDepartmentStaffs(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentStaff>> {
  return getJson<Paginated<DepartmentStaff>>(`/api/department/${slug}/staffs`, params)
}

export function listEventGallery(
  eventId: number,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<EventGalleryItem>> {
  return getJson<Paginated<EventGalleryItem>>(`/api/department/events/${eventId}/gallery`, params)
}
