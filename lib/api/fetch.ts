import { getPublicApiUrl } from '@/lib/env'

export type QueryParams = Record<string, string | number | boolean | undefined>

export function buildQuery(params?: QueryParams) {
  if (!params) return ''
  const usp = new URLSearchParams()
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null) return
    usp.set(k, String(v))
  })
  const qs = usp.toString()
  return qs ? `?${qs}` : ''
}

export async function apiGet<T>(path: string, params?: QueryParams): Promise<T> {
  const url = `${getPublicApiUrl(path)}${buildQuery(params)}`
  const res = await fetch(url, { next: { revalidate: 60 }, headers: { accept: 'application/json' } })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`GET ${url} failed: ${res.status} ${res.statusText} ${text}`)
  }
  return (await res.json()) as T
}

