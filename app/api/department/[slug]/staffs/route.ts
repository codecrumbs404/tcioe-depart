import { NextRequest } from 'next/server'
import { API_BASE, API_PUBLIC_PREFIX } from '@/lib/env'

export const dynamic = 'force-dynamic'

function buildQuery(params: URLSearchParams) {
  const usp = new URLSearchParams()
  for (const [k, v] of params.entries()) {
    if (v != null && v !== '') usp.set(k, v)
  }
  const qs = usp.toString()
  return qs ? `?${qs}` : ''
}

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params
  const url = new URL(req.url)
  const qs = buildQuery(url.searchParams)
  const target = `${API_BASE.replace(/\/$/, '')}${API_PUBLIC_PREFIX}/departments/${slug}/staffs${qs}`
  const res = await fetch(target, { headers: { accept: 'application/json' }, cache: 'no-store' })
  const body = await res.text()
  const ct = res.headers.get('content-type') || 'application/json'
  return new Response(body, { status: res.status, statusText: res.statusText, headers: { 'content-type': ct } })
}

