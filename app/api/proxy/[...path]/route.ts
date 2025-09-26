import { NextRequest } from 'next/server'
import { API_BASE } from '@/lib/env'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join('/')
  const url = new URL(req.url)
  const qs = url.search ? url.search : ''
  const target = `${API_BASE.replace(/\/$/, '')}/${path}${qs}`

  const res = await fetch(target, {
    headers: { accept: 'application/json' },
    cache: 'no-store',
  })

  const body = await res.text()
  const ct = res.headers.get('content-type') || 'application/json'
  return new Response(body, { status: res.status, statusText: res.statusText, headers: { 'content-type': ct } })
}
